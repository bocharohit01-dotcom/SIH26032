
/* --- static/js/data/demoData.js --- */
// Centralized Mock Data Store for KisanSeva Platform

window.DEMO_DATA = {

  // Supported Agricultural Commodities with MSP Rates (2026 Season)
  commodities: [
    { crop: "Paddy (Grade A)", msp: 2300, unit: "Quintal", season: "Kharif 2026", icon: "🌾" },
    { crop: "Paddy (Common)", msp: 2183, unit: "Quintal", season: "Kharif 2026", icon: "🌾" },
    { crop: "Wheat (Grade 1)", msp: 2275, unit: "Quintal", season: "Rabi 2026", icon: "🌾" },
    { crop: "Cotton (Long Staple)", msp: 7121, unit: "Quintal", season: "Kharif 2026", icon: "🌱" },
    { crop: "Maize (Yellow)", msp: 2090, unit: "Quintal", season: "Kharif 2026", icon: "🌽" },
    { crop: "Sugarcane", msp: 315, unit: "Quintal", season: "Annual 2026", icon: "🎋" },
    { crop: "Pulses (Red Gram/Tur)", msp: 7000, unit: "Quintal", season: "Kharif 2026", icon: "🫘" }
  ],

  // Procurement Centres (Andhra Pradesh & Telangana with True Regional Distances from Bhimavaram, West Godavari)
  centres: [
    {
      id: 101,
      name: "Bhimavaram APMC Agricultural Market Yard",
      district: "West Godavari",
      state: "Andhra Pradesh",
      address: "Undi Road, Near Railway Goods Shed, Bhimavaram",
      pincode: "534201",
      distanceKm: 2.4,
      lat: 16.5449,
      lng: 81.5212,
      supportedCrops: ["Paddy (Grade A)", "Paddy (Common)", "Sugarcane", "Maize (Yellow)"],
      maxCapacityQuintals: 8500,
      currentLoadQuintals: 2800,
      activeQueueLength: 2,
      avgProcessingMins: 9,
      operatingHours: "06:30 AM - 06:30 PM",
      status: "ACTIVE",
      officerInCharge: "M. Satyanarayana (Mandi Inspector)",
      contactPhone: "+91 98485 67890",
      facilities: ["Automated Moisture Tester", "Electronic Truck Weighbridge", "Farmer Rest Lounge", "Free QC Pre-testing"],
      tag: "NEAREST MANDI (Bhimavaram)",
      rating: 4.9
    },
    {
      id: 102,
      name: "Palakollu Paddy & Grain Procurement Hub",
      district: "West Godavari",
      state: "Andhra Pradesh",
      address: "Bypass Road, Near Market Yard, Palakollu",
      pincode: "534260",
      distanceKm: 16.2,
      lat: 16.5300,
      lng: 81.7300,
      supportedCrops: ["Paddy (Grade A)", "Paddy (Common)", "Pulses (Red Gram/Tur)"],
      maxCapacityQuintals: 8000,
      currentLoadQuintals: 2400,
      activeQueueLength: 1,
      avgProcessingMins: 8,
      operatingHours: "06:30 AM - 06:30 PM",
      status: "ACTIVE",
      officerInCharge: "K. Ramachandra Rao",
      contactPhone: "+91 98486 11223",
      facilities: ["Moisture Analyzer", "Digital Weighbridge", "Shaded Waiting Bay"],
      tag: "ZERO QUEUE",
      rating: 4.8
    },
    {
      id: 103,
      name: "Narsapuram Farmer Support Mandi",
      district: "West Godavari",
      state: "Andhra Pradesh",
      address: "Steamer Road, Narsapuram",
      pincode: "534275",
      distanceKm: 22.0,
      lat: 16.4333,
      lng: 81.7000,
      supportedCrops: ["Paddy (Grade A)", "Paddy (Common)", "Sugarcane"],
      maxCapacityQuintals: 6500,
      currentLoadQuintals: 1900,
      activeQueueLength: 2,
      avgProcessingMins: 9,
      operatingHours: "07:00 AM - 06:00 PM",
      status: "ACTIVE",
      officerInCharge: "P. Suryanarayana",
      contactPhone: "+91 98487 22334",
      facilities: ["Express Grain Testing", "Digital Display", "Water Station"],
      tag: "FAST PROCESSING",
      rating: 4.7
    },
    {
      id: 104,
      name: "Tanuku APMC Grain Procurement Yard",
      district: "West Godavari",
      state: "Andhra Pradesh",
      address: "Bypass Highway Junction, Tanuku",
      pincode: "534211",
      distanceKm: 24.5,
      lat: 16.7583,
      lng: 81.6788,
      supportedCrops: ["Paddy (Grade A)", "Sugarcane", "Pulses (Red Gram/Tur)"],
      maxCapacityQuintals: 7500,
      currentLoadQuintals: 2100,
      activeQueueLength: 1,
      avgProcessingMins: 8,
      operatingHours: "06:00 AM - 06:00 PM",
      status: "ACTIVE",
      officerInCharge: "Ch. Nageswara Rao",
      contactPhone: "+91 98487 89012",
      facilities: ["Moisture Testing Lab", "Truck Parking Yard", "DBT Direct Payment Hub"],
      tag: "HIGH CAPACITY",
      rating: 4.8
    },
    {
      id: 105,
      name: "Tadepalligudem Paddy & Lemon Market Hub",
      district: "West Godavari",
      state: "Andhra Pradesh",
      address: "K N Road, Near Highway Pass, Tadepalligudem",
      pincode: "534101",
      distanceKm: 34.8,
      lat: 16.8333,
      lng: 81.5333,
      supportedCrops: ["Paddy (Grade A)", "Paddy (Common)", "Maize (Yellow)"],
      maxCapacityQuintals: 9000,
      currentLoadQuintals: 3400,
      activeQueueLength: 3,
      avgProcessingMins: 10,
      operatingHours: "07:00 AM - 07:00 PM",
      status: "ACTIVE",
      officerInCharge: "V. Raghava Rao",
      contactPhone: "+91 98486 78901",
      facilities: ["Express Grain Testing", "Digital Token Display", "High Capacity Unloader"],
      tag: "MAJOR REGIONAL HUB",
      rating: 4.8
    },
    {
      id: 106,
      name: "Eluru District Main Grain Complex",
      district: "Eluru",
      state: "Andhra Pradesh",
      address: "Fire Station Road, Eluru Town",
      pincode: "534001",
      distanceKm: 64.0,
      lat: 16.7107,
      lng: 81.1042,
      supportedCrops: ["Paddy (Grade A)", "Paddy (Common)", "Wheat (Grade 1)", "Cotton"],
      maxCapacityQuintals: 10000,
      currentLoadQuintals: 4200,
      activeQueueLength: 4,
      avgProcessingMins: 11,
      operatingHours: "06:30 AM - 07:30 PM",
      status: "ACTIVE",
      officerInCharge: "G. Appa Rao",
      contactPhone: "+91 98488 90123",
      facilities: ["Digital Weighbridge", "Cold Storage Yard", "Canteen & Water Facility"],
      tag: "DISTRICT MAIN HUB",
      rating: 4.9
    },
    {
      id: 107,
      name: "Rajamahendravaram APMC Grain Yard",
      district: "East Godavari",
      state: "Andhra Pradesh",
      address: "Morampudi Junction, Rajamahendravaram",
      pincode: "533107",
      distanceKm: 72.0,
      lat: 17.0000,
      lng: 81.7800,
      supportedCrops: ["Paddy (Grade A)", "Cotton", "Pulses"],
      maxCapacityQuintals: 9500,
      currentLoadQuintals: 3800,
      activeQueueLength: 3,
      avgProcessingMins: 10,
      operatingHours: "06:00 AM - 07:00 PM",
      status: "ACTIVE",
      officerInCharge: "B. Dharma Rao",
      contactPhone: "+91 98489 33445",
      facilities: ["QC Testing", "Automatic Token Counter"],
      tag: "EAST GODAVARI HUB",
      rating: 4.8
    },
    {
      id: 2,
      name: "Vijayawada NTR District Grain Hub",
      district: "NTR (Vijayawada)",
      state: "Andhra Pradesh",
      address: "Gollapudi Market Yard, Vijayawada",
      pincode: "521225",
      distanceKm: 112.0,
      lat: 16.5385,
      lng: 80.5750,
      supportedCrops: ["Paddy (Grade A)", "Paddy (Common)", "Wheat (Grade 1)"],
      maxCapacityQuintals: 8000,
      currentLoadQuintals: 3100,
      activeQueueLength: 2,
      avgProcessingMins: 9,
      operatingHours: "06:00 AM - 07:00 PM",
      status: "ACTIVE",
      officerInCharge: "N. Sambasiva Rao",
      contactPhone: "+91 98490 23456",
      facilities: ["Express Grain Testing", "Digital Token Display", "Cold Storage Complex"],
      tag: "STATE CAPITAL HUB",
      rating: 4.8
    },
    {
      id: 4,
      name: "Kakinada Port Grain Procurement Center",
      district: "Kakinada",
      state: "Andhra Pradesh",
      address: "Bypass Road, Kakinada",
      pincode: "533005",
      distanceKm: 118.0,
      lat: 16.9891,
      lng: 82.2475,
      supportedCrops: ["Paddy (Grade A)", "Paddy (Common)", "Maize (Yellow)"],
      maxCapacityQuintals: 10000,
      currentLoadQuintals: 6100,
      activeQueueLength: 8,
      avgProcessingMins: 12,
      operatingHours: "06:00 AM - 08:00 PM",
      status: "ACTIVE",
      officerInCharge: "M. Subba Rao",
      contactPhone: "+91 98511 45678",
      facilities: ["High Capacity Silos", "Digital Grading Lab", "DBT Direct Payment Hub"],
      tag: "PORT LINKED",
      rating: 4.9
    },
    {
      id: 1,
      name: "Guntur Agricultural Market Committee (APMC)",
      district: "Guntur",
      state: "Andhra Pradesh",
      address: "Mirchi Yard Road, Guntur Town",
      pincode: "522004",
      distanceKm: 135.0,
      lat: 16.3067,
      lng: 80.4365,
      supportedCrops: ["Paddy (Grade A)", "Cotton (Long Staple)", "Maize (Yellow)", "Pulses (Red Gram/Tur)"],
      maxCapacityQuintals: 9500,
      currentLoadQuintals: 4200,
      activeQueueLength: 4,
      avgProcessingMins: 11,
      operatingHours: "06:30 AM - 06:30 PM",
      status: "ACTIVE",
      officerInCharge: "K. Venkateswara Rao",
      contactPhone: "+91 98480 12345",
      facilities: ["Automated Moisture Analyzer", "Multi-Lane Weighbridge", "Farmer Rest Lounge & Canteen"],
      tag: "MAJOR STATE HUB",
      rating: 4.9
    },
    {
      id: 5,
      name: "Visakhapatnam District Procurement Yard",
      district: "Visakhapatnam",
      state: "Andhra Pradesh",
      address: "Anakapalli Road, Visakhapatnam",
      pincode: "530046",
      distanceKm: 225.0,
      lat: 17.6868,
      lng: 83.2185,
      supportedCrops: ["Paddy (Grade A)", "Pulses (Red Gram/Tur)", "Sugarcane"],
      maxCapacityQuintals: 7500,
      currentLoadQuintals: 3400,
      activeQueueLength: 5,
      avgProcessingMins: 11,
      operatingHours: "07:00 AM - 06:00 PM",
      status: "ACTIVE",
      officerInCharge: "S. Appala Naidu",
      contactPhone: "+91 98522 56789",
      facilities: ["Moisture Meter", "Weighbridge", "RO Water"],
      tag: "COASTAL HUB",
      rating: 4.6
    },
    {
      id: 3,
      name: "Tirupati Integrated Farmer Yard",
      district: "Tirupati",
      state: "Andhra Pradesh",
      address: "Renigunta Road, Tirupati",
      pincode: "517506",
      distanceKm: 445.0,
      lat: 13.6288,
      lng: 79.4192,
      supportedCrops: ["Paddy (Common)", "Groundnut", "Pulses (Red Gram/Tur)"],
      maxCapacityQuintals: 6500,
      currentLoadQuintals: 2800,
      activeQueueLength: 3,
      avgProcessingMins: 10,
      operatingHours: "07:00 AM - 06:00 PM",
      status: "ACTIVE",
      officerInCharge: "P. Rajasekhar",
      contactPhone: "+91 98500 34567",
      facilities: ["Moisture Testing Lab", "Solar Powered Weighbridge"],
      tag: "SOUTH AP HUB",
      rating: 4.7
    },
    {
      id: 7,
      name: "Medak Main Grain Procurement Centre",
      district: "Medak",
      state: "Telangana",
      address: "NH-44 Market Yard, Medak Town",
      pincode: "502110",
      distanceKm: 385.0,
      lat: 17.9810,
      lng: 78.2620,
      supportedCrops: ["Paddy (Grade A)", "Wheat (Grade 1)", "Cotton (Long Staple)"],
      maxCapacityQuintals: 8500,
      currentLoadQuintals: 3800,
      activeQueueLength: 3,
      avgProcessingMins: 10,
      operatingHours: "07:30 AM - 06:30 PM",
      status: "ACTIVE",
      officerInCharge: "K. Srinivas",
      contactPhone: "+91 98480 99887",
      facilities: ["Moisture Testing", "Electronic Scale"],
      tag: "TELANGANA STATE HUB",
      rating: 4.8
    }
  ],

  // Registered Mandi Officers
  officers: [
    {
      id: "OFF-101",
      name: "M. Satyanarayana",
      title: "Senior APMC Inspector",
      centreId: 101,
      centreName: "Bhimavaram APMC Agricultural Market Yard",
      district: "West Godavari",
      phone: "9848567890",
      email: "bhimavaram.officer@ap.gov.in"
    },
    {
      id: "OFF-102",
      name: "K. Ramachandra Rao",
      title: "Mandi In-charge Inspector",
      centreId: 102,
      centreName: "Palakollu Paddy & Grain Procurement Hub",
      district: "West Godavari",
      phone: "9848611223",
      email: "palakollu.officer@ap.gov.in"
    },
    {
      id: "OFF-103",
      name: "K. Venkateswara Rao",
      title: "Senior APMC Inspector",
      centreId: 1,
      centreName: "Guntur Agricultural Market Committee (APMC)",
      district: "Guntur",
      phone: "9848012345",
      email: "guntur.officer@ap.gov.in"
    }
  ],

  // Sample Farmer Bookings
  sampleBookings: [
    {
      id: 1001,
      tokenNumber: "TK-2026-104",
      farmerName: "Venkata Satyanarayana Raju",
      farmerPhone: "9876543210",
      farmerVillage: "Bhimavaram Town, West Godavari",
      district: "West Godavari",
      centreId: 101,
      centreName: "Bhimavaram APMC Agricultural Market Yard",
      cropType: "Paddy (Grade A)",
      estimatedQty: 45,
      verifiedQty: 44.5,
      qualityGrade: "Grade A (Moisture 13.8%)",
      mspRate: 2300,
      totalPayout: 102350,
      slotDate: "2026-09-06",
      timeWindow: "08:00 AM - 10:00 AM",
      status: "CHECKED_IN",
      queuePosition: 2,
      tokensAhead: 1,
      currentlyServing: "TK-2026-102",
      estWaitMins: 9,
      qrCode: "KisanSeva-TK-2026-104-9876543210"
    },
    {
      id: 1002,
      tokenNumber: "TK-2026-108",
      farmerName: "M. Subba Raju",
      farmerPhone: "9848098765",
      farmerVillage: "Palakollu Mandal, West Godavari",
      district: "West Godavari",
      centreId: 102,
      centreName: "Palakollu Paddy & Grain Procurement Hub",
      cropType: "Paddy (Common)",
      estimatedQty: 30,
      verifiedQty: 30,
      qualityGrade: "Grade B (Moisture 14.2%)",
      mspRate: 2183,
      totalPayout: 65490,
      slotDate: "2026-09-06",
      timeWindow: "10:00 AM - 12:00 PM",
      status: "BOOKED",
      queuePosition: 1,
      tokensAhead: 0,
      currentlyServing: "TK-2026-108",
      estWaitMins: 0,
      qrCode: "KisanSeva-TK-2026-108-9848098765"
    }
  ],

  // State Admin Analytics Data
  adminAnalytics: {
    totalRegisteredFarmers: 28450,
    activeCentres: 34,
    totalProcuredQuintals: 382500,
    totalPayoutDistributedCr: 87.65,
    avgWaitTimeMins: 11.8,
    bottlenecks: [
      { step: "Gate Check-In & Scanning", count: 42, percentage: 15, status: "Normal Flow" },
      { step: "Quality Inspection Lab", count: 98, percentage: 35, status: "Moderate Queue" },
      { step: "Net Weighbridge Scale", count: 112, percentage: 40, status: "High Delay" },
      { step: "Direct Bank Transfer Payout", count: 28, percentage: 10, status: "Fast Flow" }
    ],
    districtUtilization: [
      { name: "Bhimavaram APMC Yard", capacity: 8500, currentLoad: 2800, pct: 33 },
      { name: "Palakollu Grain Hub", capacity: 8000, currentLoad: 2400, pct: 30 },
      { name: "Tanuku Procurement Yard", capacity: 7500, currentLoad: 2100, pct: 28 },
      { name: "Tadepalligudem Hub", capacity: 9000, currentLoad: 3400, pct: 38 },
      { name: "Eluru Main Complex", capacity: 10000, currentLoad: 4200, pct: 42 },
      { name: "Guntur APMC Yard", capacity: 9500, currentLoad: 4200, pct: 44 }
    ]
  },

  // Daily Delivery 2-Hour Time Windows & Capacity Slots
  slots: [
    { id: 101, timeWindow: "08:00 AM - 10:00 AM", maxFarmers: 15, bookedFarmers: 6, isFull: false },
    { id: 102, timeWindow: "10:00 AM - 12:00 PM", maxFarmers: 15, bookedFarmers: 12, isFull: false },
    { id: 103, timeWindow: "01:00 PM - 03:00 PM", maxFarmers: 15, bookedFarmers: 15, isFull: true },
    { id: 104, timeWindow: "03:00 PM - 05:00 PM", maxFarmers: 15, bookedFarmers: 4, isFull: false }
  ],

  // Real-time Farmer Notifications
  notifications: [
    {
      id: 1,
      farmerId: "9876543210",
      title: "🎟️ Slot Confirmed",
      message: "Token TK-2026-104 confirmed for Bhimavaram APMC Yard.",
      timestamp: "10 mins ago",
      type: "SUCCESS",
      read: false
    },
    {
      id: 2,
      farmerId: "9876543210",
      title: "📢 Queue Alert",
      message: "Your turn is estimated in 15 minutes. Please proceed to Gate #1.",
      timestamp: "5 mins ago",
      type: "INFO",
      read: false
    }
  ]
};


