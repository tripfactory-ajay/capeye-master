// CapEye v10 — Firebase Init (DB + Storage + Auth + PWA)

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}

// Firebase
const _app = firebase.initializeApp(FIREBASE_CONFIG);
const DB   = firebase.database();
const AUTH = firebase.auth();
const STORAGE = firebase.storage ? firebase.storage() : null;

// ── Auth state
let CURRENT_USER = null;
let CURRENT_ROLE = null;

AUTH.onAuthStateChanged(user => {
  if (user) {
    CURRENT_USER = user;
    DB.ref('staff/' + user.uid).once('value').then(snap => {
      if (snap.exists()) CURRENT_ROLE = snap.val().role;
    });
  } else {
    // Demo mode — use local staff lookup
    CURRENT_USER = { uid: 'demo', email: 'demo@autocapital.co.uk', displayName: 'Demo User' };
    CURRENT_ROLE = 'Director';
  }
});

// ── Push notifications
async function requestPushPermission() {
  if (!('Notification' in window)) return;
  const perm = await Notification.requestPermission();
  return perm === 'granted';
}

// ── Utility: send in-app notification
function showToast(msg, type = 'info', duration = 3500) {
  const toast = document.createElement('div');
  const colors = { info:'#3b82f6', success:'#10b981', warning:'#f59e0b', error:'#ef4444', urgent:'#C8102E' };
  toast.style.cssText = `position:fixed;bottom:24px;right:24px;padding:12px 20px;background:${colors[type]||colors.info};color:#fff;border-radius:10px;font-family:'IBM Plex Sans',sans-serif;font-size:13px;font-weight:600;z-index:9999;box-shadow:0 4px 24px rgba(0,0,0,.25);max-width:320px;line-height:1.4;animation:slideUp .3s ease`;
  toast.textContent = msg;
  if (!document.getElementById('toast-style')) {
    const s = document.createElement('style');
    s.id = 'toast-style';
    s.textContent = '@keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}';
    document.head.appendChild(s);
  }
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity='0'; toast.style.transition='opacity .3s'; setTimeout(()=>toast.remove(), 300); }, duration);
}

// ── Vehicle helpers
function getDaysInStage(stageStarted) {
  if (!stageStarted) return 0;
  const parts = stageStarted.split('/');
  const d = new Date(parts[2], parts[1]-1, parts[0]);
  return Math.floor((Date.now() - d.getTime()) / 86400000);
}

function isOverdue(vehicle) {
  return getDaysInStage(vehicle.stageStarted) > 3 && 
    !['Sold','Aftersales','Ready for Sale'].includes(vehicle.workflowStage);
}

function getMOTDaysLeft(motExpiry) {
  if (!motExpiry) return 999;
  const parts = motExpiry.split('/');
  const d = new Date(parts[2], parts[1]-1, parts[0]);
  return Math.floor((d.getTime() - Date.now()) / 86400000);
}

// ── Format date
function fmtDate(d) {
  if (!d) return '—';
  return d;
}

// ── Stage colour
function stageColor(stage) {
  const s = AC_WORKFLOW_STAGES.find(x => x.name === stage);
  return s ? s.color : '#64748b';
}

// ── Can user see purchase price
function canSeePurchasePrice() {
  // In demo mode allow sol/keith
  const u = localStorage.getItem('ce_user') || 'sol';
  const staff = AC_STAFF.find(s => s.id === u);
  return staff ? !!staff.canSeePurchasePrice : false;
}

// ── Get current logged in user (demo via localStorage)
function getCurrentUser() {
  const uid = localStorage.getItem('ce_user') || 'keith';
  return AC_STAFF.find(s => s.id === uid) || AC_STAFF[2];
}

// ── Write workflow event to Firebase
function logWorkflowEvent(reg, eventType, details, user) {
  const u = user || getCurrentUser();
  DB.ref(`workflow_log/${reg}`).push({
    timestamp: Date.now(),
    date: new Date().toLocaleDateString('en-GB'),
    time: new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}),
    eventType,
    details,
    user: u.name,
    userId: u.id
  });
}

// ── Auto-escalate: flag to Keith if >3 days in any pre-sale stage
function checkEscalations() {
  AC_VEHICLES.forEach(v => {
    if (isOverdue(v) && !v.blocked) {
      DB.ref(`escalations/${v.registration}`).set({
        registration: v.registration,
        stage: v.workflowStage,
        daysInStage: getDaysInStage(v.stageStarted),
        flaggedAt: Date.now(),
        message: `${v.registration} has been in ${v.workflowStage} for ${getDaysInStage(v.stageStarted)} days`
      });
    }
  });
}
