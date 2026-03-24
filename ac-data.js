// ╔══════════════════════════════════════════════════════════════════╗
// ║         CAPEYE AUTO CAPITAL — v10 SYSTEM DATA                   ║
// ╚══════════════════════════════════════════════════════════════════╝

const AC_VEHICLES = [
  {"stockNo":"14245","registration":"WV72CVW","regDate":"30/11/2022","make":"CITROEN","model":"DISPATCH","variant":"1.5 BlueHDi 100 BHP","colour":"WHITE","mileage":"85928","body":"PANEL VAN","doors":"6","fuel":"Diesel","gearbox":"Manual","fsh":"N","rfl":345,"mot":"29/11/2026","price":8490,"purchasePrice":6200,"status":"In Stock","location":"Stanmore Retail","dateIn":"19/02/2026","daysInStock":32,"workflowStage":"Intake","stageStarted":"23/02/2026","daysInStage":2,"blocked":false,"urgent":false},
  {"stockNo":"14222","registration":"KJ24ZSO","regDate":"31/07/2024","make":"CITROEN","model":"DISPATCH","variant":"1.5 BlueHDi Driver XL","colour":"WHITE","mileage":"31673","body":"PANEL VAN","doors":"6","fuel":"Diesel","gearbox":"Manual","fsh":"N","rfl":345,"mot":"31/07/2027","price":14990,"purchasePrice":11500,"status":"In Stock","location":"Stanmore Retail","dateIn":"18/02/2026","daysInStock":33,"workflowStage":"Bodywork","stageStarted":"22/02/2026","daysInStage":3,"blocked":false,"urgent":false},
  {"stockNo":"12672","registration":"BP21GYK","regDate":"28/05/2021","make":"BMW","model":"3 SERIES","variant":"2.0 320D SE PRO MHEV","colour":"BLUE","mileage":"20089","body":"Saloon","doors":"4","fuel":"Elec D","gearbox":"Auto","fsh":"N","rfl":0,"mot":"27/06/2026","price":0,"purchasePrice":9800,"status":"Off-site","location":"External Garage","dateIn":"05/02/2026","daysInStock":45,"workflowStage":"External Work","stageStarted":"14/02/2026","daysInStage":11,"blocked":false,"urgent":true},
  {"stockNo":"13001","registration":"LG21ABC","regDate":"01/03/2021","make":"FORD","model":"TRANSIT CUSTOM","variant":"2.0 EcoBlue 130ps High Roof","colour":"WHITE","mileage":"42000","body":"PANEL VAN","doors":"4","fuel":"Diesel","gearbox":"Manual","fsh":"Y","rfl":345,"mot":"01/03/2027","price":16500,"purchasePrice":12400,"status":"In Stock","location":"Workshop","dateIn":"01/01/2026","daysInStock":80,"workflowStage":"Mechanical","stageStarted":"10/02/2026","daysInStage":15,"blocked":false,"urgent":false},
  {"stockNo":"13002","registration":"MA19XYZ","regDate":"15/04/2019","make":"MERCEDES","model":"SPRINTER","variant":"2.1 314 CDI Pure Van","colour":"WHITE","mileage":"88000","body":"PANEL VAN","doors":"4","fuel":"Diesel","gearbox":"Manual","fsh":"N","rfl":345,"mot":"15/04/2026","price":12999,"purchasePrice":9200,"status":"In Stock","location":"Valeting","dateIn":"10/01/2026","daysInStock":71,"workflowStage":"Valeting","stageStarted":"20/02/2026","daysInStage":5,"blocked":false,"urgent":false},
  {"stockNo":"13003","registration":"SB21DEF","regDate":"10/06/2021","make":"VOLKSWAGEN","model":"TRANSPORTER","variant":"2.0 TDI T30 Highline Van DSG","colour":"GREY","mileage":"35000","body":"PANEL VAN","doors":"4","fuel":"Diesel","gearbox":"Auto","fsh":"Y","rfl":345,"mot":"10/06/2027","price":19500,"purchasePrice":15200,"status":"In Stock","location":"Stanmore Retail","dateIn":"15/01/2026","daysInStock":66,"workflowStage":"Advertising","stageStarted":"22/02/2026","daysInStage":3,"blocked":false,"urgent":false},
  {"stockNo":"13004","registration":"PE70GHI","regDate":"20/10/2020","make":"VAUXHALL","model":"VIVARO","variant":"1.5d 100ps Edition L2 H1","colour":"WHITE","mileage":"55000","body":"PANEL VAN","doors":"4","fuel":"Diesel","gearbox":"Manual","fsh":"N","rfl":345,"mot":"20/10/2026","price":9990,"purchasePrice":7400,"status":"In Stock","location":"Stanmore 2","dateIn":"20/01/2026","daysInStock":61,"workflowStage":"Legal & Docs","stageStarted":"21/02/2026","daysInStage":4,"blocked":false,"urgent":false},
  {"stockNo":"13005","registration":"YK72JKL","regDate":"01/12/2022","make":"RENAULT","model":"TRAFIC","variant":"2.0 dCi 170 Sport Pack","colour":"WHITE","mileage":"28000","body":"PANEL VAN","doors":"4","fuel":"Diesel","gearbox":"Manual","fsh":"Y","rfl":345,"mot":"01/12/2026","price":17990,"purchasePrice":14100,"status":"In Stock","location":"Stanmore Retail","dateIn":"25/01/2026","daysInStock":56,"workflowStage":"Test Drive","stageStarted":"20/02/2026","daysInStage":5,"blocked":false,"urgent":false},
  {"stockNo":"13006","registration":"BX73MNP","regDate":"15/09/2023","make":"FORD","model":"TRANSIT","variant":"2.0 EcoBlue 130ps Leader L3 H2","colour":"WHITE","mileage":"18000","body":"PANEL VAN","doors":"4","fuel":"Diesel","gearbox":"Manual","fsh":"Y","rfl":345,"mot":"15/09/2026","price":22990,"purchasePrice":17800,"status":"In Stock","location":"Stanmore Retail","dateIn":"28/02/2026","daysInStock":22,"workflowStage":"Ready for Sale","stageStarted":"01/03/2026","daysInStage":21,"blocked":false,"urgent":false},
  {"stockNo":"13007","registration":"GH22RST","regDate":"10/03/2022","make":"PEUGEOT","model":"EXPERT","variant":"1.5 BlueHDi 100","colour":"WHITE","mileage":"62000","body":"PANEL VAN","doors":"4","fuel":"Diesel","gearbox":"Manual","fsh":"N","rfl":345,"mot":"10/03/2027","price":11490,"purchasePrice":8800,"status":"Sold","location":"Archive","dateIn":"05/12/2025","daysInStock":97,"workflowStage":"Sold","stageStarted":"10/03/2026","daysInStage":0,"blocked":false,"urgent":false,"soldDate":"10/03/2026","soldPrice":11490},
  {"stockNo":"R0461","registration":"RF66UBC","regDate":"09/12/2016","make":"AUDI","model":"A7","variant":"3.0 TDI V6 ultra S line","colour":"BLACK","mileage":"95986","body":"Saloon","doors":"5","fuel":"Diesel","gearbox":"Auto","fsh":"N","rfl":165,"mot":"14/11/2026","price":11999,"purchasePrice":8500,"status":"In Stock","location":"Stanmore Retail","dateIn":"03/12/2025","daysInStock":84,"workflowStage":"Ready for Sale","stageStarted":"24/02/2026","daysInStage":1,"blocked":false,"urgent":false}
];