/* --- static/js/components/Navbar.jsx --- */
// Reusable Navbar Component — Visual Demonstration Theme

window.Navbar = function Navbar({
  currentPage,
  navigateTo,
  userRole,
  user,
  setUserRole,
  unreadNotifCount,
  toggleNotifDrawer,
  onLogout
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(255,255,255,0.94)',
      backdropFilter: 'blur(18px)',
      borderBottom: '1px solid rgba(5,150,105,0.15)',
      boxShadow: '0 2px 20px rgba(5,150,105,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between h-16"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => navigateTo(userRole === 'FARMER' ? 'farmerDash' : userRole === 'OFFICER' ? 'officerDash' : userRole === 'ADMIN' ? 'adminDash' : 'landing'),
    className: "flex items-center gap-3 cursor-pointer group"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      fontWeight: 900,
      boxShadow: '0 6px 18px rgba(5,150,105,0.35)',
      transition: 'transform 0.2s'
    },
    className: "group-hover:scale-105"
  }, "\uD83C\uDF3E"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 800,
      fontSize: 20,
      color: '#0f172a'
    }
  }, "Kisan", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "Seva"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 font-medium hidden sm:block"
  }, "Agricultural Procurement Coordination Portal"))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden lg:flex items-center gap-1 p-1 rounded-2xl",
    style: {
      background: '#f0fdf4',
      border: '1px solid rgba(5,150,105,0.2)'
    }
  }, userRole === 'FARMER' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('farmerDash'),
    style: currentPage === 'farmerDash' ? {
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      boxShadow: '0 2px 10px rgba(5,150,105,0.3)'
    } : {
      color: '#475569'
    },
    className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-house"
  }), /*#__PURE__*/React.createElement("span", null, "Dashboard")), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('centreListing'),
    style: ['centreListing', 'centreDetails'].includes(currentPage) ? {
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      boxShadow: '0 2px 10px rgba(5,150,105,0.3)'
    } : {
      color: '#475569'
    },
    className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-compass"
  }), /*#__PURE__*/React.createElement("span", null, "Mandi Discovery")), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('slotBooking'),
    style: ['slotBooking', 'bookingConfirmation'].includes(currentPage) ? {
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      boxShadow: '0 2px 10px rgba(5,150,105,0.3)'
    } : {
      color: '#475569'
    },
    className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-calendar-plus"
  }), /*#__PURE__*/React.createElement("span", null, "Book Slot")), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('liveQueue'),
    style: currentPage === 'liveQueue' ? {
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      boxShadow: '0 2px 10px rgba(5,150,105,0.3)'
    } : {
      color: '#475569'
    },
    className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-stopwatch"
  }), /*#__PURE__*/React.createElement("span", null, "Live Queue")), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('procurementStatus'),
    style: currentPage === 'procurementStatus' ? {
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      boxShadow: '0 2px 10px rgba(5,150,105,0.3)'
    } : {
      color: '#475569'
    },
    className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-receipt"
  }), /*#__PURE__*/React.createElement("span", null, "Payout & Receipts"))), userRole === 'OFFICER' && /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('officerDash'),
    style: currentPage === 'officerDash' ? {
      background: 'linear-gradient(135deg,#f59e0b,#d97706)',
      color: 'white',
      boxShadow: '0 2px 10px rgba(245,158,11,0.3)'
    } : {
      color: '#475569'
    },
    className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-clipboard-check"
  }), /*#__PURE__*/React.createElement("span", null, "Mandi Inspector Console")), userRole === 'ADMIN' && /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('adminDash'),
    style: currentPage === 'adminDash' ? {
      background: 'linear-gradient(135deg,#3b82f6,#6366f1)',
      color: 'white',
      boxShadow: '0 2px 10px rgba(59,130,246,0.3)'
    } : {
      color: '#475569'
    },
    className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chart-pie"
  }), /*#__PURE__*/React.createElement("span", null, "State Admin Analytics")), !userRole && /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('landing'),
    className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-white"
  }, /*#__PURE__*/React.createElement("span", null, "Home"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleNotifDrawer,
    className: "relative p-2 rounded-xl border transition",
    style: {
      background: '#f0fdf4',
      border: '1px solid rgba(5,150,105,0.25)',
      color: '#059669'
    },
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-regular fa-bell text-sm"
  }), unreadNotifCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -5,
      right: -5,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#f43f5e,#e11d48)',
      color: 'white',
      fontSize: 9,
      fontWeight: 900,
      display: 'flex',
      itemsCenter: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 6px rgba(244,63,94,0.5)',
      border: '2px solid white'
    }
  }, unreadNotifCount)), userRole ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs",
    style: {
      background: '#f0fdf4',
      border: '1px solid rgba(5,150,105,0.25)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#059669',
      display: 'inline-block',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.2)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-700"
  }, user ? user.name : 'User'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: userRole === 'ADMIN' ? '#1e40af' : userRole === 'OFFICER' ? '#92400e' : '#065f46',
      background: userRole === 'ADMIN' ? '#dbeafe' : userRole === 'OFFICER' ? '#fef3c7' : '#d1fae5',
      padding: '2px 8px',
      borderRadius: 4,
      fontFamily: 'monospace',
      fontWeight: 800,
      textTransform: 'uppercase'
    }
  }, userRole)), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    title: "Logout",
    style: {
      background: '#fef2f2',
      border: '1px solid #fecaca',
      color: '#dc2626',
      fontSize: 12,
      fontWeight: 700,
      padding: '7px 12px',
      borderRadius: 10,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      background: '#fee2e2'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      background: '#fef2f2'
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-right-from-bracket"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, "Logout"))) : null))));
};

/* --- static/js/components/MobileNav.jsx --- */
// Reusable Mobile Bottom Navigation Bar (Dark Theme / Role Aware)

window.MobileNav = function MobileNav({
  currentPage,
  navigateTo,
  userRole
}) {
  // Filter nav items based on user role
  let navItems = [{
    id: 'farmerDash',
    label: 'Home',
    icon: 'fa-house'
  }, {
    id: 'centreListing',
    label: 'Centres',
    icon: 'fa-compass'
  }, {
    id: 'slotBooking',
    label: 'Book Slot',
    icon: 'fa-calendar-plus'
  }, {
    id: 'liveQueue',
    label: 'Live Queue',
    icon: 'fa-stopwatch'
  }, {
    id: 'procurementStatus',
    label: 'Receipts',
    icon: 'fa-receipt'
  }];
  if (userRole === 'OFFICER') {
    navItems = [{
      id: 'officerDash',
      label: 'Officer',
      icon: 'fa-clipboard-check'
    }, {
      id: 'liveQueue',
      label: 'Queue',
      icon: 'fa-stopwatch'
    }, {
      id: 'centreListing',
      label: 'Centres',
      icon: 'fa-compass'
    }];
  } else if (userRole === 'ADMIN') {
    navItems = [{
      id: 'adminDash',
      label: 'Analytics',
      icon: 'fa-chart-pie'
    }, {
      id: 'centreListing',
      label: 'Centres',
      icon: 'fa-compass'
    }];
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-2 py-2 shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: `grid grid-cols-${navItems.length} gap-1 max-w-md mx-auto`
  }, navItems.map(item => {
    const isActive = currentPage === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => navigateTo(item.id),
      className: `flex flex-col items-center justify-center py-1 px-1 rounded-xl transition ${isActive ? 'text-emerald-400 font-bold bg-emerald-950/60' : 'text-slate-400 hover:text-slate-200'}`
    }, /*#__PURE__*/React.createElement("i", {
      className: `fa-solid ${item.icon} text-base`
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] mt-0.5"
    }, item.label));
  })));
};

/* --- static/js/components/NotificationDrawer.jsx --- */
// Reusable Notification Slide-Over Drawer (Dark Theme)

window.NotificationDrawer = function NotificationDrawer({
  isOpen,
  onClose,
  notifications,
  markAllRead
}) {
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 overflow-hidden animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    className: "absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-y-0 right-0 max-w-full flex pl-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bell text-emerald-400"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-white text-base"
  }, "Notifications & Live Alerts")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: markAllRead,
    className: "text-xs text-emerald-400 hover:underline font-semibold"
  }, "Mark all read"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "p-1 rounded-lg text-slate-400 hover:text-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark text-lg"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-4 space-y-3"
  }, notifications.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12 text-slate-500 text-xs"
  }, "No notifications right now.") : notifications.map(notif => /*#__PURE__*/React.createElement("div", {
    key: notif.id,
    className: `p-3.5 rounded-2xl border transition space-y-1 ${notif.read ? 'bg-slate-950/40 border-slate-800/80 text-slate-500' : 'bg-emerald-950/30 border-emerald-800 text-slate-200 shadow-sm'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs font-bold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-400"
  }, notif.title), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-400 font-mono"
  }, notif.timestamp)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300 leading-snug"
  }, notif.message)))))));
};

/* --- static/js/pages/LandingPage.jsx --- */
// Page 1: Landing Page — Visual Demonstration Theme

window.LandingPage = function LandingPage({
  navigateTo,
  mspRates
}) {
  const rates = mspRates || window.DEMO_DATA && window.DEMO_DATA.mspRates || [];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-12 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(135deg,#059669 0%,#0d9488 45%,#3b82f6 100%)',
      borderRadius: 28,
      padding: '48px 48px 40px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 28px 56px -12px rgba(5,150,105,0.45)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      right: -80,
      width: 280,
      height: 280,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -60,
      left: '35%',
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '30%',
      right: '15%',
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.05)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.2)',
      border: '1px solid rgba(255,255,255,0.3)',
      padding: '5px 14px',
      borderRadius: 99,
      marginBottom: 16,
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#86efac',
      boxShadow: '0 0 0 3px rgba(134,239,172,0.3)',
      display: 'inline-block',
      animation: 'pulse 2s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ecfdf5',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.04em'
    }
  }, "Kharif & Rabi Season 2026 \u2014 MSP Procurement Portal")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 'clamp(28px,4vw,56px)',
      color: 'white',
      lineHeight: 1.1,
      marginBottom: 16,
      letterSpacing: '-0.03em'
    }
  }, "Zero Waiting Lines in Mandis.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(to right,#86efac,#67e8f9,#fde68a)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  }, "Guaranteed MSP Procurement.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.88)',
      fontSize: 16,
      maxWidth: 580,
      lineHeight: 1.7,
      marginBottom: 28
    }
  }, "KisanSeva provides smart procurement center recommendations based on wait times, digital slot token booking, live queue position tracking, and direct bank payout verification."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('centreListing'),
    style: {
      background: 'rgba(255,255,255,0.95)',
      color: '#065f46',
      fontWeight: 800,
      fontSize: 15,
      padding: '13px 28px',
      borderRadius: 14,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 32px rgba(0,0,0,0.25)'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(0)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-location-dot"
  }), "Find Nearest Procurement Centre", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right",
    style: {
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('farmerLogin'),
    style: {
      background: 'rgba(255,255,255,0.18)',
      border: '1.5px solid rgba(255,255,255,0.45)',
      color: 'white',
      fontWeight: 700,
      fontSize: 15,
      padding: '13px 24px',
      borderRadius: 14,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      backdropFilter: 'blur(4px)',
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      background: 'rgba(255,255,255,0.28)'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      background: 'rgba(255,255,255,0.18)'
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-user-check"
  }), "Farmer Login / Register"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 28,
      borderTop: '1px solid rgba(255,255,255,0.2)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
      gap: 20
    }
  }, [{
    val: '14 Mins',
    lbl: 'Avg. Wait Time',
    icon: '⏱️'
  }, {
    val: '100%',
    lbl: 'Digital Token Pass',
    icon: '🎫'
  }, {
    val: '₹2,300',
    lbl: 'Paddy MSP / Qtl',
    icon: '💰'
  }, {
    val: 'Direct',
    lbl: 'Bank Payout Track',
    icon: '🏦'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      marginBottom: 4
    }
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 26,
      color: 'white'
    }
  }, s.val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.72)',
      marginTop: 2
    }
  }, s.lbl))))), /*#__PURE__*/React.createElement("section", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontSize: 22,
      fontWeight: 800,
      color: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(135deg,#f59e0b,#d97706)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-coins"
  })), "Government Minimum Support Price (MSP 2026)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#64748b',
      fontWeight: 500
    }
  }, "Official Agriculture Board Rates")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))',
      gap: 14
    }
  }, rates.map((item, idx) => {
    const cropName = item.crop || item.name || 'Crop';
    const mspValue = item.msp || item.rate || 2000;
    const colors = [['#d1fae5', '#059669'], ['#fef3c7', '#d97706'], ['#dbeafe', '#3b82f6'], ['#ede9fe', '#8b5cf6'], ['#fee2e2', '#ef4444'], ['#ccfbf1', '#0d9488']];
    const [bg, clr] = colors[idx % colors.length];
    return /*#__PURE__*/React.createElement("div", {
      key: item.id || idx,
      style: {
        background: 'white',
        borderRadius: 14,
        padding: '16px 14px',
        textAlign: 'center',
        border: `1.5px solid ${bg}`,
        boxShadow: `0 4px 16px ${clr}20`,
        transition: 'all 0.25s',
        cursor: 'default'
      },
      onMouseOver: e => Object.assign(e.currentTarget.style, {
        transform: 'translateY(-4px)',
        boxShadow: `0 12px 32px ${clr}30`,
        borderColor: clr
      }),
      onMouseOut: e => Object.assign(e.currentTarget.style, {
        transform: 'translateY(0)',
        boxShadow: `0 4px 16px ${clr}20`,
        borderColor: bg
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        marginBottom: 6
      }
    }, item.icon || '🌾'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: '#334155',
        marginBottom: 4
      }
    }, cropName), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Outfit,sans-serif',
        fontSize: 18,
        fontWeight: 800,
        color: clr
      }
    }, "\u20B9", mspValue.toLocaleString('en-IN')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: '#94a3b8',
        marginTop: 2
      }
    }, item.season || 'Kharif 2026'));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 580,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontSize: 26,
      fontWeight: 800,
      color: '#0f172a',
      marginBottom: 8
    }
  }, "How KisanSeva Simplifies Procurement"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#64748b',
      fontSize: 14,
      lineHeight: 1.7
    }
  }, "Designed for convenience so farmers spend less time waiting and receive instant bank payouts.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 20
    }
  }, [{
    n: '1',
    color: '#059669',
    bg: 'linear-gradient(135deg,#d1fae5,#a7f3d0)',
    shadow: 'rgba(5,150,105,0.25)',
    title: 'Discover & Book Slot',
    icon: '🗺️',
    desc: 'Compare nearest procurement centers, select your crop volume, and pick a convenient 2-hour arrival window.'
  }, {
    n: '2',
    color: '#0d9488',
    bg: 'linear-gradient(135deg,#ccfbf1,#99f6e4)',
    shadow: 'rgba(13,148,136,0.25)',
    title: 'Live Queue Tracker',
    icon: '📡',
    desc: 'Track the exact token currently being processed at the mandi gate. Arrive right when your turn is coming.'
  }, {
    n: '3',
    color: '#f59e0b',
    bg: 'linear-gradient(135deg,#fef3c7,#fde68a)',
    shadow: 'rgba(245,158,11,0.25)',
    title: 'Direct Bank Transfer',
    icon: '💸',
    desc: 'Automated weighbridge testing generates verified digital receipts, triggering direct bank account payouts.'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'white',
      borderRadius: 20,
      padding: 28,
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      transition: 'all 0.25s',
      position: 'relative',
      overflow: 'hidden'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(-5px)',
      boxShadow: `0 16px 40px ${s.shadow}`
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(0)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: s.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      marginBottom: 16,
      boxShadow: `0 6px 18px ${s.shadow}`
    }
  }, s.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 800,
      fontSize: 17,
      color: '#0f172a',
      marginBottom: 8
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: '#64748b',
      lineHeight: 1.7
    }
  }, s.desc))))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      borderRadius: 24,
      padding: '28px 28px 24px',
      boxShadow: '0 20px 40px -10px rgba(5,150,105,0.45)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 20,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -40,
      right: -40,
      width: 140,
      height: 140,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '3px 12px',
      borderRadius: 99,
      background: 'rgba(255,255,255,0.22)',
      border: '1px solid rgba(255,255,255,0.35)',
      color: 'white',
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 10
    }
  }, "For Mandi Inspectors"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 22,
      color: 'white',
      marginBottom: 8
    }
  }, "Mandi Officer Console"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 13,
      lineHeight: 1.6
    }
  }, "Manage live unloading queues, scan farmer QR passes, enter moisture/net weights, and issue digital receipts.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('officerLogin'),
    style: {
      background: 'rgba(255,255,255,0.95)',
      color: '#065f46',
      fontWeight: 800,
      fontSize: 13,
      padding: '11px 20px',
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      transition: 'all 0.2s',
      position: 'relative',
      zIndex: 1
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(0)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
    })
  }, "Access Officer Dashboard", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#1e40af,#3b82f6)',
      borderRadius: 24,
      padding: '28px 28px 24px',
      boxShadow: '0 20px 40px -10px rgba(59,130,246,0.45)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 20,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -40,
      right: -40,
      width: 140,
      height: 140,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '3px 12px',
      borderRadius: 99,
      background: 'rgba(255,255,255,0.18)',
      border: '1px solid rgba(255,255,255,0.3)',
      color: 'white',
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 10
    }
  }, "For State Authorities"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 22,
      color: 'white',
      marginBottom: 8
    }
  }, "State Procurement Analytics"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 13,
      lineHeight: 1.6
    }
  }, "Monitor district-wise grain tonnage, mandi capacity utilization heat maps, and bottleneck resolution.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('adminDash'),
    style: {
      background: 'rgba(255,255,255,0.95)',
      color: '#1e40af',
      fontWeight: 800,
      fontSize: 13,
      padding: '11px 20px',
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      transition: 'all 0.2s',
      position: 'relative',
      zIndex: 1
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(0)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chart-line"
  }), "View Admin Analytics"))));
};

/* --- static/js/pages/FarmerLogin.jsx --- */
// Page 2: Farmer Login — Visual Demonstration Theme

window.FarmerLogin = function FarmerLogin({
  navigateTo,
  onLoginSuccess
}) {
  const [phone, setPhone] = React.useState('9876543210');
  const [password, setPassword] = React.useState('pass123');
  const [selectedDistrict, setSelectedDistrict] = React.useState('West Godavari');
  const [mandal, setMandal] = React.useState('Bhimavaram');
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const handleLoginSubmit = async e => {
    e.preventDefault();
    if (!phone || !password) {
      setErrorMsg('Please enter both mobile number and password.');
      return;
    }
    setIsLoading(true);
    setErrorMsg('');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: phone,
          password: password
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || data.message || 'Login failed');
      }
      onLoginSuccess(data.user);
      navigateTo('farmerDash');
    } catch (error) {
      setErrorMsg(error.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  const fillDemoFarmer = (dist, mndl, name) => {
    setPhone('9392015878');
    setPassword('shankar');
    setSelectedDistrict(dist);
    setMandal(mndl);
    setErrorMsg('');
  };
  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: '1.5px solid #e2e8f0',
    borderRadius: 10,
    fontFamily: 'Inter,sans-serif',
    fontSize: 14,
    outline: 'none',
    transition: 'all 0.2s',
    background: 'white',
    color: '#0f172a'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      margin: '0 auto',
      padding: '32px 0 48px',
      animation: 'fadeIn 0.4s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      borderRadius: '24px 24px 0 0',
      padding: '32px 32px 48px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -30,
      right: -30,
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -20,
      left: 20,
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.07)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 68,
      height: 68,
      borderRadius: 18,
      background: 'rgba(255,255,255,0.2)',
      border: '2px solid rgba(255,255,255,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 32,
      margin: '0 auto 14px',
      backdropFilter: 'blur(4px)',
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
    }
  }, "\uD83C\uDF3E"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 26,
      color: 'white',
      margin: '0 0 6px',
      position: 'relative',
      zIndex: 1
    }
  }, "Farmer Login"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 13,
      position: 'relative',
      zIndex: 1
    }
  }, "Enter your registered mobile to manage slot bookings")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: '0 0 24px 24px',
      padding: '32px',
      boxShadow: '0 20px 48px rgba(5,150,105,0.15)',
      border: '1px solid rgba(5,150,105,0.12)',
      borderTop: 'none'
    }
  }, errorMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 14px',
      marginBottom: 20,
      background: '#fef2f2',
      border: '1.5px solid #fecaca',
      borderRadius: 10,
      color: '#dc2626',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation"
  }), /*#__PURE__*/React.createElement("span", null, errorMsg)), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleLoginSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 6,
      color: '#334155'
    }
  }, "Mobile Number ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 13,
      fontWeight: 700,
      color: '#059669',
      zIndex: 1
    }
  }, "+91"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "10-digit mobile number",
    style: {
      ...inputStyle,
      paddingLeft: 48
    },
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.12)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      borderColor: '#e2e8f0',
      boxShadow: 'none'
    }),
    required: true
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 6,
      color: '#334155'
    }
  }, "Password ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: showPassword ? 'text' : 'password',
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "Enter your password",
    style: {
      ...inputStyle,
      paddingRight: 44
    },
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.12)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      borderColor: '#e2e8f0',
      boxShadow: 'none'
    }),
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowPassword(!showPassword),
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      color: '#94a3b8',
      fontSize: 15,
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#f0fdf4,#ecfdf5)',
      border: '1.5px solid rgba(5,150,105,0.25)',
      borderRadius: 12,
      padding: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: '#065f46',
      marginBottom: 8,
      letterSpacing: '.04em'
    }
  }, "\uD83C\uDFAF SELECT FARMER DISTRICT & MANDAL DEMO PROFILE:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, [{
    dist: 'West Godavari',
    mandal: 'Bhimavaram',
    label: '🌾 Bhimavaram, West Godavari (Bhimavaram Mandi)'
  }, {
    dist: 'West Godavari',
    mandal: 'Palakollu',
    label: '🌾 Palakollu, West Godavari (Palakollu Yard)'
  }, {
    dist: 'West Godavari',
    mandal: 'Tanuku',
    label: '🌾 Tanuku, West Godavari (Tanuku Yard)'
  }, {
    dist: 'Eluru',
    mandal: 'Eluru Town',
    label: '🌾 Eluru District (Eluru Main Complex)'
  }, {
    dist: 'Guntur',
    mandal: 'Guntur Town',
    label: '🌾 Guntur District (Guntur Mirchi Yard)'
  }].map(p => /*#__PURE__*/React.createElement("button", {
    key: p.mandal,
    type: "button",
    onClick: () => fillDemoFarmer(p.dist, p.mandal),
    style: {
      width: '100%',
      background: selectedDistrict === p.dist && mandal === p.mandal ? '#d1fae5' : 'white',
      border: `1.5px solid ${selectedDistrict === p.dist && mandal === p.mandal ? '#059669' : 'rgba(5,150,105,0.2)'}`,
      borderRadius: 8,
      padding: '7px 10px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
      transition: 'all 0.18s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: '#065f46'
    }
  }, p.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: '#059669',
      fontWeight: 800
    }
  }, "Select"))))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: isLoading,
    style: {
      background: isLoading ? '#94a3b8' : 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      fontWeight: 800,
      fontSize: 15,
      padding: '14px',
      borderRadius: 12,
      border: 'none',
      cursor: isLoading ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      boxShadow: isLoading ? 'none' : '0 6px 20px rgba(5,150,105,0.4)',
      transition: 'all 0.2s',
      marginTop: 4
    }
  }, isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-spinner fa-spin"
  }), "Signing In\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-right-to-bracket"
  }), "Login to KisanSeva Portal"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 22,
      paddingTop: 18,
      borderTop: '1px solid #f1f5f9',
      fontSize: 13,
      color: '#64748b'
    }
  }, "Don't have an account?", ' ', /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('farmerRegister'),
    style: {
      color: '#059669',
      fontWeight: 800,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }, "Register as Farmer")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 12,
      color: '#94a3b8'
    }
  }, "Are you a Mandi Officer?", ' ', /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('officerLogin'),
    style: {
      color: '#f59e0b',
      fontWeight: 700,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }, "Officer Login \u2192"))));
};

/* --- static/js/pages/FarmerRegister.jsx --- */
// Page 3: Farmer Registration — Visual Demonstration Theme with AP & TS District Support

window.FarmerRegister = function FarmerRegister({
  navigateTo,
  onLoginSuccess
}) {
  const [step, setStep] = React.useState(1); // 2-step registration
  const apDistricts = window.DEMO_DATA && window.DEMO_DATA.apDistricts || ["Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kakinada", "NTR (Vijayawada)", "Nandyal", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam", "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"];
  const tsDistricts = window.DEMO_DATA && window.DEMO_DATA.tsDistricts || ["Medak", "Siddipet", "Sangareddy", "Karimnagar", "Nizamabad", "Warangal"];
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    village: '',
    stateName: 'Andhra Pradesh',
    district: 'Guntur',
    primaryCrop: 'Paddy (Grade A)',
    landHolding: '',
    aadhaar: '',
    bankAccount: '',
    ifsc: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const set = (key, val) => setFormData(prev => ({
    ...prev,
    [key]: val
  }));
  const currentDistricts = formData.stateName === 'Andhra Pradesh' ? apDistricts : tsDistricts;
  const handleStateChange = e => {
    const newState = e.target.value;
    const defaultDist = newState === 'Andhra Pradesh' ? 'Guntur' : 'Medak';
    setFormData(prev => ({
      ...prev,
      stateName: newState,
      district: defaultDist
    }));
  };
  const validateStep1 = () => {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = 'Full name is required';
    if (!formData.phone || formData.phone.length !== 10) e.phone = 'Enter valid 10-digit mobile number';
    if (!formData.village.trim()) e.village = 'Village / Mandal is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const validateStep2 = () => {
    const e = {};
    if (!formData.password || formData.password.length < 6) e.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) e.confirmPassword = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateStep2()) return;
    setIsLoading(true);
    setErrors({});
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          password: formData.password,
          role: 'FARMER',
          location_name: `${formData.village}, ${formData.district} (${formData.stateName})`,
          lat: 17.9500,
          lng: 78.2500
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || data.message || 'Registration failed');
      }
      onLoginSuccess(data.user);
      navigateTo('farmerDash');
    } catch (error) {
      setErrors({
        submit: error.message || 'Registration failed. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };
  const inputStyle = hasError => ({
    width: '100%',
    padding: '11px 14px',
    border: `1.5px solid ${hasError ? '#fca5a5' : '#e2e8f0'}`,
    borderRadius: 10,
    fontFamily: 'Inter,sans-serif',
    fontSize: 14,
    outline: 'none',
    background: 'white',
    color: '#0f172a',
    transition: 'all 0.2s'
  });
  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 6,
    color: '#334155'
  };
  const errStyle = {
    fontSize: 11,
    color: '#ef4444',
    marginTop: 4,
    fontWeight: 600
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      margin: '0 auto',
      padding: '32px 0 48px',
      animation: 'fadeIn 0.4s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#059669,#3b82f6)',
      borderRadius: '24px 24px 0 0',
      padding: '28px 32px 44px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -40,
      right: -40,
      width: 150,
      height: 150,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18,
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: 'rgba(255,255,255,0.2)',
      border: '2px solid rgba(255,255,255,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 26
    }
  }, "\uD83C\uDF31"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 22,
      color: 'white',
      margin: 0
    }
  }, "Farmer Registration"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 12,
      margin: 0
    }
  }, "Andhra Pradesh & Telangana Farmer Portal \u2014 Step ", step, " of 2"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, [1, 2].map(s => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: s <= step ? 'white' : 'rgba(255,255,255,0.25)',
      color: s <= step ? '#059669' : 'rgba(255,255,255,0.6)',
      fontWeight: 800,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s'
    }
  }, s < step ? /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check",
    style: {
      fontSize: 11
    }
  }) : s), s < 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 3,
      borderRadius: 99,
      background: step > 1 ? 'white' : 'rgba(255,255,255,0.3)',
      transition: 'background 0.4s'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.85)',
      fontWeight: 700
    }
  }, "Personal & Location"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.85)',
      fontWeight: 700
    }
  }, "Account Setup")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: '0 0 24px 24px',
      padding: '32px',
      boxShadow: '0 20px 48px rgba(5,150,105,0.14)',
      border: '1px solid rgba(5,150,105,0.12)',
      borderTop: 'none'
    }
  }, step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Full Name ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.fullName,
    onChange: e => set('fullName', e.target.value),
    placeholder: "e.g. K. Venkatrao",
    style: inputStyle(errors.fullName),
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.10)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      boxShadow: 'none',
      borderColor: errors.fullName ? '#fca5a5' : '#e2e8f0'
    })
  }), errors.fullName && /*#__PURE__*/React.createElement("div", {
    style: errStyle
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation"
  }), " ", errors.fullName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Mobile Number ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 13,
      fontWeight: 700,
      color: '#059669'
    }
  }, "+91"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: formData.phone,
    onChange: e => set('phone', e.target.value),
    placeholder: "10-digit phone number",
    style: {
      ...inputStyle(errors.phone),
      paddingLeft: 48
    },
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.10)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      boxShadow: 'none',
      borderColor: errors.phone ? '#fca5a5' : '#e2e8f0'
    })
  })), errors.phone && /*#__PURE__*/React.createElement("div", {
    style: errStyle
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation"
  }), " ", errors.phone)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "State ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "*")), /*#__PURE__*/React.createElement("select", {
    value: formData.stateName,
    onChange: handleStateChange,
    style: {
      ...inputStyle(false),
      cursor: 'pointer',
      fontWeight: 700,
      color: '#065f46'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "Andhra Pradesh"
  }, "Andhra Pradesh"), /*#__PURE__*/React.createElement("option", {
    value: "Telangana"
  }, "Telangana"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "District (", currentDistricts.length, " Available) ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "*")), /*#__PURE__*/React.createElement("select", {
    value: formData.district,
    onChange: e => set('district', e.target.value),
    style: {
      ...inputStyle(false),
      cursor: 'pointer'
    }
  }, currentDistricts.map(d => /*#__PURE__*/React.createElement("option", {
    key: d,
    value: d
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Village / Mandal ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.village,
    onChange: e => set('village', e.target.value),
    placeholder: "e.g. Tenali / Mangalagiri",
    style: inputStyle(errors.village),
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.10)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      boxShadow: 'none',
      borderColor: errors.village ? '#fca5a5' : '#e2e8f0'
    })
  }), errors.village && /*#__PURE__*/React.createElement("div", {
    style: errStyle
  }, errors.village)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Primary Crop"), /*#__PURE__*/React.createElement("select", {
    value: formData.primaryCrop,
    onChange: e => set('primaryCrop', e.target.value),
    style: {
      ...inputStyle(false),
      cursor: 'pointer'
    }
  }, ['Paddy (Grade A)', 'Paddy (Common)', 'Wheat (Grade 1)', 'Cotton (Long Staple)', 'Maize (Yellow)', 'Pulses (Red Gram/Tur)'].map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Land Holding (Acres)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: formData.landHolding,
    onChange: e => set('landHolding', e.target.value),
    placeholder: "e.g. 5.0",
    style: inputStyle(false),
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.10)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      boxShadow: 'none',
      borderColor: '#e2e8f0'
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Aadhaar Number ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#94a3b8',
      fontWeight: 500
    }
  }, "(optional)")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.aadhaar,
    onChange: e => set('aadhaar', e.target.value),
    placeholder: "12-digit Aadhaar",
    maxLength: 12,
    style: inputStyle(false),
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.10)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      boxShadow: 'none',
      borderColor: '#e2e8f0'
    })
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleNext,
    style: {
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      fontWeight: 800,
      fontSize: 15,
      padding: '13px',
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      boxShadow: '0 6px 20px rgba(5,150,105,0.38)',
      marginTop: 4
    }
  }, "Continue to Account Setup", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right"
  }))), step === 2 && /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#f0fdf4,#ecfdf5)',
      border: '1px solid rgba(5,150,105,0.2)',
      borderRadius: 10,
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18
    }
  }, "\uD83D\uDC64"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: '#065f46'
    }
  }, formData.fullName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#059669'
    }
  }, "+91 ", formData.phone, " \xB7 ", formData.village, ", ", formData.district, " (", formData.stateName, ")"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Bank Account Number ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#94a3b8',
      fontWeight: 500
    }
  }, "(for MSP payout)")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.bankAccount,
    onChange: e => set('bankAccount', e.target.value),
    placeholder: "Your savings account number",
    style: inputStyle(false),
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.10)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      boxShadow: 'none',
      borderColor: '#e2e8f0'
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "IFSC Code"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: formData.ifsc,
    onChange: e => set('ifsc', e.target.value.toUpperCase()),
    placeholder: "e.g. SBIN0001234",
    style: inputStyle(false),
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.10)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      boxShadow: 'none',
      borderColor: '#e2e8f0'
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Create Password ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: showPassword ? 'text' : 'password',
    value: formData.password,
    onChange: e => set('password', e.target.value),
    placeholder: "Minimum 6 characters",
    style: {
      ...inputStyle(errors.password),
      paddingRight: 44
    },
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.10)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      boxShadow: 'none',
      borderColor: errors.password ? '#fca5a5' : '#e2e8f0'
    }),
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowPassword(!showPassword),
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      color: '#94a3b8',
      fontSize: 15,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`
  }))), errors.password && /*#__PURE__*/React.createElement("div", {
    style: errStyle
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation"
  }), " ", errors.password)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Confirm Password ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#059669'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: showConfirm ? 'text' : 'password',
    value: formData.confirmPassword,
    onChange: e => set('confirmPassword', e.target.value),
    placeholder: "Re-enter password",
    style: {
      ...inputStyle(errors.confirmPassword),
      paddingRight: 44
    },
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#059669',
      boxShadow: '0 0 0 3px rgba(5,150,105,0.10)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      boxShadow: 'none',
      borderColor: errors.confirmPassword ? '#fca5a5' : '#e2e8f0'
    }),
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowConfirm(!showConfirm),
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      color: '#94a3b8',
      fontSize: 15,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${showConfirm ? 'fa-eye-slash' : 'fa-eye'}`
  }))), errors.confirmPassword && /*#__PURE__*/React.createElement("div", {
    style: errStyle
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation"
  }), " ", errors.confirmPassword)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setStep(1);
      setErrors({});
    },
    style: {
      flex: 1,
      background: 'white',
      border: '1.5px solid #e2e8f0',
      color: '#475569',
      fontWeight: 700,
      fontSize: 14,
      padding: '13px',
      borderRadius: 12,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-left"
  }), " Back"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: isLoading,
    style: {
      flex: 2,
      background: isLoading ? '#94a3b8' : 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      fontWeight: 800,
      fontSize: 15,
      padding: '13px',
      borderRadius: 12,
      border: 'none',
      cursor: isLoading ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      boxShadow: isLoading ? 'none' : '0 6px 20px rgba(5,150,105,0.38)'
    }
  }, isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-spinner fa-spin"
  }), " Registering\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-user-plus"
  }), " Complete Registration")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 22,
      paddingTop: 18,
      borderTop: '1px solid #f1f5f9',
      fontSize: 13,
      color: '#64748b'
    }
  }, "Already have an account?", ' ', /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('farmerLogin'),
    style: {
      color: '#059669',
      fontWeight: 800,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }, "Login Here"))));
};

/* --- static/js/pages/FarmerDashboard.jsx --- */
// Page 4: Farmer Dashboard — Visual Demonstration Theme + Slot Cancellation

window.FarmerDashboard = function FarmerDashboard({
  navigateTo,
  user,
  activeBooking
}) {
  // All bookings the farmer can manage
  const [myBookings, setMyBookings] = React.useState((window.DEMO_DATA.sampleBookings || []).filter(b => b.farmerPhone === (user && user.phone ? user.phone : '9876543210')));
  const [cancelTarget, setCancelTarget] = React.useState(null); // booking to cancel
  const [cancelReason, setCancelReason] = React.useState('');
  const [showCancelModal, setShowCancelModal] = React.useState(false);
  const [cancelSuccess, setCancelSuccess] = React.useState(null);
  const cancelReasons = ['Crop not ready for delivery', 'Heavy rainfall / weather issue', 'Transport vehicle unavailable', 'Personal / family emergency', 'Found better centre nearby', 'Other'];
  const openCancelDialog = booking => {
    setCancelTarget(booking);
    setCancelReason('');
    setShowCancelModal(true);
  };
  const confirmCancel = () => {
    if (!cancelReason) return;
    setMyBookings(prev => prev.map(b => b.id === cancelTarget.id ? {
      ...b,
      status: 'CANCELLED',
      cancelReason
    } : b));
    setCancelSuccess(cancelTarget.tokenNumber);
    setShowCancelModal(false);
    setCancelTarget(null);
    setTimeout(() => setCancelSuccess(null), 4000);
  };
  const activeSlot = myBookings.find(b => b.status !== 'COMPLETED' && b.status !== 'CANCELLED');
  const pastBookings = myBookings.filter(b => b.status === 'COMPLETED' || b.status === 'CANCELLED');
  const statusColors = {
    BOOKED: {
      bg: '#dbeafe',
      color: '#1d4ed8',
      icon: 'fa-calendar-check'
    },
    CHECKED_IN: {
      bg: '#d1fae5',
      color: '#065f46',
      icon: 'fa-door-open'
    },
    QUALITY_CHECK: {
      bg: '#fef3c7',
      color: '#92400e',
      icon: 'fa-flask'
    },
    WEIGHED: {
      bg: '#ede9fe',
      color: '#5b21b6',
      icon: 'fa-weight-scale'
    },
    COMPLETED: {
      bg: '#dcfce7',
      color: '#166534',
      icon: 'fa-circle-check'
    },
    CANCELLED: {
      bg: '#fee2e2',
      color: '#991b1b',
      icon: 'fa-circle-xmark'
    }
  };
  const canCancel = status => ['BOOKED', 'CHECKED_IN'].includes(status);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 48,
      animation: 'fadeIn 0.4s ease'
    }
  }, cancelSuccess && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 80,
      right: 24,
      zIndex: 999,
      background: '#fef2f2',
      border: '1.5px solid #fca5a5',
      borderRadius: 14,
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: '0 12px 32px rgba(239,68,68,0.2)',
      animation: 'slideInRight 0.3s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\uD83D\uDEAB"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: '#991b1b'
    }
  }, "Slot Cancelled"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#ef4444'
    }
  }, "Token ", cancelSuccess, " has been cancelled successfully."))), showCancelModal && cancelTarget && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,0.55)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 500
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 24,
      padding: 32,
      width: '90%',
      maxWidth: 440,
      boxShadow: '0 32px 72px rgba(0,0,0,0.2)',
      animation: 'slideUp 0.3s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: '#fee2e2',
      color: '#ef4444',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24
    }
  }, "\uD83D\uDEAB"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 800,
      fontSize: 18,
      color: '#0f172a',
      margin: '0 0 3px'
    }
  }, "Cancel Slot Booking?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: '#64748b',
      margin: 0
    }
  }, "Token ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#ef4444'
    }
  }, cancelTarget.tokenNumber), " \xB7 ", cancelTarget.timeWindow))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: 12,
      padding: '12px 14px',
      marginBottom: 20,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#94a3b8',
      fontWeight: 600
    }
  }, "Centre"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#0f172a'
    }
  }, cancelTarget.centreName?.split(' ').slice(0, 3).join(' '))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#94a3b8',
      fontWeight: 600
    }
  }, "Crop"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#0f172a'
    }
  }, cancelTarget.cropType)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#94a3b8',
      fontWeight: 600
    }
  }, "Date"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#0f172a'
    }
  }, cancelTarget.slotDate)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#94a3b8',
      fontWeight: 600
    }
  }, "Est. Qty"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#0f172a'
    }
  }, cancelTarget.estimatedQty, " Qtl"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 8,
      color: '#334155'
    }
  }, "Reason for Cancellation ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ef4444'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, cancelReasons.map(r => /*#__PURE__*/React.createElement("label", {
    key: r,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: cancelReason === r ? '#fef2f2' : 'white',
      border: `1.5px solid ${cancelReason === r ? '#fca5a5' : '#e2e8f0'}`,
      borderRadius: 10,
      padding: '9px 12px',
      cursor: 'pointer',
      transition: 'all 0.18s'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "cancelReason",
    value: r,
    checked: cancelReason === r,
    onChange: () => setCancelReason(r),
    style: {
      accentColor: '#ef4444'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: cancelReason === r ? 700 : 500,
      color: cancelReason === r ? '#991b1b' : '#475569'
    }
  }, r))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowCancelModal(false);
      setCancelTarget(null);
    },
    style: {
      flex: 1,
      background: 'white',
      border: '1.5px solid #e2e8f0',
      color: '#475569',
      fontWeight: 700,
      fontSize: 14,
      padding: '12px',
      borderRadius: 12,
      cursor: 'pointer'
    }
  }, "Keep Slot"), /*#__PURE__*/React.createElement("button", {
    onClick: confirmCancel,
    disabled: !cancelReason,
    style: {
      flex: 1.5,
      background: cancelReason ? 'linear-gradient(135deg,#ef4444,#dc2626)' : '#e2e8f0',
      color: cancelReason ? 'white' : '#94a3b8',
      fontWeight: 800,
      fontSize: 14,
      padding: '12px',
      borderRadius: 12,
      border: 'none',
      cursor: cancelReason ? 'pointer' : 'not-allowed',
      boxShadow: cancelReason ? '0 6px 18px rgba(239,68,68,0.35)' : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-xmark"
  }), "Confirm Cancel")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: '#94a3b8',
      textAlign: 'center',
      marginTop: 12
    }
  }, "\u26A0 Cancellations within 2 hours of slot time may affect future booking priority."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#059669,#0d9488 60%,#3b82f6)',
      borderRadius: 24,
      padding: '32px 36px',
      marginBottom: 28,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 24px 48px -10px rgba(5,150,105,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -50,
      right: -50,
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(255,255,255,0.2)',
      border: '1px solid rgba(255,255,255,0.3)',
      padding: '3px 12px',
      borderRadius: 99,
      marginBottom: 10,
      fontSize: 11,
      fontWeight: 700,
      color: 'white'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#86efac',
      display: 'inline-block',
      boxShadow: '0 0 0 3px rgba(134,239,172,0.3)'
    }
  }), "Active Farmer Portal \xB7 Season 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 28,
      color: 'white',
      margin: '0 0 6px'
    }
  }, "Welcome, ", user ? user.name : 'Ramesh Patel', " \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 14,
      margin: 0,
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-location-dot"
  }), user ? user.village : 'Papyal Village, Medak District')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('slotBooking'),
    style: {
      background: 'rgba(255,255,255,0.95)',
      color: '#065f46',
      fontWeight: 800,
      fontSize: 13,
      padding: '11px 20px',
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(-2px)'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(0)'
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-calendar-plus"
  }), "Book Procurement Slot"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('centreListing'),
    style: {
      background: 'rgba(255,255,255,0.18)',
      border: '1.5px solid rgba(255,255,255,0.4)',
      color: 'white',
      fontWeight: 700,
      fontSize: 13,
      padding: '11px 18px',
      borderRadius: 12,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      background: 'rgba(255,255,255,0.28)'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      background: 'rgba(255,255,255,0.18)'
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-compass"
  }), "Find Centres")))), activeSlot && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 800,
      fontSize: 18,
      color: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-ticket-simple",
    style: {
      color: '#f59e0b'
    }
  }), "Your Active Procurement Token"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      background: '#d1fae5',
      color: '#065f46',
      padding: '3px 12px',
      borderRadius: 99,
      border: '1px solid #6ee7b7'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#059669',
      display: 'inline-block',
      animation: 'pulse 2s infinite'
    }
  }), "Live Status")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 20,
      border: '1.5px solid rgba(5,150,105,0.25)',
      boxShadow: '0 12px 36px rgba(5,150,105,0.12)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#f0fdf4,#ecfdf5)',
      borderBottom: '1px solid rgba(5,150,105,0.15)',
      padding: '18px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#64748b',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginBottom: 4
    }
  }, "Token Number"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 28,
      color: '#f59e0b',
      letterSpacing: '.04em'
    }
  }, activeSlot.tokenNumber)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid rgba(5,150,105,0.2)',
      borderRadius: 12,
      padding: '8px 14px',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#94a3b8',
      fontWeight: 600
    }
  }, "Crop & Est. Weight"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      color: '#0f172a'
    }
  }, activeSlot.cropType, " \xB7 ", activeSlot.estimatedQty, " Qtl")), (() => {
    const s = statusColors[activeSlot.status] || {
      bg: '#f1f5f9',
      color: '#475569',
      icon: 'fa-circle'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: s.bg,
        color: s.color,
        fontSize: 11,
        fontWeight: 800,
        padding: '5px 12px',
        borderRadius: 99,
        display: 'flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `fa-solid ${s.icon}`
    }), activeSlot.status.replace('_', ' '));
  })())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(110px,1fr))',
      gap: 1,
      background: '#f1f5f9',
      padding: '0'
    }
  }, [{
    label: 'Procurement Yard',
    val: activeSlot.centreName?.split(' ').slice(0, 3).join(' ') + '…',
    icon: 'fa-building'
  }, {
    label: 'Time Window',
    val: activeSlot.timeWindow,
    icon: 'fa-clock',
    col: '#059669'
  }, {
    label: 'Farmers Ahead',
    val: activeSlot.tokensAhead + ' Farmers',
    icon: 'fa-users',
    col: '#f59e0b'
  }, {
    label: 'Est. Wait',
    val: activeSlot.estWaitMins + ' Mins',
    icon: 'fa-hourglass-half',
    col: '#0d9488'
  }].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'white',
      padding: '14px 18px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${m.icon}`,
    style: {
      color: m.col || '#94a3b8',
      fontSize: 14,
      marginBottom: 6,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#94a3b8',
      fontWeight: 600,
      marginBottom: 3
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: m.col || '#0f172a'
    }
  }, m.val)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('bookingConfirmation'),
    style: {
      background: 'white',
      border: '1.5px solid #e2e8f0',
      color: '#475569',
      fontWeight: 700,
      fontSize: 12,
      padding: '8px 14px',
      borderRadius: 10,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      background: '#f8fafc',
      borderColor: '#059669',
      color: '#059669'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      background: 'white',
      borderColor: '#e2e8f0',
      color: '#475569'
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-qrcode",
    style: {
      color: '#059669'
    }
  }), " View Digital Pass"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('liveQueue'),
    style: {
      background: 'linear-gradient(135deg,#059669,#0d9488)',
      color: 'white',
      fontWeight: 800,
      fontSize: 12,
      padding: '8px 16px',
      borderRadius: 10,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      boxShadow: '0 4px 12px rgba(5,150,105,0.3)',
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(-1px)'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(0)'
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-stopwatch"
  }), " Track Live Queue")), canCancel(activeSlot.status) && /*#__PURE__*/React.createElement("button", {
    onClick: () => openCancelDialog(activeSlot),
    style: {
      background: '#fef2f2',
      border: '1.5px solid #fecaca',
      color: '#dc2626',
      fontWeight: 700,
      fontSize: 12,
      padding: '8px 14px',
      borderRadius: 10,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      background: '#fee2e2',
      borderColor: '#fca5a5'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      background: '#fef2f2',
      borderColor: '#fecaca'
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-xmark"
  }), " Cancel Slot")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 800,
      fontSize: 18,
      color: '#0f172a',
      marginBottom: 14
    }
  }, "Quick Farmer Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 14
    }
  }, [{
    page: 'centreListing',
    icon: 'fa-compass',
    emoji: '🗺️',
    bg: 'linear-gradient(135deg,#d1fae5,#a7f3d0)',
    color: '#059669',
    shadow: 'rgba(5,150,105,0.2)',
    title: 'Mandi Discovery',
    desc: 'Find nearby yards sorted by shortest wait time.'
  }, {
    page: 'slotBooking',
    icon: 'fa-calendar-check',
    emoji: '📅',
    bg: 'linear-gradient(135deg,#ccfbf1,#99f6e4)',
    color: '#0d9488',
    shadow: 'rgba(13,148,136,0.2)',
    title: 'Book Delivery Slot',
    desc: 'Schedule date and 2-hour window for grain delivery.'
  }, {
    page: 'liveQueue',
    icon: 'fa-stopwatch',
    emoji: '📡',
    bg: 'linear-gradient(135deg,#fef3c7,#fde68a)',
    color: '#d97706',
    shadow: 'rgba(245,158,11,0.2)',
    title: 'Live Queue Tracker',
    desc: 'Monitor currently serving token and turn alerts.'
  }, {
    page: 'procurementStatus',
    icon: 'fa-receipt',
    emoji: '🏦',
    bg: 'linear-gradient(135deg,#dbeafe,#bfdbfe)',
    color: '#2563eb',
    shadow: 'rgba(59,130,246,0.2)',
    title: 'Payout & Receipts',
    desc: 'View digital weighing slips and bank transfer history.'
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => navigateTo(c.page),
    style: {
      background: 'white',
      borderRadius: 16,
      padding: '18px',
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      transition: 'all 0.25s',
      position: 'relative',
      overflow: 'hidden'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(-4px)',
      boxShadow: `0 14px 36px ${c.shadow}`
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      transform: 'translateY(0)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.05)'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 13,
      background: c.bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      marginBottom: 12,
      boxShadow: `0 4px 14px ${c.shadow}`
    }
  }, c.emoji), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 800,
      fontSize: 15,
      color: '#0f172a',
      margin: '0 0 5px'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: '#64748b',
      margin: '0 0 12px',
      lineHeight: 1.6
    }
  }, c.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: c.color,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, "Open ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    style: {
      fontSize: 10
    }
  })))))), pastBookings.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 800,
      fontSize: 18,
      color: '#0f172a',
      marginBottom: 14
    }
  }, "Booking History"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, pastBookings.map(b => {
    const s = statusColors[b.status] || {
      bg: '#f1f5f9',
      color: '#475569',
      icon: 'fa-circle'
    };
    return /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: {
        background: 'white',
        borderRadius: 16,
        padding: '16px 20px',
        border: `1px solid ${b.status === 'CANCELLED' ? '#fecaca' : 'rgba(5,150,105,0.12)'}`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 42,
        height: 42,
        borderRadius: 12,
        background: s.bg,
        color: s.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `fa-solid ${s.icon}`
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 14,
        color: '#0f172a',
        fontFamily: 'monospace',
        letterSpacing: '.04em'
      }
    }, b.tokenNumber), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#64748b'
      }
    }, b.cropType, " \xB7 ", b.estimatedQty, " Qtl \xB7 ", b.slotDate), b.cancelReason && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#ef4444',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-exclamation"
    }), " Reason: ", b.cancelReason))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, b.totalPayout && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#94a3b8',
        fontWeight: 600
      }
    }, "Payout"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        color: '#059669',
        fontSize: 15
      }
    }, "\u20B9", b.totalPayout.toLocaleString('en-IN'))), /*#__PURE__*/React.createElement("span", {
      style: {
        background: s.bg,
        color: s.color,
        fontSize: 11,
        fontWeight: 800,
        padding: '4px 12px',
        borderRadius: 99
      }
    }, b.status)));
  }))));
};