const AC_AUCTION_VEHICLES = [
  {"lotNo":"AC-AUC-001","registration":"DK19FGH","make":"FORD","model":"TRANSIT CUSTOM","variant":"2.0 EcoBlue 130 L1 H1","colour":"WHITE","mileage":"112000","mot":"14/06/2026","condition":"Fair","estimatedValue":5500,"reservePrice":4800,"auctionHouse":"BCA Blackbushe","auctionDate":"28/03/2026","auctionTime":"10:00","lotNumber":"B-142","status":"Entered","reason":"High mileage — below retail threshold","assignedTo":"Keith Hardy","notes":"Needs new rear tyres. MOT advisory on brakes."},
  {"lotNo":"AC-AUC-002","registration":"YH17KLM","make":"VAUXHALL","model":"VIVARO","variant":"1.6 CDTI 95ps L2 H1","colour":"WHITE","mileage":"145000","mot":"02/04/2026","condition":"Poor","estimatedValue":2800,"reservePrice":2200,"auctionHouse":"Manheim Birmingham","auctionDate":"02/04/2026","auctionTime":"09:30","lotNumber":"M-088","status":"Entered","reason":"Structural rust — not viable for retail","assignedTo":"Keith Hardy","notes":"Sill rust identified. Gearbox issue flagged by mechanic."},
  {"lotNo":"AC-AUC-003","registration":"PO65NOP","make":"MERCEDES","model":"VITO","variant":"2.1 113 CDI Tourer Select","colour":"SILVER","mileage":"98000","mot":"30/05/2026","condition":"Good","estimatedValue":7200,"reservePrice":6500,"auctionHouse":"BCA Blackbushe","auctionDate":"04/04/2026","auctionTime":"10:00","lotNumber":"B-207","status":"Awaiting Drop-off","reason":"Part-exchange — customer upgrade","assignedTo":"Ibrahim Ata","notes":"Full service history. Minor scuffs only."},
  {"lotNo":"AC-AUC-004","registration":"LX20QRS","make":"PEUGEOT","model":"PARTNER","variant":"1.5 BlueHDi 100 Professional","colour":"WHITE","mileage":"88500","mot":"11/08/2026","condition":"Fair","estimatedValue":5000,"reservePrice":4200,"auctionHouse":"Manheim Colchester","auctionDate":"10/04/2026","auctionTime":"11:00","lotNumber":"C-055","status":"Preparing","reason":"Fault codes — uneconomical to repair","assignedTo":"Keith Hardy","notes":"Multiple ECU codes. Cosmetically clean."},
  {"lotNo":"AC-AUC-005","registration":"SN22TUV","make":"CITROEN","model":"BERLINGO","variant":"1.5 BlueHDi 75 Van","colour":"WHITE","mileage":"55000","mot":"22/09/2026","condition":"Good","estimatedValue":6800,"reservePrice":6000,"auctionHouse":"BCA Blackbushe","auctionDate":"14/04/2026","auctionTime":"10:00","lotNumber":"B-315","status":"Sold at Auction","reason":"Part-exchange","assignedTo":"Ibrahim Ata","notes":"Sold for £6,400. Above reserve.","soldPrice":6400,"soldDate":"14/04/2026"}
];