/* --- static/js/pages/CentreListing.jsx --- */
// Page 5: Procurement Centre Listing Component — Visual Demonstration Theme

window.CentreListing = function CentreListing({
  navigateTo,
  centres,
  onSelectCentre,
  userLocation
}) {
  const list = centres || window.DEMO_DATA && window.DEMO_DATA.centres || [];
  const [selectedCrop, setSelectedCrop] = React.useState('ALL');
  const [selectedDistrict, setSelectedDistrict] = React.useState('ALL');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [maxDistance, setMaxDistance] = React.useState(50);
  const [sortBy, setSortBy] = React.useState('DISTANCE');

  // Available districts from current dataset
  const districtsList = React.useMemo(() => {
    const set = new Set(list.map(c => c.district));
    return Array.from(set).sort();
  }, [list]);
  const filteredCentres = React.useMemo(() => {
    let c = list.filter(item => {
      if (item.distanceKm > maxDistance) return false;
      if (selectedCrop !== 'ALL' && !item.supportedCrops.some(crop => crop.includes(selectedCrop))) return false;
      if (selectedDistrict !== 'ALL' && item.district !== selectedDistrict) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDistrict = item.district.toLowerCase().includes(q);
        const matchAddress = item.address.toLowerCase().includes(q);
        if (!matchName && !matchDistrict && !matchAddress) return false;
      }
      return true;
    });
    if (sortBy === 'WAIT_TIME') {
      c.sort((a, b) => a.activeQueueLength * a.avgProcessingMins - b.activeQueueLength * b.avgProcessingMins);
    } else if (sortBy === 'DISTANCE') {
      c.sort((a, b) => a.distanceKm - b.distanceKm);
    } else if (sortBy === 'CAPACITY') {
      c.sort((a, b) => a.currentLoadQuintals / a.maxCapacityQuintals - b.currentLoadQuintals / b.maxCapacityQuintals);
    }
    return c;
  }, [list, selectedCrop, selectedDistrict, searchQuery, maxDistance, sortBy]);
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-compass text-emerald-600 dark:text-emerald-400"
  }), " Smart Procurement Centre Discovery"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1"
  }, "Locate government mandi yards nearby in West Godavari, Eluru, Guntur, and all districts of AP & Telangana.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
  }), " ", filteredCentres.length, " Mandis Available"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-md space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value),
    placeholder: "Search by town or district (e.g. Bhimavaram, West Godavari, Eluru, Tanuku, Guntur...)",
    className: "w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 font-medium"
  }), searchQuery && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchQuery(''),
    className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap pt-1 border-t border-slate-100 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1"
  }, "Quick Select District:"), ['ALL', 'West Godavari', 'Eluru', 'Guntur', 'NTR (Vijayawada)', 'Kakinada'].map(dist => /*#__PURE__*/React.createElement("button", {
    key: dist,
    onClick: () => setSelectedDistrict(dist),
    className: `px-3 py-1 rounded-xl text-xs font-semibold border transition ${selectedDistrict === dist ? 'bg-emerald-600 text-white border-emerald-700 shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-emerald-50'}`
  }, dist === 'ALL' ? '🌾 All Districts' : dist))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-map-location-dot text-emerald-500 mr-1"
  }), "Filter District"), /*#__PURE__*/React.createElement("select", {
    value: selectedDistrict,
    onChange: e => setSelectedDistrict(e.target.value),
    className: "w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-emerald-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ALL"
  }, "\uD83D\uDCCD All Districts (", list.length, ")"), districtsList.map(d => /*#__PURE__*/React.createElement("option", {
    key: d,
    value: d
  }, "\uD83D\uDCCD ", d)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-seedling text-emerald-500 mr-1"
  }), "Filter Crop Type"), /*#__PURE__*/React.createElement("select", {
    value: selectedCrop,
    onChange: e => setSelectedCrop(e.target.value),
    className: "w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-emerald-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ALL"
  }, "\uD83C\uDF3E All Supported Crops"), /*#__PURE__*/React.createElement("option", {
    value: "Paddy"
  }, "\uD83C\uDF3E Paddy (Grade A & Common)"), /*#__PURE__*/React.createElement("option", {
    value: "Wheat"
  }, "\uD83C\uDF3E Wheat"), /*#__PURE__*/React.createElement("option", {
    value: "Cotton"
  }, "\uD83C\uDF31 Cotton"), /*#__PURE__*/React.createElement("option", {
    value: "Maize"
  }, "\uD83C\uDF3D Maize"), /*#__PURE__*/React.createElement("option", {
    value: "Sugarcane"
  }, "\uD83C\uDF8B Sugarcane"), /*#__PURE__*/React.createElement("option", {
    value: "Pulses"
  }, "\uD83E\uDED8 Pulses (Red Gram/Tur)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-1"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-semibold text-slate-700 dark:text-slate-300"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-route text-teal-500 mr-1"
  }), "Max Distance"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-extrabold text-emerald-600 dark:text-emerald-400 font-mono"
  }, maxDistance, " km")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "5",
    max: "500",
    step: "5",
    value: maxDistance,
    onChange: e => setMaxDistance(Number(e.target.value)),
    className: "w-full accent-emerald-500 cursor-pointer mt-1"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-down-short-wide text-amber-500 mr-1"
  }), "Sort Ranking"), /*#__PURE__*/React.createElement("select", {
    value: sortBy,
    onChange: e => setSortBy(e.target.value),
    className: "w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-emerald-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "DISTANCE"
  }, "\uD83D\uDCCD Nearest First"), /*#__PURE__*/React.createElement("option", {
    value: "RECOMMENDED"
  }, "\u26A1 Smart Recommendation"), /*#__PURE__*/React.createElement("option", {
    value: "WAIT_TIME"
  }, "\u23F1\uFE0F Lowest Wait Time"), /*#__PURE__*/React.createElement("option", {
    value: "CAPACITY"
  }, "\uD83D\uDCCA Most Available Capacity"))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, filteredCentres.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "col-span-full py-16 text-center text-slate-500 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-map-location-dot text-4xl text-slate-400 mb-2 block"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold text-slate-700 dark:text-slate-300"
  }, "No procurement centres found matching your search or filters."), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mt-1"
  }, "Try selecting \"All Districts\" or clearing the crop filter."), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSelectedDistrict('ALL');
      setSelectedCrop('ALL');
      setSearchQuery('');
      setMaxDistance(100);
    },
    className: "mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md hover:bg-emerald-700 transition"
  }, "Reset Filters")) : filteredCentres.map(centre => {
    const waitMins = (centre.activeQueueLength || 0) * (centre.avgProcessingMins || 10);
    const capPct = Math.round((centre.currentLoadQuintals || 0) / (centre.maxCapacityQuintals || 1000) * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: centre.id,
      className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-3xl p-6 shadow-md space-y-5 transition flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-[11px] font-extrabold"
    }, centre.tag || 'ACTIVE MANDI'), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700"
    }, "\uD83D\uDCCD ", centre.distanceKm, " km")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg font-bold text-slate-900 dark:text-white font-serif"
    }, centre.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-location-dot text-slate-400"
    }), /*#__PURE__*/React.createElement("span", null, centre.address)), /*#__PURE__*/React.createElement("span", {
      className: "inline-block mt-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800"
    }, "District: ", centre.district)), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-950/70 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-center"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold"
    }, "Queue"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-amber-600 dark:text-amber-400 font-mono mt-0.5"
    }, centre.activeQueueLength || 0, " Farmers")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold"
    }, "Wait Time"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5"
    }, waitMins, " Mins")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold"
    }, "Capacity Load"), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-bold text-teal-600 dark:text-teal-400 font-mono mt-0.5"
    }, capPct, "%"))), /*#__PURE__*/React.createElement("div", {
      className: "space-y-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium"
    }, /*#__PURE__*/React.createElement("span", null, "Capacity Load"), /*#__PURE__*/React.createElement("span", {
      className: "font-mono"
    }, centre.currentLoadQuintals, " / ", centre.maxCapacityQuintals, " Qtl")), /*#__PURE__*/React.createElement("div", {
      className: "w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: `h-full rounded-full transition-all ${capPct > 80 ? 'bg-red-500' : capPct > 50 ? 'bg-amber-400' : 'bg-emerald-500'}`,
      style: {
        width: `${capPct}%`
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-1.5 pt-1"
    }, (centre.supportedCrops || []).map((crop, idx) => /*#__PURE__*/React.createElement("span", {
      key: idx,
      className: "text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 font-medium"
    }, crop)))), /*#__PURE__*/React.createElement("div", {
      className: "pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-500 dark:text-slate-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-clock mr-1 text-slate-400"
    }), centre.operatingHours || '07:00 AM - 06:00 PM'), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (onSelectCentre) onSelectCentre(centre);
        if (navigateTo) navigateTo('slotBooking');
      },
      className: "px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs shadow-md transition flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", null, "Book Slot Here"), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-right text-[10px]"
    }))));
  })));
};