const AC_STAFF = [
  {id:"sol",       name:"Sol Adam",          role:"Director",               dept:"Management", phone:"", access:["all"], canSeePurchasePrice:true},
  {id:"ali_amood", name:"Ali Amood",          role:"Director",               dept:"Management", phone:"", access:["all"], canSeePurchasePrice:false},
  {id:"keith",     name:"Keith Hardy",        role:"General Manager",        dept:"Management", phone:"", access:["all"], canSeePurchasePrice:true, canSkipStages:true, canSendBack:true},
  {id:"ibrahim",   name:"Ibrahim Ata",        role:"Sales Manager",          dept:"Sales",      phone:"", access:["sales","workflow","inventory","alerts","auction","accessories"], canSeePurchasePrice:false, canSkipStages:true, canSendBack:true, canLogFaults:true},
  {id:"germaine",  name:"Germaine Dua",       role:"Sales",                  dept:"Sales",      phone:"", access:["sales","legal-docs","test-drive","workflow"]},
  {id:"haider",    name:"Haider Ahmed",       role:"Sales",                  dept:"Sales",      phone:"", access:["sales","legal-docs","test-drive","workflow"]},
  {id:"mo",        name:"Moamel Al Ameri",    role:"Sales",                  dept:"Sales",      phone:"", access:["sales","legal-docs","test-drive","workflow"]},
  {id:"mustafa",   name:"Mustafa Naama",      role:"Advertising",            dept:"Advertising",phone:"", access:["advertising","workflow"]},
  {id:"ismael",    name:"Ismael Al Ameri",    role:"Advertising",            dept:"Advertising",phone:"", access:["advertising","workflow"]},
  {id:"abu",       name:"Abu Amarts",         role:"Accounts",               dept:"Finance",    phone:"", access:["inventory","analytics"], canSeePurchasePrice:false},
  {id:"david",     name:"David",              role:"Mechanic",               dept:"Workshop",   phone:"", access:["mechanical","workflow"]},
  {id:"marcin",    name:"Marcin Kiljan",      role:"Mechanic / Accessories", dept:"Workshop",   phone:"", access:["mechanical","accessories","aftersales","workflow"]},
  {id:"sia",       name:"Sia Vajihi",         role:"Mechanic",               dept:"Workshop",   phone:"", access:["mechanical","workflow"]},
  {id:"alvaro",    name:"Alvaro",             role:"Mechanic",               dept:"Workshop",   phone:"", access:["mechanical","workflow"]},
  {id:"iman",      name:"Iman Zarien",        role:"Mechanic",               dept:"Workshop",   phone:"", access:["mechanical","workflow"]},
  {id:"gorgino",   name:"Gorgino Barnes",     role:"Valeting",               dept:"Valeting",   phone:"", access:["valeting","workflow"]},
  {id:"fred",      name:"Fred",               role:"Valeting",               dept:"Valeting",   phone:"", access:["valeting","workflow"]},
  {id:"isaac",     name:"Isaac",              role:"Valeting",               dept:"Valeting",   phone:"", access:["valeting","workflow"]},
  {id:"stanslaw",  name:"Stanslaw Marzec",    role:"Pre Inspection / Intake",dept:"Intake",     phone:"", access:["intake","bodywork","workflow"]},
  {id:"jay",       name:"Jay (Dentmaster)",   role:"Dent Repair",            dept:"Bodyshop",   phone:"", access:["dent-repair","workflow"]},
];