/* --- static/js/pages/CentreDetails.jsx --- */
// Page 6: Procurement Centre Details Component

window.CentreDetails = function CentreDetails({
  navigateTo,
  centre,
  onSelectCentre
}) {
  if (!centre) return null;
  const waitMins = centre.activeQueueLength * centre.avgProcessingMins;
  const capPct = Math.round(centre.currentLoadQuintals / centre.maxCapacityQuintals * 100);
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-8 pb-12 animate-fade-in max-w-4xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('centreListing'),
    className: "px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-left"
  }), " Back to All Centres"), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('slotBooking'),
    className: "px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs hover:from-emerald-400 hover:to-teal-300 transition shadow flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-calendar-plus"
  }), " Book Delivery Slot")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold"
  }, centre.tag), /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-white font-serif mt-2"
  }, centre.name), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-400 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-location-dot text-emerald-400"
  }), " ", centre.address, ", ", centre.district, ", ", centre.state, " - ", centre.pincode)), /*#__PURE__*/React.createElement("div", {
    className: "text-right bg-slate-950/80 p-4 rounded-2xl border border-slate-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "Distance from Your Village"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-extrabold text-amber-400 font-mono"
  }, centre.distanceKm, " km"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 text-center"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "Operating Hours"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-white mt-1"
  }, centre.operatingHours)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "Current Queue"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-amber-400 mt-1"
  }, centre.activeQueueLength, " Farmers")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "Est. Wait Time"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-emerald-400 mt-1"
  }, waitMins, " Mins")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "Yard Load Capacity"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-teal-400 mt-1"
  }, capPct, "% Utilized"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-amber-950 border border-amber-800 text-amber-400 flex items-center justify-center text-lg font-bold"
  }, "\uD83D\uDC6E"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "Officer In Charge"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-white"
  }, centre.officerInCharge))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center text-lg font-bold"
  }, "\uD83D\uDCDE"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "Mandi Helpline"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-emerald-400 font-mono"
  }, centre.contactPhone)))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-white text-base font-serif"
  }, "Mandi Yard Infrastructure & Facilities"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5"
  }, centre.facilities.map((fac, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "flex items-center gap-2 text-xs text-slate-300 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-check text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, fac))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-white text-base font-serif"
  }, "Procurement Supported Crops"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, centre.supportedCrops.map((crop, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    className: "px-3 py-1.5 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-800 text-xs font-semibold"
  }, "\uD83C\uDF3E ", crop))))));
};

/* --- static/js/pages/SlotBooking.jsx --- */
// Page 7: Slot Booking Component with Dynamic Mandi Yard & District Selector

window.SlotBooking = function SlotBooking({
  navigateTo,
  centre,
  centres,
  onSelectCentre,
  slots,
  onCreateBooking,
  user
}) {
  const centresList = centres || window.DEMO_DATA && window.DEMO_DATA.centres || [];
  const selectedCentre = centre || centresList[0] || {};
  const [cropType, setCropType] = React.useState('Paddy (Grade A)');
  const [estimatedQty, setEstimatedQty] = React.useState(25);
  const [slotDate, setSlotDate] = React.useState('2026-09-06');
  const [selectedSlotId, setSelectedSlotId] = React.useState(101);
  const handleCentreChange = e => {
    const chosenId = Number(e.target.value);
    const found = centresList.find(c => c.id === chosenId);
    if (found && onSelectCentre) {
      onSelectCentre(found);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const availableSlots = slots || window.DEMO_DATA && window.DEMO_DATA.slots || [];
    const chosenSlot = availableSlots.find(s => s.id === selectedSlotId) || availableSlots[0] || {
      timeWindow: "08:00 AM - 10:00 AM"
    };
    const newBooking = {
      id: Date.now(),
      tokenNumber: `TK-2026-${Math.floor(100 + Math.random() * 900)}`,
      farmerName: user && user.name || 'Ramesh Patel',
      farmerPhone: user && user.phone || '9876543210',
      farmerVillage: user && user.village || 'Bhimavaram Town, West Godavari',
      district: selectedCentre.district || 'West Godavari',
      centreId: selectedCentre.id || 101,
      centreName: selectedCentre.name || 'Bhimavaram APMC Agricultural Market Yard',
      cropType: cropType,
      estimatedQty: Number(estimatedQty),
      verifiedQty: null,
      qualityGrade: null,
      mspRate: 2300,
      totalPayout: null,
      slotDate: slotDate,
      timeWindow: chosenSlot.timeWindow,
      status: 'BOOKED',
      queuePosition: (selectedCentre.activeQueueLength || 1) + 1,
      tokensAhead: selectedCentre.activeQueueLength || 1,
      currentlyServing: 'TK-2026-104',
      estWaitMins: ((selectedCentre.activeQueueLength || 1) + 1) * (selectedCentre.avgProcessingMins || 10),
      qrCode: `KisanSeva-TK-2026-NEW-${Date.now()}`
    };
    if (onCreateBooking) onCreateBooking(newBooking);
    navigateTo('bookingConfirmation');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto space-y-6 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between flex-wrap gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-calendar-check text-emerald-600"
  }), " Book Delivery Slot"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-xs sm:text-sm mt-1"
  }, "Reserve a 2-hour arrival window to skip long waiting queues at your regional mandi.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('centreListing'),
    className: "px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 shadow-sm transition"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-compass mr-1"
  }), " Browse All Mandis")), /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-emerald-800 to-teal-700 p-5 rounded-2xl border border-emerald-600 shadow-lg text-white flex items-center justify-between gap-4 flex-wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-emerald-200 font-bold uppercase tracking-wider"
  }, "\uD83D\uDCCD Selected Regional Mandi Yard"), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-black font-serif mt-0.5"
  }, selectedCentre.name), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-emerald-100 flex items-center gap-3 mt-1 flex-wrap font-medium"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFDB\uFE0F District: ", /*#__PURE__*/React.createElement("strong", null, selectedCentre.district)), /*#__PURE__*/React.createElement("span", null, "\u2022"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCD ", /*#__PURE__*/React.createElement("strong", null, selectedCentre.distanceKm, " km"), " away"), /*#__PURE__*/React.createElement("span", null, "\u2022"), /*#__PURE__*/React.createElement("span", null, "\u23F1\uFE0F ", /*#__PURE__*/React.createElement("strong", null, (selectedCentre.activeQueueLength || 0) * (selectedCentre.avgProcessingMins || 10), " Mins"), " Wait"))), /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-white/20 backdrop-blur text-white flex items-center justify-center text-2xl border border-white/30 shadow"
  }, "\uD83C\uDF3E")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/80 border border-emerald-200/80 p-4 rounded-2xl"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-extrabold text-emerald-900 mb-1.5 uppercase tracking-wider"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-building-wheat text-emerald-600 mr-1.5"
  }), "Change Mandi / Procurement Centre Location ", /*#__PURE__*/React.createElement("span", {
    className: "text-red-500"
  }, "*")), /*#__PURE__*/React.createElement("select", {
    value: selectedCentre.id || '',
    onChange: handleCentreChange,
    className: "w-full px-4 py-3 bg-white border border-emerald-300 rounded-xl text-slate-900 text-sm font-bold focus:outline-none focus:border-emerald-600 shadow-sm"
  }, centresList.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.id
  }, "\uD83D\uDCCD ", c.name, " \u2014 ", c.district, " (", c.distanceKm, " km away)"))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-emerald-700 mt-1 font-semibold"
  }, "Showing nearby centres sorted for your district.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 mb-1.5"
  }, "Select Crop Type ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "*")), /*#__PURE__*/React.createElement("select", {
    value: cropType,
    onChange: e => setCropType(e.target.value),
    className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-500"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Paddy (Grade A)"
  }, "\uD83C\uDF3E Paddy (Grade A) - \u20B9 2,300/Qtl"), /*#__PURE__*/React.createElement("option", {
    value: "Paddy (Common)"
  }, "\uD83C\uDF3E Paddy (Common) - \u20B9 2,183/Qtl"), /*#__PURE__*/React.createElement("option", {
    value: "Wheat (Grade 1)"
  }, "\uD83C\uDF3E Wheat (Grade 1) - \u20B9 2,275/Qtl"), /*#__PURE__*/React.createElement("option", {
    value: "Cotton (Long Staple)"
  }, "\uD83C\uDF31 Cotton (Long Staple) - \u20B9 7,121/Qtl"), /*#__PURE__*/React.createElement("option", {
    value: "Maize (Yellow)"
  }, "\uD83C\uDF3D Maize (Yellow) - \u20B9 2,090/Qtl"), /*#__PURE__*/React.createElement("option", {
    value: "Sugarcane"
  }, "\uD83C\uDF8B Sugarcane - \u20B9 315/Qtl"), /*#__PURE__*/React.createElement("option", {
    value: "Pulses (Red Gram/Tur)"
  }, "\uD83E\uDED8 Pulses (Red Gram/Tur) - \u20B9 7,000/Qtl"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 mb-1.5"
  }, "Estimated Weight (Quintals) ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: "500",
    value: estimatedQty,
    onChange: e => setEstimatedQty(e.target.value),
    className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-500",
    required: true
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 mb-1.5"
  }, "Preferred Delivery Date ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: slotDate,
    onChange: e => setSlotDate(e.target.value),
    className: "w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm font-semibold focus:outline-none focus:border-emerald-500",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-700 mb-2"
  }, "Available Arrival Windows ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3"
  }, (slots || window.DEMO_DATA.slots || []).map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    onClick: () => !s.isFull && setSelectedSlotId(s.id),
    className: `p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between ${s.isFull ? 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed' : selectedSlotId === s.id ? 'bg-emerald-50 border-emerald-600 text-emerald-900 shadow-md ring-2 ring-emerald-500/20' : 'bg-slate-50 border-slate-200 hover:border-emerald-300 text-slate-800'}`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-extrabold"
  }, s.timeWindow), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 mt-0.5"
  }, s.bookedFarmers, " / ", s.maxFarmers, " slots reserved")), s.isFull ? /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-700"
  }, "FULL") : selectedSlotId === s.id ? /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-check text-emerald-600 text-lg"
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fa-regular fa-circle text-slate-400 text-lg"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/30 transition transform active:scale-[0.99] flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-ticket"
  }), " Confirm & Generate Slot Token"))));
};