const AC_DEPARTMENTS = [
  {name:"Management",  icon:"👔", color:"#64748b"},
  {name:"Sales",       icon:"🤝", color:"#3b82f6"},
  {name:"Workshop",    icon:"🔧", color:"#ef4444"},
  {name:"Valeting",    icon:"🧹", color:"#10b981"},
  {name:"Advertising", icon:"📢", color:"#8b5cf6"},
  {name:"Finance",     icon:"💰", color:"#a855f7"},
  {name:"Bodyshop",    icon:"🎨", color:"#f97316"},
  {name:"Intake",      icon:"📋", color:"#6366f1"},
];

const AC_WORKFLOW_STAGES = [
  {id:1,  name:"Intake",          dept:"Intake",       color:"#6366f1", assignedTo:"Stanslaw Marzec", handoverTo:"Bodywork",        optional:false},
  {id:2,  name:"Bodywork",        dept:"Bodyshop",     color:"#f97316", assignedTo:"Stanslaw Marzec", handoverTo:"Mechanical",      optional:false},
  {id:3,  name:"Dent Repair",     dept:"Bodyshop",     color:"#fb923c", assignedTo:"Jay (Dentmaster)", handoverTo:"Mechanical",     optional:true},
  {id:4,  name:"Mechanical",      dept:"Workshop",     color:"#ef4444", assignedTo:"Workshop Team",   handoverTo:"External Work",   optional:false},
  {id:5,  name:"External Work",   dept:"Workshop",     color:"#dc2626", assignedTo:"Keith Hardy",     handoverTo:"Valeting",        optional:true},
  {id:6,  name:"Valeting",        dept:"Valeting",     color:"#10b981", assignedTo:"Valeting Team",   handoverTo:"Advertising",     optional:false},
  {id:7,  name:"Advertising",     dept:"Advertising",  color:"#8b5cf6", assignedTo:"Mustafa Naama",   handoverTo:"Legal & Docs",    optional:false},
  {id:8,  name:"Legal & Docs",    dept:"Sales",        color:"#3b82f6", assignedTo:"Sales Team",      handoverTo:"Test Drive",      optional:false},
  {id:9,  name:"Test Drive",      dept:"Sales",        color:"#84cc16", assignedTo:"Sales Team",      handoverTo:"Ready for Sale",  optional:false},
  {id:10, name:"Ready for Sale",  dept:"Management",   color:"#0891b2", assignedTo:"Management",      handoverTo:"Sold",            optional:false},
  {id:11, name:"Sold",            dept:"Management",   color:"#64748b", assignedTo:"Management",      handoverTo:"Aftersales",      optional:false},
  {id:12, name:"Aftersales",      dept:"Workshop",     color:"#f43f5e", assignedTo:"Workshop Team",   handoverTo:null,              optional:false},
];