/* --- static/js/pages/BookingConfirmation.jsx --- */
// Page 8: Booking Confirmation Component

window.BookingConfirmation = function BookingConfirmation({
  navigateTo,
  booking
}) {
  const currentBooking = booking || window.DEMO_DATA.sampleBookings[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto py-6 space-y-6 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 bg-emerald-950 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto shadow-xl animate-bounce"
  }, "\u2713"), /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-white font-serif"
  }, "Procurement Token Generated!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-300"
  }, "Your delivery slot has been registered. Present this token pass at the Mandi entry gate.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 border-2 border-emerald-500/80 rounded-3xl overflow-hidden shadow-2xl space-y-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-6 border-b border-emerald-800/80 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] uppercase font-bold tracking-wider text-emerald-400"
  }, "Official Government Procurement Pass"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-widest mt-1"
  }, currentBooking.tokenNumber)), /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center text-xl font-bold border border-emerald-700"
  }, "\uD83C\uDF3E")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-6 bg-slate-900"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Farmer Name"), /*#__PURE__*/React.createElement("strong", {
    className: "text-white text-sm font-semibold"
  }, currentBooking.farmerName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Mobile Number"), /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-400 text-sm font-mono"
  }, currentBooking.farmerPhone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Procurement Centre"), /*#__PURE__*/React.createElement("strong", {
    className: "text-white text-xs"
  }, currentBooking.centreName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Delivery Slot Window"), /*#__PURE__*/React.createElement("strong", {
    className: "text-amber-300 text-xs"
  }, currentBooking.timeWindow)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Crop & Estimated Qty"), /*#__PURE__*/React.createElement("strong", {
    className: "text-white text-xs"
  }, currentBooking.cropType, " \u2022 ", currentBooking.estimatedQty, " Qtl")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Date"), /*#__PURE__*/React.createElement("strong", {
    className: "text-teal-300 text-xs font-mono"
  }, currentBooking.slotDate))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center gap-2 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3 rounded-xl shadow-inner border-4 border-slate-900 inline-block"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "120",
    height: "120",
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "100",
    height: "100",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 10H40V40H10V10ZM20 20H30V30H20V20Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M60 10H90V40H60V10ZM70 20H80V30H70V20Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 60H40V90H10V60ZM20 70H30V80H20V70Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "50",
    y: "50",
    width: "15",
    height: "15",
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "70",
    y: "65",
    width: "20",
    height: "10",
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "80",
    width: "10",
    height: "10",
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "75",
    y: "80",
    width: "15",
    height: "10",
    fill: "black"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-400 font-mono uppercase tracking-widest"
  }, currentBooking.qrCode)), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 bg-amber-950/40 border border-amber-800/80 rounded-xl text-amber-300 text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-triangle-exclamation"
  }), " Mandi Entry Instructions"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-300 leading-relaxed"
  }, "Arrive at Gate 2 approximately 15 minutes before your time window. Show this QR pass to the entry officer.")))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('liveQueue'),
    className: "w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-bold text-sm transition shadow-lg flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-stopwatch"
  }), /*#__PURE__*/React.createElement("span", null, "Track Live Queue Position")), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    className: "w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-print"
  }), /*#__PURE__*/React.createElement("span", null, "Print / Save Pass"))));
};

/* --- static/js/pages/LiveQueueTracking.jsx --- */
// Page 9: Live Queue Tracking Component

window.LiveQueueTracking = function LiveQueueTracking({
  navigateTo,
  booking
}) {
  const currentBooking = booking || window.DEMO_DATA.sampleBookings[0];
  const [refreshing, setRefreshing] = React.useState(false);
  const [tokensAhead, setTokensAhead] = React.useState(currentBooking.tokensAhead || 2);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 600);
  };
  const estWaitMins = tokensAhead * 12;
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto space-y-6 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-white font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-stopwatch text-amber-400"
  }), " Live Procurement Queue Tracker"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-xs sm:text-sm mt-1"
  }, "Real-time status updates directly connected to Mandi gate scanners.")), /*#__PURE__*/React.createElement("button", {
    onClick: handleRefresh,
    className: `p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition ${refreshing ? 'animate-spin text-emerald-400' : ''}`,
    title: "Refresh Queue"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-rotate-right text-base"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400 uppercase font-semibold tracking-wider"
  }, "Your Token Number"), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-extrabold text-amber-400 font-mono tracking-wider mt-0.5"
  }, currentBooking.tokenNumber), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-300 mt-1"
  }, currentBooking.centreName)), /*#__PURE__*/React.createElement("div", {
    className: "px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
  }), "Queue Position: #", tokensAhead + 1)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400"
  }, "Currently Serving Dock"), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-extrabold text-emerald-400 font-mono"
  }, currentBooking.currentlyServing || 'TK-2026-104'), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500"
  }, "Quality Inspection Gate")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400"
  }, "Farmers Ahead of You"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-extrabold text-amber-400 font-mono"
  }, tokensAhead, " Farmers"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500"
  }, "In Weighing Queue")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400"
  }, "Estimated Waiting Time"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-extrabold text-teal-300 font-mono"
  }, estWaitMins, " Mins"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500"
  }, "Approx 12 mins per farmer"))), tokensAhead <= 3 && /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border border-amber-500/80 rounded-2xl flex items-start gap-3 shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-amber-900 text-amber-300 flex items-center justify-center text-xl font-bold flex-shrink-0 animate-bounce"
  }, "\u26A1"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-amber-300 text-sm"
  }, "Your Turn is Approaching!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-200 leading-relaxed"
  }, "You are among the next 3 farmers in queue for token ", currentBooking.tokenNumber, ". Please bring your vehicle near ", /*#__PURE__*/React.createElement("strong", null, "Gate 2 Unloading Dock"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('procurementStatus'),
    className: "w-full py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-timeline text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "View 5-Step Procurement Progress & Payout Slips")))));
};

/* --- static/js/pages/ProcurementStatusTracking.jsx --- */
// Page 10: Procurement Status Tracking Component