const AA_INSPECTION_CHECKLIST = {
  "Exterior Condition": ["Bonnet","Front Bumper Grille","Front Panel","Nearside Front Wing","Nearside Front Door","Nearside Rear Wing","Offside Front Wing","Offside Front Door","Offside Rear Wing","Rear Bumper","Rear Panel","Tailgate/Boot","Roof","Glass","Body Damage","Body Panels","Bonnet Catch","Bonnet Hinges","Exterior Trim/Grille","Fuel Filler/Cover/Cap","Bumpers/Number Plates"],
  "Engine": ["Coolant Level/Condition","Coolant Leaks","Turbo/Supercharger","Clutch Fluid","Fuel Pump/Pipes","Antifreeze","Brake Fluid","Engine Oil Level","Cold Starting","Hoses/Pipes","External Leak (Upper Engine)","Auxiliary Belt","Engine Mountings","Noise Level (Cold)","Fuel Injection","Excess Fumes/Smoke"],
  "Electrical Controls": ["Starting System","Battery Condition","Ignition Lock","Side Lights/Running Lights","Instruments","Rear and Number Plate Lights","Stop Lights","Horn","Indicator/Hazard Lights","Wipers/Washers","Reverse/Fog Lights","Headlights","Auxiliary Lights","Interior Panel Lights","Mirrors (Electrical)","Radio/Aerial","Heater/Fan Controls","Air Conditioning"],
  "Interior": ["Seat Adjustment","Seatbelts","Boot/Tailgate Lock","Steering Wheel Adjustment","Seat Upholstery","Door Fitting Operation","Door Trim Panels","Interior Sills","Door Seals/Hinges","Headlining/Visors","12v Auxiliary Socket","Dash Panel Condition","Illumination Light","Luggage Area Trim","Tool Kit/Puncture Kit","Internal Mirrors"],
  "Front Suspension/Steering": ["Sub-Frames/Mountings","Steering Rack/Box","Spring/Suspension Bars","Dampers (Condition/Leaks)","Tie Bars/Anti-Roll Bars","Wheel Hubs/Bearings","Power Steering Operation","Suspension Arms/Mountings","Steering and Ball Joints","Chassis Members","Pipes/Hoses","Gaiters","Corrosion - Floor/Chassis","Engine Underside Leakage"],
  "Rear Suspension": ["Spring/Suspension Bars","Sub-Frames/Mountings","Bump Stops/Gaiters","Dampers/Bushes","Corrosion - Floor/Chassis","Pipes/Hoses","Location Rods/Fixings","Anti-Roll Bar","Chassis Members","Wheel Hub/Bearings","Suspension Arms/Fixings"],
  "Clutch/Transmission": ["Fluid/Oil Leaks","Backlash","Mountings","Hydraulic System","Propshaft(s)/Fittings","Universal/Sliding Joints","Manual Fluid Level Check","Casings","Cables/Adjustments","Gaiters","Driveshaft Assembly","Linkage (Wear)","Bearings/Supports","Level Warning Message"],
  "Exhaust System": ["Manifold","Pipes","Catalytic Converter","System Condition","Silencer","Heat Shields/Mountings","Joints/Couplings"],
  "Fuel System": ["Tank","Evidence Of Leaks","Breather Pipes","Fuel Lines","Tank Fixings"],
  "Brakes": ["Master Cylinder Security","Handbrake Op/Adjustment","Pipes/Connections","Servo/Power System","Pedal","Flexible Hoses","Fluid Leaks","Handbrake Mechanism","Discs and Pads (If Visible)"],
  "Wheels & Tyres": ["Front RH Condition","Front LH Condition","Rear LH Condition","Rear RH Condition","Spare Wheel Present","Tread Depth FR","Tread Depth FL","Tread Depth RL","Tread Depth RR"],
  "Road Test": ["Final Drive Operation","Road Holding/Stability","Clutch Operation","Engine Performance","Footbrake Operation","Steering Effort","Excess Smoke","Suspension Noise","Warning Light","Gearbox Operation/Noise","General Steering/Handling","Cooling Fan Operation","Engine Noise","Hand/Park Brake","Hot Restarting","Overheating Evidence","Fault Codes Stored"]
};

const AC_KEYS_DATA = [
  {registration:"WV72CVW",make:"CITROEN",model:"DISPATCH",keys:2,location:"Board A - Peg 4",lastChecked:"24/03/2026",status:"In"},
  {registration:"KJ24ZSO",make:"CITROEN",model:"DISPATCH",keys:2,location:"Board A - Peg 7",lastChecked:"23/03/2026",status:"In"},
  {registration:"LG21ABC",make:"FORD",model:"TRANSIT CUSTOM",keys:1,location:"Workshop - Bay 1",lastChecked:"20/03/2026",status:"Out"},
  {registration:"MA19XYZ",make:"MERCEDES",model:"SPRINTER",keys:2,location:"Board B - Peg 2",lastChecked:"24/03/2026",status:"In"},
  {registration:"SB21DEF",make:"VOLKSWAGEN",model:"TRANSPORTER",keys:2,location:"Board A - Peg 12",lastChecked:"22/03/2026",status:"In"},
  {registration:"PE70GHI",make:"VAUXHALL",model:"VIVARO",keys:1,location:"Board B - Peg 8",lastChecked:"21/03/2026",status:"In"},
  {registration:"YK72JKL",make:"RENAULT",model:"TRAFIC",keys:2,location:"Board A - Peg 3",lastChecked:"24/03/2026",status:"In"},
  {registration:"BX73MNP",make:"FORD",model:"TRANSIT",keys:2,location:"Board A - Peg 9",lastChecked:"24/03/2026",status:"In"},
  {registration:"RF66UBC",make:"AUDI",model:"A7",keys:2,location:"Board B - Peg 1",lastChecked:"24/03/2026",status:"In"},
  {registration:"BP21GYK",make:"BMW",model:"3 SERIES",keys:1,location:"External - BPS Motors",lastChecked:"14/03/2026",status:"Out"},
];