window.ProcurementStatusTracking = function ProcurementStatusTracking({
  navigateTo,
  booking
}) {
  const currentBooking = booking || window.DEMO_DATA.sampleBookings[0];
  const milestones = [{
    step: 1,
    title: 'Slot Booked & Token Issued',
    desc: `Token ${currentBooking.tokenNumber} reserved for ${currentBooking.timeWindow}`,
    done: true,
    current: false
  }, {
    step: 2,
    title: 'Gate Check-In & QR Scan',
    desc: 'Vehicle checked in at Mandi Gate 2',
    done: ['CHECKED_IN', 'QUALITY_CHECK', 'WEIGHED', 'COMPLETED'].includes(currentBooking.status),
    current: currentBooking.status === 'CHECKED_IN'
  }, {
    step: 3,
    title: 'Moisture & Quality Inspection',
    desc: currentBooking.qualityGrade || 'Grain moisture tested & certified Grade A',
    done: ['QUALITY_CHECK', 'WEIGHED', 'COMPLETED'].includes(currentBooking.status),
    current: currentBooking.status === 'QUALITY_CHECK'
  }, {
    step: 4,
    title: 'Net Weighbridge Weighing',
    desc: `Net weight verified: ${currentBooking.verifiedQty || currentBooking.estimatedQty} Quintals`,
    done: ['WEIGHED', 'COMPLETED'].includes(currentBooking.status),
    current: currentBooking.status === 'WEIGHED'
  }, {
    step: 5,
    title: 'Direct Bank Payout Issued',
    desc: `Payout amount ₹ ${currentBooking.totalPayout ? currentBooking.totalPayout.toLocaleString('en-IN') : '57,040'} sent to account`,
    done: currentBooking.status === 'COMPLETED',
    current: currentBooking.status === 'COMPLETED'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto space-y-6 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-white font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-timeline text-emerald-400"
  }), " Procurement Journey & Payout Status"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-xs sm:text-sm mt-1"
  }, "Transparent tracking from entry gate to direct bank transfer.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('liveQueue'),
    className: "px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs border border-slate-700"
  }, "Back to Live Queue")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-800 pb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400 uppercase font-semibold"
  }, "Token Reference"), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-bold text-amber-400 font-mono"
  }, currentBooking.tokenNumber)), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400 uppercase font-semibold"
  }, "Farmer"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-bold text-white"
  }, currentBooking.farmerName))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-800"
  }, milestones.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.step,
    className: "relative flex items-start gap-4 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${m.done ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-md shadow-emerald-900/50' : m.current ? 'bg-amber-500 border-amber-400 text-slate-950 animate-pulse' : 'bg-slate-800 border-slate-700 text-slate-500'}`
  }, m.done ? '✓' : m.step), /*#__PURE__*/React.createElement("div", {
    className: `flex-1 p-4 rounded-2xl border ${m.done || m.current ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-950/40 border-slate-800/80 text-slate-500'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h4", {
    className: `font-bold text-sm ${m.done ? 'text-emerald-300' : m.current ? 'text-amber-300' : 'text-slate-400'}`
  }, "Step ", m.step, ": ", m.title), m.done && /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-semibold"
  }, "VERIFIED")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300 mt-1"
  }, m.desc)))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-slate-900 to-emerald-950 border border-emerald-800/80 rounded-3xl p-6 shadow-xl space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-800 pb-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-white text-base font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-receipt text-emerald-400"
  }), " Verified Procurement Digital Receipt"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-emerald-400 font-bold"
  }, "REC-2026-8841")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 text-[11px]"
  }, "Crop Name"), /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-white mt-0.5"
  }, currentBooking.cropType)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 text-[11px]"
  }, "Verified Net Weight"), /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-emerald-300 mt-0.5"
  }, currentBooking.verifiedQty || 24.8, " Quintals")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 text-[11px]"
  }, "Govt MSP Rate"), /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-amber-300 mt-0.5"
  }, "\u20B9 ", currentBooking.mspRate || 2300, " / Qtl")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 text-[11px]"
  }, "Total Bank Payout"), /*#__PURE__*/React.createElement("div", {
    className: "font-extrabold text-emerald-400 text-sm mt-0.5"
  }, "\u20B9 ", currentBooking.totalPayout ? currentBooking.totalPayout.toLocaleString('en-IN') : '57,040')))));
};

/* --- static/js/pages/OfficerLogin.jsx --- */
// Page 11: Officer Login Component — Visual Demonstration Theme

window.OfficerLogin = function OfficerLogin({
  navigateTo,
  onLoginSuccess
}) {
  const [officerPhone, setOfficerPhone] = React.useState('9876543220');
  const [password, setPassword] = React.useState('officer123');
  const [selectedMandi, setSelectedMandi] = React.useState('Medak Main Agricultural Market Yard');
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!officerPhone || !password) {
      setErrorMsg('Please enter officer ID and password.');
      return;
    }
    setIsLoading(true);
    setErrorMsg('');
    setTimeout(() => {
      onLoginSuccess({
        name: 'Rajesh Kumar',
        role: 'OFFICER',
        mandi: selectedMandi,
        phone: officerPhone
      });
      navigateTo('officerDash');
    }, 800);
  };
  const fillOfficerDemo = () => {
    setOfficerPhone('9876543220');
    setPassword('officer123');
    setSelectedMandi('Medak Main Agricultural Market Yard');
    setErrorMsg('');
  };
  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: '1.5px solid #e2e8f0',
    borderRadius: 10,
    fontFamily: 'Inter,sans-serif',
    fontSize: 14,
    outline: 'none',
    transition: 'all 0.2s',
    background: 'white',
    color: '#0f172a'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      margin: '0 auto',
      padding: '32px 0 48px',
      animation: 'fadeIn 0.4s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#d97706,#f59e0b)',
      borderRadius: '24px 24px 0 0',
      padding: '32px 32px 48px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -30,
      right: -30,
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 68,
      height: 68,
      borderRadius: 18,
      background: 'rgba(255,255,255,0.2)',
      border: '2px solid rgba(255,255,255,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 32,
      margin: '0 auto 14px',
      backdropFilter: 'blur(4px)',
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
    }
  }, "\uD83D\uDC6E"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 26,
      color: 'white',
      margin: '0 0 6px',
      position: 'relative',
      zIndex: 1
    }
  }, "Mandi Officer Portal"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 13,
      position: 'relative',
      zIndex: 1
    }
  }, "Authorized Mandi Inspector & Gate Controller Login")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: '0 0 24px 24px',
      padding: '32px',
      boxShadow: '0 20px 48px rgba(245,158,11,0.15)',
      border: '1px solid rgba(245,158,11,0.15)',
      borderTop: 'none'
    }
  }, errorMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 14px',
      marginBottom: 20,
      background: '#fef2f2',
      border: '1.5px solid #fecaca',
      borderRadius: 10,
      color: '#dc2626',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation"
  }), /*#__PURE__*/React.createElement("span", null, errorMsg)), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 6,
      color: '#334155'
    }
  }, "Assigned Procurement Yard ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d97706'
    }
  }, "*")), /*#__PURE__*/React.createElement("select", {
    value: selectedMandi,
    onChange: e => setSelectedMandi(e.target.value),
    style: {
      ...inputStyle,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "Medak Main Agricultural Market Yard"
  }, "Medak Main Agricultural Market Yard"), /*#__PURE__*/React.createElement("option", {
    value: "Gajwel Integrated Grain Hub"
  }, "Gajwel Integrated Grain Hub"), /*#__PURE__*/React.createElement("option", {
    value: "Siddipet Cotton & Grain Center"
  }, "Siddipet Cotton & Grain Center"), /*#__PURE__*/React.createElement("option", {
    value: "Sangareddy District Yard"
  }, "Sangareddy District Yard"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 6,
      color: '#334155'
    }
  }, "Official Phone / Officer ID ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d97706'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: officerPhone,
    onChange: e => setOfficerPhone(e.target.value),
    placeholder: "Officer ID or phone",
    style: inputStyle,
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#d97706',
      boxShadow: '0 0 0 3px rgba(217,119,6,0.12)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      borderColor: '#e2e8f0',
      boxShadow: 'none'
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 6,
      color: '#334155'
    }
  }, "Password ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d97706'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: showPassword ? "text" : "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "Enter officer password",
    style: {
      ...inputStyle,
      paddingRight: 44
    },
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#d97706',
      boxShadow: '0 0 0 3px rgba(217,119,6,0.12)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      borderColor: '#e2e8f0',
      boxShadow: 'none'
    }),
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowPassword(!showPassword),
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      color: '#94a3b8',
      fontSize: 15,
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#fffbeb,#fef3c7)',
      border: '1.5px solid rgba(217,119,6,0.25)',
      borderRadius: 10,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: '#92400e',
      marginBottom: 8,
      letterSpacing: '.04em'
    }
  }, "\uD83C\uDFAF QUICK DEMO CREDENTIALS"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: fillOfficerDemo,
    style: {
      width: '100%',
      background: 'white',
      border: '1.5px solid rgba(217,119,6,0.3)',
      borderRadius: 8,
      padding: '8px 12px',
      cursor: 'pointer',
      display: 'flex',
      itemsCenter: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      background: '#fffbeb',
      borderColor: '#d97706'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      background: 'white',
      borderColor: 'rgba(217,119,6,0.3)'
    })
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#92400e'
    }
  }, "\uD83D\uDC6E Demo Officer (Rajesh Kumar)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#d97706',
      fontFamily: 'monospace',
      fontWeight: 700
    }
  }, "9876543220"))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: isLoading,
    style: {
      background: isLoading ? '#94a3b8' : 'linear-gradient(135deg,#d97706,#f59e0b)',
      color: 'white',
      fontWeight: 800,
      fontSize: 15,
      padding: '14px',
      borderRadius: 12,
      border: 'none',
      cursor: isLoading ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      boxShadow: isLoading ? 'none' : '0 6px 20px rgba(217,119,6,0.4)',
      transition: 'all 0.2s',
      marginTop: 4
    }
  }, isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-spinner fa-spin"
  }), "Authenticating Officer\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-clipboard-check"
  }), "Login to Officer Dashboard")))));
};

/* --- static/js/pages/OfficerDashboard.jsx --- */
// Page 12: Officer Dashboard Component — Visual Demonstration Theme with Dynamic Farmer Token Lookup

window.OfficerDashboard = function OfficerDashboard({
  navigateTo,
  bookings,
  onUpdateBookingStatus
}) {
  const initialBookings = bookings || window.DEMO_DATA && window.DEMO_DATA.sampleBookings || [];
  const [queue, setQueue] = React.useState(initialBookings);
  const [searchToken, setSearchToken] = React.useState('');
  const [selectedToken, setSelectedToken] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [nextStatus, setNextStatus] = React.useState('QUALITY_CHECK');
  const [verifiedQty, setVerifiedQty] = React.useState('');
  const [qualityGrade, setQualityGrade] = React.useState('Grade A (Moisture 13.2%)');

  // Filtered queue based on token search
  const filteredQueue = React.useMemo(() => {
    if (!searchToken.trim()) return queue;
    const term = searchToken.toLowerCase().trim();
    return queue.filter(b => b.tokenNumber.toLowerCase().includes(term) || b.farmerName.toLowerCase().includes(term) || b.farmerPhone && b.farmerPhone.includes(term));
  }, [queue, searchToken]);

  // Exact token match if user typed a token number
  const searchedTokenMatch = React.useMemo(() => {
    if (!searchToken.trim()) return null;
    const term = searchToken.toLowerCase().trim();
    return queue.find(b => b.tokenNumber.toLowerCase() === term || b.tokenNumber.toLowerCase().includes(term));
  }, [queue, searchToken]);
  const openProcessModal = b => {
    setSelectedToken(b);
    setVerifiedQty(b.verifiedQty || b.estimatedQty || 25);
    setQualityGrade(b.qualityGrade || 'Grade A (Moisture 13.2%)');
    if (b.status === 'BOOKED') setNextStatus('CHECKED_IN');else if (b.status === 'CHECKED_IN') setNextStatus('QUALITY_CHECK');else if (b.status === 'QUALITY_CHECK') setNextStatus('WEIGHED');else setNextStatus('COMPLETED');
    setIsModalOpen(true);
  };
  const handleAdvanceTokenSubmit = e => {
    e.preventDefault();
    if (!selectedToken) return;
    const rate = selectedToken.mspRate || 2300;
    const finalQty = Number(verifiedQty) || selectedToken.estimatedQty;
    const calcPayout = finalQty * rate;
    const updated = queue.map(item => item.id === selectedToken.id ? {
      ...item,
      status: nextStatus,
      verifiedQty: finalQty,
      qualityGrade,
      totalPayout: calcPayout
    } : item);
    setQueue(updated);
    if (onUpdateBookingStatus) onUpdateBookingStatus(selectedToken.tokenNumber, nextStatus, finalQty, qualityGrade, calcPayout);
    setIsModalOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-clipboard-check text-amber-500"
  }), " Mandi Officer Operations Console"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1"
  }, "Official Gate Inspection, Token Lookup & Weighbridge Verification Portal")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 w-fit"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"
  }), " Mandi Gate Operational")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-3xl shadow-md space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1 w-full"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-qrcode absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: searchToken,
    onChange: e => setSearchToken(e.target.value),
    placeholder: "Scan QR Code or enter token # (e.g. TK-2026-104, TK-2026-105, TK-2026-106)",
    className: "w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white text-sm focus:outline-none focus:border-amber-500 font-mono"
  }), searchToken && /*#__PURE__*/React.createElement("button", {
    onClick: () => setSearchToken(''),
    className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
  }, "Clear")), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (!searchToken) setSearchToken('TK-2026-105');
    },
    className: "w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm rounded-2xl shadow-lg transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass"
  }), /*#__PURE__*/React.createElement("span", null, "Lookup Token"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap pt-1 border-t border-slate-100 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1"
  }, "Sample Tokens:"), [{
    token: 'TK-2026-104',
    name: 'K. Rama Rao'
  }, {
    token: 'TK-2026-105',
    name: 'Ramesh Patel'
  }, {
    token: 'TK-2026-106',
    name: 'S. Vijayalakshmi'
  }, {
    token: 'TK-2026-107',
    name: 'P. Venkateswarlu'
  }, {
    token: 'TK-2026-108',
    name: 'M. Tirupathamma'
  }].map(t => /*#__PURE__*/React.createElement("button", {
    key: t.token,
    onClick: () => setSearchToken(t.token),
    className: `px-3 py-1 rounded-xl text-xs font-semibold font-mono border transition flex items-center gap-1.5 ${searchToken === t.token ? 'bg-amber-500 text-white border-amber-600 shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-slate-700'}`
  }, /*#__PURE__*/React.createElement("span", null, t.token), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] opacity-75 font-sans"
  }, "(", t.name, ")"))))), searchToken.trim() && /*#__PURE__*/React.createElement("div", {
    className: "animate-fade-in"
  }, searchedTokenMatch ? /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-blue-500/10 border-2 border-amber-500/40 rounded-3xl p-6 shadow-xl space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-amber-500 text-white font-extrabold flex items-center justify-center text-xl shadow-lg"
  }, "\uD83C\uDF9F\uFE0F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider"
  }, "Scanned / Looked Up Token"), /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-300 dark:border-emerald-800"
  }, searchedTokenMatch.status)), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black font-mono text-slate-900 dark:text-white"
  }, searchedTokenMatch.tokenNumber))), /*#__PURE__*/React.createElement("button", {
    onClick: () => openProcessModal(searchedTokenMatch),
    className: "px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-pen-to-square"
  }), /*#__PURE__*/React.createElement("span", null, "Process / Advance Token Status"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 font-semibold block text-[10px] uppercase"
  }, "Farmer Name"), /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 dark:text-white text-sm font-serif"
  }, searchedTokenMatch.farmerName)), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 font-semibold block text-[10px] uppercase"
  }, "Contact & Location"), /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 dark:text-white text-xs"
  }, searchedTokenMatch.farmerPhone), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500 block truncate"
  }, searchedTokenMatch.farmerVillage)), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 font-semibold block text-[10px] uppercase"
  }, "Crop Type"), /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 dark:text-white text-xs"
  }, searchedTokenMatch.cropType)), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 font-semibold block text-[10px] uppercase"
  }, "Est / Verified Weight"), /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-600 dark:text-emerald-400 text-sm font-mono"
  }, searchedTokenMatch.verifiedQty || searchedTokenMatch.estimatedQty, " Qtl")))) : /*#__PURE__*/React.createElement("div", {
    className: "bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 p-4 rounded-2xl text-center text-red-700 dark:text-red-300 text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation mr-1"
  }), " No matching token record found for \"", searchToken, "\". Please verify the token number.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-900 dark:text-white text-lg font-serif"
  }, "Mandi Farmers Unloading Queue"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold"
  }, filteredQueue.length, " Farmers Listed")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left text-xs text-slate-700 dark:text-slate-300"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-100 dark:bg-slate-950 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-800"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Token #"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Farmer Details"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Crop Type"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Est / Verified Weight"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4"
  }, "Current Status"), /*#__PURE__*/React.createElement("th", {
    className: "py-3.5 px-4 text-right"
  }, "Action"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-slate-100 dark:divide-slate-800/60 font-medium"
  }, filteredQueue.map(item => /*#__PURE__*/React.createElement("tr", {
    key: item.id,
    className: "hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
  }, /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4 font-mono font-extrabold text-amber-600 dark:text-amber-400 text-sm"
  }, item.tokenNumber), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-slate-900 dark:text-white text-sm"
  }, item.farmerName), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 dark:text-slate-400"
  }, item.farmerVillage, " \u2022 ", item.farmerPhone)), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4 text-slate-800 dark:text-slate-200"
  }, item.cropType), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4 font-mono"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-900 dark:text-white font-bold"
  }, item.verifiedQty || item.estimatedQty, " Qtl"), item.verifiedQty && /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-emerald-600 dark:text-emerald-400 ml-1 block"
  }, "(Verified)")), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: `px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border ${item.status === 'COMPLETED' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800' : item.status === 'WEIGHED' ? 'bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-800' : item.status === 'QUALITY_CHECK' ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'}`
  }, item.status)), /*#__PURE__*/React.createElement("td", {
    className: "py-3.5 px-4 text-right"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openProcessModal(item),
    className: "px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold transition text-xs shadow-sm inline-flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", null, "Process"), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right text-[10px]"
  }))))))))), isModalOpen && selectedToken && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl text-slate-900 dark:text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold"
  }, "Verification & Inspection Workflow"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-black font-mono text-amber-600 dark:text-amber-400"
  }, selectedToken.tokenNumber)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsModalOpen(false),
    className: "p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark text-lg"
  }))), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleAdvanceTokenSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 dark:text-slate-400"
  }, "Farmer Name:"), " ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900 dark:text-white text-sm font-serif"
  }, selectedToken.farmerName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 dark:text-slate-400"
  }, "Phone & Location:"), " ", /*#__PURE__*/React.createElement("strong", null, selectedToken.farmerPhone, " \xB7 ", selectedToken.farmerVillage)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500 dark:text-slate-400"
  }, "Crop Category:"), " ", /*#__PURE__*/React.createElement("strong", null, selectedToken.cropType))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
  }, "Next Status Stage"), /*#__PURE__*/React.createElement("select", {
    value: nextStatus,
    onChange: e => setNextStatus(e.target.value),
    className: "w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500 font-semibold"
  }, /*#__PURE__*/React.createElement("option", {
    value: "CHECKED_IN"
  }, "Gate Check-In Verified"), /*#__PURE__*/React.createElement("option", {
    value: "QUALITY_CHECK"
  }, "Quality Inspection Approved"), /*#__PURE__*/React.createElement("option", {
    value: "WEIGHED"
  }, "Net Weighbridge Recorded"), /*#__PURE__*/React.createElement("option", {
    value: "COMPLETED"
  }, "Procurement Completed & Direct Payment Triggered"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
  }, "Quality Grade & Moisture Content"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: qualityGrade,
    onChange: e => setQualityGrade(e.target.value),
    className: "w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
  }, "Verified Net Weight (Quintals)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.1",
    value: verifiedQty,
    onChange: e => setVerifiedQty(e.target.value),
    className: "w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500 font-mono font-bold",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 flex items-center justify-end gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsModalOpen(false),
    className: "px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold transition shadow"
  }, "Update & Save Status"))))));
};

/* --- static/js/pages/AdminLogin.jsx --- */
// Page: Admin Login — Visual Demonstration Theme

window.AdminLogin = function AdminLogin({
  navigateTo,
  onLoginSuccess
}) {
  const [adminEmail, setAdminEmail] = React.useState('admin.sih@telangana.gov.in');
  const [password, setPassword] = React.useState('admin2026');
  const [department, setDepartment] = React.useState('Department of Agriculture & Marketing');
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!adminEmail || !password) {
      setErrorMsg('Please fill in all credentials.');
      return;
    }
    setIsLoading(true);
    setErrorMsg('');
    setTimeout(() => {
      onLoginSuccess({
        name: 'Dr. V. K. Reddy (Director)',
        role: 'ADMIN',
        department: department,
        email: adminEmail
      });
      navigateTo('adminDash');
    }, 800);
  };
  const fillAdminDemo = () => {
    setAdminEmail('admin.sih@telangana.gov.in');
    setPassword('admin2026');
    setDepartment('Department of Agriculture & Marketing');
    setErrorMsg('');
  };
  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: '1.5px solid #e2e8f0',
    borderRadius: 10,
    fontFamily: 'Inter,sans-serif',
    fontSize: 14,
    outline: 'none',
    transition: 'all 0.2s',
    background: 'white',
    color: '#0f172a'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      margin: '0 auto',
      padding: '32px 0 48px',
      animation: 'fadeIn 0.4s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#1e40af,#3b82f6)',
      borderRadius: '24px 24px 0 0',
      padding: '32px 32px 48px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -30,
      right: -30,
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 68,
      height: 68,
      borderRadius: 18,
      background: 'rgba(255,255,255,0.2)',
      border: '2px solid rgba(255,255,255,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 32,
      margin: '0 auto 14px',
      backdropFilter: 'blur(4px)',
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
    }
  }, "\uD83D\uDCCA"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'Outfit,sans-serif',
      fontWeight: 900,
      fontSize: 26,
      color: 'white',
      margin: '0 0 6px',
      position: 'relative',
      zIndex: 1
    }
  }, "State Admin Portal"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 13,
      position: 'relative',
      zIndex: 1
    }
  }, "State Agricultural Procurement Analytics & Governance Console")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: '0 0 24px 24px',
      padding: '32px',
      boxShadow: '0 20px 48px rgba(59,130,246,0.15)',
      border: '1px solid rgba(59,130,246,0.15)',
      borderTop: 'none'
    }
  }, errorMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 14px',
      marginBottom: 20,
      background: '#fef2f2',
      border: '1.5px solid #fecaca',
      borderRadius: 10,
      color: '#dc2626',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-exclamation"
  }), /*#__PURE__*/React.createElement("span", null, errorMsg)), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 6,
      color: '#334155'
    }
  }, "State Department / Authority ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#2563eb'
    }
  }, "*")), /*#__PURE__*/React.createElement("select", {
    value: department,
    onChange: e => setDepartment(e.target.value),
    style: {
      ...inputStyle,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "Department of Agriculture & Marketing"
  }, "Department of Agriculture & Marketing"), /*#__PURE__*/React.createElement("option", {
    value: "Telangana State Civil Supplies Corporation"
  }, "Telangana State Civil Supplies Corporation"), /*#__PURE__*/React.createElement("option", {
    value: "FCI District Monitoring Board"
  }, "FCI District Monitoring Board"), /*#__PURE__*/React.createElement("option", {
    value: "State Procurement Task Force"
  }, "State Procurement Task Force"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 6,
      color: '#334155'
    }
  }, "Official Admin ID / Email ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#2563eb'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: adminEmail,
    onChange: e => setAdminEmail(e.target.value),
    placeholder: "admin@gov.in",
    style: inputStyle,
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#2563eb',
      boxShadow: '0 0 0 3px rgba(37,99,235,0.12)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      borderColor: '#e2e8f0',
      boxShadow: 'none'
    }),
    required: true
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 6,
      color: '#334155'
    }
  }, "Admin Password ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#2563eb'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: showPassword ? "text" : "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "Enter admin password",
    style: {
      ...inputStyle,
      paddingRight: 44
    },
    onFocus: e => Object.assign(e.target.style, {
      borderColor: '#2563eb',
      boxShadow: '0 0 0 3px rgba(37,99,235,0.12)'
    }),
    onBlur: e => Object.assign(e.target.style, {
      borderColor: '#e2e8f0',
      boxShadow: 'none'
    }),
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowPassword(!showPassword),
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      color: '#94a3b8',
      fontSize: 15,
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
      border: '1.5px solid rgba(37,99,235,0.25)',
      borderRadius: 10,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: '#1e40af',
      marginBottom: 8,
      letterSpacing: '.04em'
    }
  }, "\uD83C\uDFAF QUICK DEMO CREDENTIALS"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: fillAdminDemo,
    style: {
      width: '100%',
      background: 'white',
      border: '1.5px solid rgba(37,99,235,0.3)',
      borderRadius: 8,
      padding: '8px 12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.2s'
    },
    onMouseOver: e => Object.assign(e.currentTarget.style, {
      background: '#eff6ff',
      borderColor: '#2563eb'
    }),
    onMouseOut: e => Object.assign(e.currentTarget.style, {
      background: 'white',
      borderColor: 'rgba(37,99,235,0.3)'
    })
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#1e40af'
    }
  }, "\uD83D\uDCCA Demo State Admin (Dr. V. K. Reddy)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#2563eb',
      fontFamily: 'monospace',
      fontWeight: 700
    }
  }, "admin.sih@telangana.gov.in"))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: isLoading,
    style: {
      background: isLoading ? '#94a3b8' : 'linear-gradient(135deg,#1e40af,#3b82f6)',
      color: 'white',
      fontWeight: 800,
      fontSize: 15,
      padding: '14px',
      borderRadius: 12,
      border: 'none',
      cursor: isLoading ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      boxShadow: isLoading ? 'none' : '0 6px 20px rgba(37,99,235,0.4)',
      transition: 'all 0.2s',
      marginTop: 4
    }
  }, isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-spinner fa-spin"
  }), "Authenticating Admin\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chart-line"
  }), "Login to Admin Analytics Dashboard")))));
};

/* --- static/js/pages/AdminDashboard.jsx --- */
// Page 13: Admin Dashboard Component — Visual Demonstration Theme

window.AdminDashboard = function AdminDashboard({
  navigateTo
}) {
  const defaultAnalytics = {
    totalRegisteredFarmers: 28450,
    activeCentres: 34,
    totalProcuredQuintals: 382500,
    totalPayoutDistributedCr: 87.65,
    districtUtilization: [{
      name: "Guntur APMC Yard",
      capacity: 9500,
      currentLoad: 4200,
      pct: 44
    }, {
      name: "Vijayawada NTR Hub",
      capacity: 8000,
      currentLoad: 3100,
      pct: 38
    }, {
      name: "Tirupati Farmer Yard",
      capacity: 6500,
      currentLoad: 2800,
      pct: 43
    }, {
      name: "Kakinada Port Yard",
      capacity: 10000,
      currentLoad: 6100,
      pct: 61
    }, {
      name: "Visakhapatnam Yard",
      capacity: 7500,
      currentLoad: 3400,
      pct: 45
    }, {
      name: "Ananthapuramu Hub",
      capacity: 7000,
      currentLoad: 4100,
      pct: 58
    }],
    bottlenecks: [{
      step: "Gate Check-In & Scanning",
      count: 42,
      percentage: 15,
      status: "Normal Flow"
    }, {
      step: "Quality Inspection Lab",
      count: 98,
      percentage: 35,
      status: "Moderate Queue"
    }, {
      step: "Net Weighbridge Scale",
      count: 112,
      percentage: 40,
      status: "High Delay"
    }, {
      step: "Direct Bank Transfer Payout",
      count: 28,
      percentage: 10,
      status: "Fast Flow"
    }]
  };
  const rawAnalytics = window.DEMO_DATA && window.DEMO_DATA.adminAnalytics || defaultAnalytics;
  const analytics = {
    totalRegisteredFarmers: rawAnalytics.totalRegisteredFarmers || defaultAnalytics.totalRegisteredFarmers,
    activeCentres: rawAnalytics.activeCentres || defaultAnalytics.activeCentres,
    totalProcuredQuintals: rawAnalytics.totalProcuredQuintals || defaultAnalytics.totalProcuredQuintals,
    totalPayoutDistributedCr: rawAnalytics.totalPayoutDistributedCr || defaultAnalytics.totalPayoutDistributedCr,
    districtUtilization: rawAnalytics.districtUtilization || defaultAnalytics.districtUtilization,
    bottlenecks: rawAnalytics.bottlenecks || defaultAnalytics.bottlenecks
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-8 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chart-pie text-blue-600 dark:text-blue-400"
  }), " State Agricultural Procurement Analytics"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1"
  }, "Real-time monitoring of grain tonnage, mandi capacity utilization, and queue bottlenecks across districts.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-blue-500 animate-pulse"
  }), " Department of Agriculture HQ"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 lg:grid-cols-4 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 dark:text-slate-400 font-semibold"
  }, "Registered Farmers"), /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm border border-emerald-200 dark:border-emerald-800"
  }, "\uD83D\uDC65")), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif"
  }, (analytics.totalRegisteredFarmers || 0).toLocaleString('en-IN')), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold"
  }, "+12% from last season")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 dark:text-slate-400 font-semibold"
  }, "Active Centres"), /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm border border-blue-200 dark:border-blue-800"
  }, "\uD83C\uDFDB\uFE0F")), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-serif"
  }, analytics.activeCentres, " Yards"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-blue-600 dark:text-blue-400 font-semibold"
  }, "100% Operational")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 dark:text-slate-400 font-semibold"
  }, "Procured Volume"), /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm border border-amber-200 dark:border-amber-800"
  }, "\uD83C\uDF3E")), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-serif"
  }, (analytics.totalProcuredQuintals || 0).toLocaleString('en-IN'), " Qtl"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-amber-600 dark:text-amber-400 font-semibold"
  }, "Kharif Season 2026")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 dark:text-slate-400 font-semibold"
  }, "Direct Bank Payouts"), /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center text-sm border border-teal-200 dark:border-teal-800"
  }, "\uD83D\uDCB0")), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-serif"
  }, "\u20B9 ", analytics.totalPayoutDistributedCr, " Cr"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-teal-600 dark:text-teal-400 font-semibold"
  }, "Direct DBT Transfers"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-900 dark:text-white text-base font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chart-simple text-emerald-600 dark:text-emerald-400"
  }), " Mandi Capacity Utilization"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Real-time Load %")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 pt-1"
  }, analytics.districtUtilization.map((d, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-xs font-semibold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-900 dark:text-white"
  }, d.name), /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-slate-600 dark:text-slate-300"
  }, d.currentLoad, " / ", d.capacity, " Qtl (", d.pct, "%)")), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: `h-full rounded-full transition-all ${d.pct > 80 ? 'bg-red-500' : d.pct > 50 ? 'bg-amber-400' : 'bg-emerald-500'}`,
    style: {
      width: `${d.pct}%`
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-md space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-900 dark:text-white text-base font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-filter text-amber-500"
  }), " Mandi Bottleneck Stage Analysis"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 dark:text-slate-400"
  }, "Current Queue Split")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 pt-1"
  }, analytics.bottlenecks.map((b, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "p-3.5 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 rounded-2xl flex items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold text-slate-900 dark:text-white"
  }, b.step), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5"
  }, b.count, " Farmers currently at stage")), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-extrabold font-mono text-amber-600 dark:text-amber-400"
  }, b.percentage, "%"), /*#__PURE__*/React.createElement("span", {
    className: `block text-[10px] font-semibold ${(b.status || '').includes('High') ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}`
  }, b.status))))))));
};

/* --- static/js/App.jsx --- */
// KisanSeva Main React App Component
// Multi-Role Auth-gated: Seperate Logins for Farmer, Officer, and Admin on initial load

function App() {
  // ── AUTH GATE STATE ───────────────────────────────────────
  // null = not logged in → show multi-role auth screen first
  const [user, setUser] = React.useState(null);
  const [userRole, setUserRole] = React.useState(null);

  // Role portal tab selection: 'farmer' | 'officer' | 'admin'
  const [activeRoleTab, setActiveRoleTab] = React.useState('farmer');

  // Sub-view for farmer ('login' | 'register')
  const [farmerSubView, setFarmerSubView] = React.useState('login');

  // ── NAVIGATION & PAGE STATE ───────────────────────────────
  const [currentPage, setCurrentPage] = React.useState('farmerDash');

  // ── APPLICATION DATA ──────────────────────────────────────
  const [centres] = React.useState(window.DEMO_DATA && window.DEMO_DATA.centres || []);
  const [selectedCentre, setSelectedCentre] = React.useState(window.DEMO_DATA && window.DEMO_DATA.centres && window.DEMO_DATA.centres[0] || {});
  const [slots] = React.useState(window.DEMO_DATA && window.DEMO_DATA.slots || [{
    id: 101,
    timeWindow: "08:00 AM - 10:00 AM",
    maxFarmers: 15,
    bookedFarmers: 6,
    isFull: false
  }, {
    id: 102,
    timeWindow: "10:00 AM - 12:00 PM",
    maxFarmers: 15,
    bookedFarmers: 12,
    isFull: false
  }]);
  const [bookings, setBookings] = React.useState(window.DEMO_DATA && window.DEMO_DATA.sampleBookings || []);
  const [activeBooking, setActiveBooking] = React.useState(window.DEMO_DATA && window.DEMO_DATA.sampleBookings && window.DEMO_DATA.sampleBookings[0] || null);

  // ── NOTIFICATIONS ─────────────────────────────────────────
  const [notifications, setNotifications] = React.useState(window.DEMO_DATA && window.DEMO_DATA.notifications || []);
  const [isNotifOpen, setIsNotifOpen] = React.useState(false);
  const unreadNotifCount = (notifications || []).filter(n => !n.read).length;

  // ── HANDLERS ──────────────────────────────────────────────
  const navigateTo = pageName => {
    setCurrentPage(pageName);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleLoginSuccess = userData => {
    setUser(userData);
    setUserRole(userData.role || 'FARMER');

    // Auto-select nearest matching mandi centre based on farmer's district
    if (userData.district && centres && centres.length > 0) {
      const match = centres.find(c => c.district.toLowerCase() === userData.district.toLowerCase() || userData.district.toLowerCase().includes(c.district.toLowerCase()));
      if (match) {
        setSelectedCentre(match);
      }
    }

    // Route to role-appropriate dashboard
    if (userData.role === 'OFFICER') {
      setCurrentPage('officerDash');
    } else if (userData.role === 'ADMIN') {
      setCurrentPage('adminDash');
    } else {
      setCurrentPage('farmerDash');
    }
  };
  const handleLogout = () => {
    setUser(null);
    setUserRole(null);
    setActiveRoleTab('farmer');
    setFarmerSubView('login');
  };
  const handleCreateBooking = newBooking => {
    setBookings([newBooking, ...bookings]);
    setActiveBooking(newBooking);
    const newNotif = {
      id: Date.now(),
      farmerId: newBooking.farmerPhone,
      title: "🎟️ Slot Token Booked",
      message: `Token ${newBooking.tokenNumber} confirmed for ${newBooking.timeWindow}.`,
      timestamp: "Just now",
      type: "SUCCESS",
      read: false
    };
    setNotifications([newNotif, ...notifications]);
  };
  const handleUpdateBookingStatus = (tokenNum, nextStatus, verifiedQty, qualityGrade, calcPayout) => {
    setBookings(prev => prev.map(b => {
      if (b.tokenNumber === tokenNum) {
        const updated = {
          ...b,
          status: nextStatus,
          verifiedQty: verifiedQty || b.verifiedQty,
          qualityGrade: qualityGrade || b.qualityGrade,
          totalPayout: calcPayout || b.totalPayout
        };
        if (activeBooking && activeBooking.tokenNumber === tokenNum) {
          setActiveBooking(updated);
        }
        return updated;
      }
      return b;
    }));
  };
  const markAllNotifsRead = () => {
    setNotifications(prev => prev.map(n => ({
      ...n,
      read: true
    })));
  };

  // ══════════════════════════════════════════════════════════
  // ── MULTI-ROLE AUTH GATE SCREEN ───────────────────────────
  // ══════════════════════════════════════════════════════════
  if (!user) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg,#f0fdf4 0%,#ecfdf5 40%,#e0f2fe 100%)',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `
          radial-gradient(circle at 15% 20%, rgba(5,150,105,0.08) 0%, transparent 50%),
          radial-gradient(circle at 85% 80%, rgba(59,130,246,0.07) 0%, transparent 50%)
        `
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        paddingTop: 32,
        paddingBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        background: 'white',
        padding: '10px 24px',
        borderRadius: 99,
        boxShadow: '0 4px 20px rgba(5,150,105,0.12)',
        border: '1px solid rgba(5,150,105,0.18)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 10,
        background: 'linear-gradient(135deg,#059669,#0d9488)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
      }
    }, "\uD83C\uDF3E"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'Outfit,sans-serif',
        fontWeight: 900,
        fontSize: 20,
        color: '#0f172a'
      }
    }, "Kisan", /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#059669'
      }
    }, "Seva"))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 10,
        color: '#64748b',
        margin: 0,
        fontFamily: 'Inter,sans-serif'
      }
    }, "Intelligent Agricultural Procurement Platform")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 10,
        marginTop: 20,
        marginBottom: 8,
        padding: '0 16px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setActiveRoleTab('farmer');
        setFarmerSubView('login');
      },
      style: {
        padding: '12px 22px',
        borderRadius: 16,
        fontFamily: 'Inter,sans-serif',
        fontWeight: 800,
        fontSize: 14,
        cursor: 'pointer',
        transition: 'all 0.25s',
        border: activeRoleTab === 'farmer' ? '2px solid #059669' : '1.5px solid #cbd5e1',
        background: activeRoleTab === 'farmer' ? 'linear-gradient(135deg,#059669,#0d9488)' : 'white',
        color: activeRoleTab === 'farmer' ? 'white' : '#334155',
        boxShadow: activeRoleTab === 'farmer' ? '0 8px 24px rgba(5,150,105,0.35)' : '0 2px 8px rgba(0,0,0,0.04)',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\uD83C\uDF3E"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", null, "Farmer Portal"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 500,
        opacity: 0.85
      }
    }, "Slot Booking & Receipts"))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setActiveRoleTab('officer'),
      style: {
        padding: '12px 22px',
        borderRadius: 16,
        fontFamily: 'Inter,sans-serif',
        fontWeight: 800,
        fontSize: 14,
        cursor: 'pointer',
        transition: 'all 0.25s',
        border: activeRoleTab === 'officer' ? '2px solid #d97706' : '1.5px solid #cbd5e1',
        background: activeRoleTab === 'officer' ? 'linear-gradient(135deg,#d97706,#f59e0b)' : 'white',
        color: activeRoleTab === 'officer' ? 'white' : '#334155',
        boxShadow: activeRoleTab === 'officer' ? '0 8px 24px rgba(217,119,6,0.35)' : '0 2px 8px rgba(0,0,0,0.04)',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\uD83D\uDC6E"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", null, "Officer Portal"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 500,
        opacity: 0.85
      }
    }, "Gate & Moisture Verification"))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setActiveRoleTab('admin'),
      style: {
        padding: '12px 22px',
        borderRadius: 16,
        fontFamily: 'Inter,sans-serif',
        fontWeight: 800,
        fontSize: 14,
        cursor: 'pointer',
        transition: 'all 0.25s',
        border: activeRoleTab === 'admin' ? '2px solid #2563eb' : '1.5px solid #cbd5e1',
        background: activeRoleTab === 'admin' ? 'linear-gradient(135deg,#1e40af,#3b82f6)' : 'white',
        color: activeRoleTab === 'admin' ? 'white' : '#334155',
        boxShadow: activeRoleTab === 'admin' ? '0 8px 24px rgba(37,99,235,0.35)' : '0 2px 8px rgba(0,0,0,0.04)',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\uD83D\uDCCA"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", null, "State Admin Portal"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 500,
        opacity: 0.85
      }
    }, "Governance & Analytics")))), activeRoleTab === 'farmer' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 8,
        marginTop: 8,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setFarmerSubView('login'),
      style: {
        padding: '6px 16px',
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 700,
        cursor: 'pointer',
        border: 'none',
        background: farmerSubView === 'login' ? '#059669' : '#e2e8f0',
        color: farmerSubView === 'login' ? 'white' : '#475569',
        transition: 'all 0.2s'
      }
    }, "\uD83D\uDD11 Login"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setFarmerSubView('register'),
      style: {
        padding: '6px 16px',
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 700,
        cursor: 'pointer',
        border: 'none',
        background: farmerSubView === 'register' ? '#059669' : '#e2e8f0',
        color: farmerSubView === 'register' ? 'white' : '#475569',
        transition: 'all 0.2s'
      }
    }, "\uD83C\uDF31 Register New Account")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, activeRoleTab === 'farmer' && farmerSubView === 'login' && /*#__PURE__*/React.createElement(window.FarmerLogin, {
      navigateTo: page => {
        if (page === 'farmerRegister') setFarmerSubView('register');else if (page === 'officerLogin') setActiveRoleTab('officer');
      },
      onLoginSuccess: handleLoginSuccess
    }), activeRoleTab === 'farmer' && farmerSubView === 'register' && /*#__PURE__*/React.createElement(window.FarmerRegister, {
      navigateTo: page => {
        if (page === 'farmerLogin') setFarmerSubView('login');
      },
      onLoginSuccess: handleLoginSuccess
    }), activeRoleTab === 'officer' && /*#__PURE__*/React.createElement(window.OfficerLogin, {
      navigateTo: navigateTo,
      onLoginSuccess: handleLoginSuccess
    }), activeRoleTab === 'admin' && (window.AdminLogin ? /*#__PURE__*/React.createElement(window.AdminLogin, {
      navigateTo: navigateTo,
      onLoginSuccess: handleLoginSuccess
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 32,
        textAlign: 'center',
        background: 'white',
        borderRadius: 24,
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-notch fa-spin",
      style: {
        fontSize: 24,
        color: '#2563eb',
        marginBottom: 8
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14,
        color: '#1e293b'
      }
    }, "Loading Admin Portal\u2026")))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '16px 24px 24px',
        fontSize: 11,
        color: '#94a3b8',
        fontFamily: 'Inter,sans-serif'
      }
    }, "\xA9 2026 KisanSeva \xB7 Intelligent Agricultural Procurement Platform \xB7 Department of Agriculture"));
  }

  // ══════════════════════════════════════════════════════════
  // ── MAIN APP (shown after successful authentication) ──────
  // ══════════════════════════════════════════════════════════
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-green-50 text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white flex flex-col"
  }, /*#__PURE__*/React.createElement(window.Navbar, {
    currentPage: currentPage,
    navigateTo: navigateTo,
    userRole: userRole,
    user: user,
    setUserRole: setUserRole,
    unreadNotifCount: unreadNotifCount,
    toggleNotifDrawer: () => setIsNotifOpen(!isNotifOpen),
    onLogout: handleLogout
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-12"
  }, currentPage === 'landing' && /*#__PURE__*/React.createElement(window.LandingPage, {
    navigateTo: navigateTo,
    mspRates: window.DEMO_DATA.mspRates
  }), currentPage === 'farmerDash' && /*#__PURE__*/React.createElement(window.FarmerDashboard, {
    navigateTo: navigateTo,
    user: user,
    activeBooking: activeBooking
  }), currentPage === 'centreListing' && /*#__PURE__*/React.createElement(window.CentreListing, {
    navigateTo: navigateTo,
    centres: centres,
    onSelectCentre: c => setSelectedCentre(c)
  }), currentPage === 'centreDetails' && /*#__PURE__*/React.createElement(window.CentreDetails, {
    navigateTo: navigateTo,
    centre: selectedCentre,
    onSelectCentre: c => setSelectedCentre(c)
  }), currentPage === 'slotBooking' && /*#__PURE__*/React.createElement(window.SlotBooking, {
    navigateTo: navigateTo,
    centre: selectedCentre,
    centres: centres,
    onSelectCentre: c => setSelectedCentre(c),
    slots: slots,
    onCreateBooking: handleCreateBooking,
    user: user
  }), currentPage === 'bookingConfirmation' && /*#__PURE__*/React.createElement(window.BookingConfirmation, {
    navigateTo: navigateTo,
    booking: activeBooking
  }), currentPage === 'liveQueue' && /*#__PURE__*/React.createElement(window.LiveQueueTracking, {
    navigateTo: navigateTo,
    booking: activeBooking
  }), currentPage === 'procurementStatus' && /*#__PURE__*/React.createElement(window.ProcurementStatusTracking, {
    navigateTo: navigateTo,
    booking: activeBooking
  }), currentPage === 'officerDash' && /*#__PURE__*/React.createElement(window.OfficerDashboard, {
    navigateTo: navigateTo,
    bookings: bookings,
    onUpdateBookingStatus: handleUpdateBookingStatus
  }), currentPage === 'officerLogin' && /*#__PURE__*/React.createElement(window.OfficerLogin, {
    navigateTo: navigateTo,
    onLoginSuccess: userData => {
      setUser(userData);
      setUserRole('OFFICER');
      setCurrentPage('officerDash');
    }
  }), currentPage === 'adminDash' && (window.AdminDashboard ? /*#__PURE__*/React.createElement(window.AdminDashboard, {
    navigateTo: navigateTo
  }) : /*#__PURE__*/React.createElement("div", {
    className: "p-8 text-center text-slate-600 bg-white rounded-3xl shadow"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-notch fa-spin text-2xl text-blue-600 mb-2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-sm"
  }, "Loading State Admin Dashboard...")))), /*#__PURE__*/React.createElement(window.MobileNav, {
    currentPage: currentPage,
    navigateTo: navigateTo,
    userRole: userRole
  }), /*#__PURE__*/React.createElement(window.NotificationDrawer, {
    isOpen: isNotifOpen,
    onClose: () => setIsNotifOpen(false),
    notifications: notifications,
    markAllRead: markAllNotifsRead
  }));
}

// Render React 18 App
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render( /*#__PURE__*/React.createElement(App, null));
}
