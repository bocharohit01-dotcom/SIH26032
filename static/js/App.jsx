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
  const [pageHistory , setPageHistory] = React.useState([]);
  
  //Auth navigation history
  const [authHistory,setAuthHistory] = React.useState([]);

  // ── APPLICATION DATA ──────────────────────────────────────
  const [centres] = React.useState((window.DEMO_DATA && window.DEMO_DATA.centres) || []);
  const [selectedCentre, setSelectedCentre] = React.useState((window.DEMO_DATA && window.DEMO_DATA.centres && window.DEMO_DATA.centres[0]) || {});
  const [slots] = React.useState((window.DEMO_DATA && window.DEMO_DATA.slots) || [
    { id: 101, timeWindow: "08:00 AM - 10:00 AM", maxFarmers: 15, bookedFarmers: 6, isFull: false },
    { id: 102, timeWindow: "10:00 AM - 12:00 PM", maxFarmers: 15, bookedFarmers: 12, isFull: false }
  ]);
  const [bookings, setBookings] = React.useState((window.DEMO_DATA && window.DEMO_DATA.sampleBookings) || []);
  const [activeBooking, setActiveBooking] = React.useState((window.DEMO_DATA && window.DEMO_DATA.sampleBookings && window.DEMO_DATA.sampleBookings[0]) || null);

  // ── NOTIFICATIONS ─────────────────────────────────────────
  const [notifications, setNotifications] = React.useState((window.DEMO_DATA && window.DEMO_DATA.notifications) || []);
  const transliterateFarmerName = (name, language) => {
  if (!name) return '';

  // English → same name
  if (language === 'English') {
    return name;
  }

  const teluguMap = {
    a: 'అ', aa: 'ఆ', i: 'ఇ', ee: 'ఈ', u: 'ఉ', oo: 'ఊ',
    e: 'ఎ', ai: 'ఐ', o: 'ఒ', au: 'ఔ',

    ka: 'క', kha: 'ఖ', ga: 'గ', gha: 'ఘ', nga: 'ఙ',
    cha: 'చ', chha: 'ఛ', ja: 'జ', jha: 'ఝ', nya: 'ఞ',
    ta: 'ట', tha: 'ఠ', da: 'డ', dha: 'ఢ', na: 'ణ',
    tha2: 'త', dha2: 'ద', n2: 'న',
    pa: 'ప', pha: 'ఫ', ba: 'బ', bha: 'భ', ma: 'మ',
    ya: 'య', ra: 'ర', la: 'ల', va: 'వ',
    sha: 'శ', sh: 'ష', sa: 'స', ha: 'హ'
  };

  const hindiMap = {
    a: 'अ', aa: 'आ', i: 'इ', ee: 'ई', u: 'उ', oo: 'ऊ',
    e: 'ए', ai: 'ऐ', o: 'ओ', au: 'औ',

    ka: 'क', kha: 'ख', ga: 'ग', gha: 'घ', nga: 'ङ',
    cha: 'च', chha: 'छ', ja: 'ज', jha: 'झ', nya: 'ञ',
    ta: 'ट', tha: 'ठ', da: 'ड', dha: 'ढ', na: 'ण',
    tha2: 'त', dha2: 'द', n2: 'न',
    pa: 'प', pha: 'फ', ba: 'ब', bha: 'भ', ma: 'म',
    ya: 'य', ra: 'र', la: 'ल', va: 'व',
    sha: 'श', sh: 'ष', sa: 'स', ha: 'ह'
  };

  // Temporary local transliteration engine
  const map = language === 'Telugu' ? teluguMap : hindiMap;

  return name
    .split(' ')
    .map(word => {
      let result = word.toLowerCase();

      const keys = Object.keys(map).sort((a, b) => b.length - a.length);

      keys.forEach(key => {
        result = result.split(key).join(map[key]);
      });

      return result;
    })
    .join(' ');
};
  const [selectedLanguage, setSelectedLanguage] = React.useState('English');
  const translations = {
  English: {
    dashboard: 'Dashboard',
    mandiDiscovery: 'Mandi Discovery',
    bookSlot: 'Book Slot',
    liveQueue: 'Live Queue',
    payoutReceipts: 'Payout & Receipts',
    settings: 'Settings',
    officerConsole: 'Mandi Inspector Console',
    adminDash: 'Admin Dashboard',
    profile: 'Profile',
preferredCentre: 'Preferred Procurement Centre',
bookingHistory: 'Booking History',
assignedMandi: 'Assigned Mandi',
workSummary: 'Work Summary',
queuePreferences: 'Queue Preferences',
helpSupport: 'Help & Support',
aboutKisanSeva: 'About KisanSeva',
logout: 'Logout',
welcome: 'Welcome',
activeFarmerPortal: 'Active Farmer Portal Season 2026',
bookProcurementSlot: 'Book Procurement Slot',
findCentres: 'Find Centres',
yourActiveProcurementToken: 'Your Active Procurement Token',
liveStatus: 'Live Status',
tokenNumber: 'Token Number',
cropEstWeight: 'Crop & Est. Weight',
procurementYard: 'Procurement Yard',
timeWindow: 'Time Window',
farmersAhead: 'Farmers Ahead',
estWait: 'Est. Wait',
viewDigitalPass: 'View Digital Pass',
trackLiveQueue: 'Track Live Queue',
cancelSlot: 'Cancel Slot',
quickFarmerServices: 'Quick Farmer Services',
open: 'Open',
slotCancelled: 'Slot Cancelled',
cancelSlotBooking: 'Cancel Slot Booking?',
centre: 'Centre',
crop: 'Crop',
date: 'Date',
estQty: 'Est. Qty',
reasonForCancellation: 'Reason for Cancellation',
keepSlot: 'Keep Slot',
confirmCancel: 'Confirm Cancel',
cancellationWarning: 'Cancellations within 2 hours of slot time may affect future booking priority.',
farmerName: '',
farmers: 'Farmers',
mins: 'Mins',
qtl: 'Qtl',

mandiDiscoveryDesc: 'Find nearby yards sorted by shortest wait time.',
bookDeliverySlot: 'Book Delivery Slot',
bookDeliverySlotDesc: 'Schedule date and 2-hour window for grain delivery.',
liveQueueTracker: 'Live Queue Tracker',
liveQueueTrackerDesc: 'Monitor currently serving token and turn alerts.',
payoutReceiptsDesc: 'View digital weighing slips and bank transfer history.',

reasonCropNotReady: 'Crop not ready for delivery',
reasonWeather: 'Heavy rainfall / weather issue',
reasonTransport: 'Transport vehicle unavailable',
reasonEmergency: 'Personal / family emergency',
reasonBetterCentre: 'Found better centre nearby',
reasonOther: 'Other',

reasonLabel: 'Reason:',
payout: 'Payout',

statusBooked: 'Booked',
statusCheckedIn: 'Checked In',
statusQualityCheck: 'Quality Check',
statusWeighed: 'Weighed',
statusCompleted: 'Completed',
statusCancelled: 'Cancelled'
  },

  Telugu: {
    dashboard: 'డాష్‌బోర్డ్',
    mandiDiscovery: 'మండి శోధన',
    bookSlot: 'స్లాట్ బుక్ చేయండి',
    liveQueue: 'లైవ్ క్యూ',
    payoutReceipts: 'చెల్లింపులు & రసీదులు',
    settings: 'సెట్టింగ్స్',
    officerConsole: 'మండి ఇన్‌స్పెక్టర్ కన్సోల్',
    adminDash: 'అడ్మిన్ డాష్‌బోర్డ్',
    profile: 'ప్రొఫైల్',
preferredCentre: 'ఇష్టమైన కొనుగోలు కేంద్రం',
bookingHistory: 'బుకింగ్ చరిత్ర',
assignedMandi: 'కేటాయించిన మండి',
workSummary: 'పని సారాంశం',
queuePreferences: 'క్యూ ప్రాధాన్యతలు',
helpSupport: 'సహాయం & మద్దతు',
aboutKisanSeva: 'కిసాన్‌సేవ గురించి',
logout: 'లాగ్ అవుట్',
welcome: 'స్వాగతం',
activeFarmerPortal: 'యాక్టివ్ రైతు పోర్టల్ సీజన్ 2026',
bookProcurementSlot: 'కొనుగోలు స్లాట్ బుక్ చేయండి',
findCentres: 'కేంద్రాలను కనుగొనండి',
yourActiveProcurementToken: 'మీ యాక్టివ్ కొనుగోలు టోకెన్',
liveStatus: 'లైవ్ స్థితి',
tokenNumber: 'టోకెన్ నంబర్',
cropEstWeight: 'పంట & అంచనా బరువు',
procurementYard: 'కొనుగోలు కేంద్రం',
timeWindow: 'సమయ పరిధి',
farmersAhead: 'మీ ముందు ఉన్న రైతులు',
estWait: 'అంచనా వేచి ఉండే సమయం',
viewDigitalPass: 'డిజిటల్ పాస్ చూడండి',
trackLiveQueue: 'లైవ్ క్యూ చూడండి',
cancelSlot: 'స్లాట్ రద్దు చేయండి',
quickFarmerServices: 'రైతుల త్వరిత సేవలు',
open: 'తెరవండి',
slotCancelled: 'స్లాట్ రద్దు చేయబడింది',
cancelSlotBooking: 'స్లాట్ బుకింగ్ రద్దు చేయాలా?',
centre: 'కేంద్రం',
crop: 'పంట',
date: 'తేదీ',
estQty: 'అంచనా పరిమాణం',
reasonForCancellation: 'రద్దు చేయడానికి కారణం',
keepSlot: 'స్లాట్ కొనసాగించండి',
confirmCancel: 'రద్దును నిర్ధారించండి',
cancellationWarning: 'స్లాట్ సమయానికి 2 గంటలలోపు రద్దు చేస్తే భవిష్యత్ బుకింగ్ ప్రాధాన్యతపై ప్రభావం పడవచ్చు.',
farmers: 'రైతులు',
mins: 'నిమిషాలు',
qtl: 'క్వింటాళ్లు',

mandiDiscoveryDesc: 'తక్కువ వేచి ఉండే సమయం ఆధారంగా సమీప కేంద్రాలను కనుగొనండి.',
bookDeliverySlot: 'డెలివరీ స్లాట్ బుక్ చేయండి',
bookDeliverySlotDesc: 'ధాన్యం డెలివరీ కోసం తేదీ మరియు 2 గంటల సమయాన్ని షెడ్యూల్ చేయండి.',
liveQueueTracker: 'లైవ్ క్యూ ట్రాకర్',
liveQueueTrackerDesc: 'ప్రస్తుతం సర్వ్ అవుతున్న టోకెన్ మరియు మీ వంతును చూడండి.',
payoutReceiptsDesc: 'డిజిటల్ బరువు రసీదులు మరియు బ్యాంక్ బదిలీ చరిత్రను చూడండి.',

reasonCropNotReady: 'డెలివరీకి పంట సిద్ధంగా లేదు',
reasonWeather: 'భారీ వర్షం / వాతావరణ సమస్య',
reasonTransport: 'రవాణా వాహనం అందుబాటులో లేదు',
reasonEmergency: 'వ్యక్తిగత / కుటుంబ అత్యవసర పరిస్థితి',
reasonBetterCentre: 'సమీపంలో మెరుగైన కేంద్రం దొరికింది',
reasonOther: 'ఇతర కారణం',

reasonLabel: 'కారణం:',
payout: 'చెల్లింపు',

statusBooked: 'బుక్ చేయబడింది',
statusCheckedIn: 'చెక్-ఇన్ పూర్తయింది',
statusQualityCheck: 'నాణ్యత తనిఖీ',
statusWeighed: 'బరువు కొలిచారు',
statusCompleted: 'పూర్తయింది',
statusCancelled: 'రద్దు చేయబడింది'
  },

  Hindi: {
    dashboard: 'डैशबोर्ड',
    mandiDiscovery: 'मंडी खोज',
    bookSlot: 'स्लॉट बुक करें',
    liveQueue: 'लाइव कतार',
    payoutReceipts: 'भुगतान और रसीदें',
    settings: 'सेटिंग्स',
    officerConsole: 'मंडी इंस्पेक्टर कंसोल',
    adminDash: 'एडमिन डैशबोर्ड',
    profile: 'प्रोफ़ाइल',
preferredCentre: 'पसंदीदा खरीद केंद्र',
bookingHistory: 'बुकिंग इतिहास',
assignedMandi: 'सौंपा गया मंडी',
workSummary: 'कार्य सारांश',
queuePreferences: 'कतार प्राथमिकताएँ',
helpSupport: 'सहायता और समर्थन',
aboutKisanSeva: 'किसानसेवा के बारे में',
logout: 'लॉग आउट',
welcome: 'स्वागत है',
activeFarmerPortal: 'सक्रिय किसान पोर्टल सीज़न 2026',
bookProcurementSlot: 'खरीद स्लॉट बुक करें',
findCentres: 'केंद्र खोजें',
yourActiveProcurementToken: 'आपका सक्रिय खरीद टोकन',
liveStatus: 'लाइव स्थिति',
tokenNumber: 'टोकन नंबर',
cropEstWeight: 'फसल और अनुमानित वजन',
procurementYard: 'खरीद केंद्र',
timeWindow: 'समय सीमा',
farmersAhead: 'आपसे आगे किसान',
estWait: 'अनुमानित प्रतीक्षा',
viewDigitalPass: 'डिजिटल पास देखें',
trackLiveQueue: 'लाइव कतार देखें',
cancelSlot: 'स्लॉट रद्द करें',
quickFarmerServices: 'किसानों के लिए त्वरित सेवाएँ',
open: 'खोलें',
slotCancelled: 'स्लॉट रद्द कर दिया गया',
cancelSlotBooking: 'स्लॉट बुकिंग रद्द करें?',
centre: 'केंद्र',
crop: 'फसल',
date: 'तारीख',
estQty: 'अनुमानित मात्रा',
reasonForCancellation: 'रद्द करने का कारण',
keepSlot: 'स्लॉट रखें',
confirmCancel: 'रद्दीकरण की पुष्टि करें',
cancellationWarning: 'स्लॉट समय से 2 घंटे के भीतर रद्द करने से भविष्य की बुकिंग प्राथमिकता प्रभावित हो सकती है।',
farmers: 'किसान',
mins: 'मिनट',
qtl: 'क्विंटल',

mandiDiscoveryDesc: 'कम प्रतीक्षा समय के अनुसार पास के केंद्र खोजें।',
bookDeliverySlot: 'डिलीवरी स्लॉट बुक करें',
bookDeliverySlotDesc: 'अनाज की डिलीवरी के लिए तारीख और 2 घंटे का समय निर्धारित करें।',
liveQueueTracker: 'लाइव कतार ट्रैकर',
liveQueueTrackerDesc: 'वर्तमान टोकन और अपनी बारी की स्थिति देखें।',
payoutReceiptsDesc: 'डिजिटल वजन पर्ची और बैंक ट्रांसफर इतिहास देखें।',

reasonCropNotReady: 'डिलीवरी के लिए फसल तैयार नहीं है',
reasonWeather: 'भारी बारिश / मौसम की समस्या',
reasonTransport: 'परिवहन वाहन उपलब्ध नहीं है',
reasonEmergency: 'व्यक्तिगत / पारिवारिक आपात स्थिति',
reasonBetterCentre: 'पास में बेहतर केंद्र मिला',
reasonOther: 'अन्य',

reasonLabel: 'कारण:',
payout: 'भुगतान',

statusBooked: 'बुक किया गया',
statusCheckedIn: 'चेक-इन पूरा हुआ',
statusQualityCheck: 'गुणवत्ता जांच',
statusWeighed: 'वजन किया गया',
statusCompleted: 'पूरा हुआ',
statusCancelled: 'रद्द किया गया'

  }
};

const t = (key) => translations[selectedLanguage][key] || key;
  const [isNotifOpen, setIsNotifOpen] = React.useState(false);
  const unreadNotifCount = (notifications || []).filter(n => !n.read).length;

  // ── HANDLERS ──────────────────────────────────────────────
  // ── MAIN APP NAVIGATION ───────────────────────────────────
// ── MAIN APP NAVIGATION ───────────────────────────────────
const navigateTo = (pageName) => {

  // Root/Dashboard pages → Back history ఉండకూడదు
  const rootPages = ['farmerDash', 'officerDash', 'adminDash'];

  setPageHistory(prev => {

    // Same page అయితే history మార్చవద్దు
    if (currentPage === pageName) {
      return prev;
    }

    // Dashboardకి వెళ్తే → history clear
    if (rootPages.includes(pageName)) {
      return [];
    }

    // Inner pageకి వెళ్తే → current pageని historyలో save
    return [...prev, currentPage];
  });

  setCurrentPage(pageName);

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


// ── MAIN APP BACK ─────────────────────────────────────────
const goBack = () => {
  setPageHistory(prev => {

    if (prev.length === 0) {
      return prev;
    }

    const historyCopy = [...prev];

    const previousPage = historyCopy.pop();

    setCurrentPage(previousPage);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    return historyCopy;
  });
};


// ── AUTH NAVIGATION ───────────────────────────────────────
const navigateAuth = (role, subView = 'login') => {

  if (activeRoleTab === role && farmerSubView === subView) {
    return;
  }

  setAuthHistory(prev => [
    ...prev,
    {
      role: activeRoleTab,
      subView: farmerSubView
    }
  ]);

  setActiveRoleTab(role);
  setFarmerSubView(subView);
};


// ── AUTH BACK ──────────────────────────────────────────────
const goBackAuth = () => {

  setAuthHistory(prev => {

    if (prev.length === 0) {
      return prev;
    }

    const historyCopy = [...prev];

    const previousAuth = historyCopy.pop();

    setActiveRoleTab(previousAuth.role);
    setFarmerSubView(previousAuth.subView);

    return historyCopy;
  });
};

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setUserRole(userData.role || 'FARMER');
    setPageHistory([]);
    setAuthHistory([]);
    
    // Auto-select nearest matching mandi centre based on farmer's district
    if (userData.district && centres && centres.length > 0) {
      const match = centres.find(c => 
        c.district.toLowerCase() === userData.district.toLowerCase() ||
        userData.district.toLowerCase().includes(c.district.toLowerCase())
      );
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

    //Reset all navigation history
    setPageHistory([]);
     setAuthHistory([]);

     setCurrentPage('farmerDash')
  };
  const generateNextToken = (centre) => {
  const prefix =
    String(centre?.code || centre?.name || 'CTR')
      .replace(/[^A-Za-z0-9]/g, '')
      .slice(0, 3)
      .toUpperCase() || 'CTR';

  const numbers = (bookings || [])
    .filter(b => b.isPrototypeBooking === true)
    .map(b => String(b.tokenNumber || ''))
    .filter(token => token.startsWith(`${prefix}-`))
    .map(token => Number(token.slice(prefix.length + 1)))
    .filter(Number.isFinite);

  const nextNumber = numbers.length
    ? Math.max(...numbers) + 1
    : 1;

  return `${prefix}-${String(nextNumber).padStart(4, '0')}`;
};

 const handleCreateBooking = (newBooking) => {
  setBookings(prev => [newBooking, ...prev]);
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

  setNotifications(prev => [newNotif, ...prev]);
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
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };
  const markNotificationRead = (notificationId) => {
  setNotifications(prev =>
    prev.map(n =>
      n.id === notificationId
        ? { ...n, read: true }
        : n
    )
  );
};

  // ══════════════════════════════════════════════════════════
  // ── MULTI-ROLE AUTH GATE SCREEN ───────────────────────────
  // ══════════════════════════════════════════════════════════
  if (!user) {
    return (
      <div>
       {(authHistory.length > 0 || activeRoleTab !== 'farmer' || farmerSubView !== 'login' ) && (
  <button
    type="button"
    onClick={goBackAuth}
    style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      zIndex: 9999,
      padding: '10px 18px',
      borderRadius: '12px',
      border: '1px solid #d1d5db',
      background: 'white',
      color: '#1f2937',
      fontSize: '15px',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }}
  >
    ← Back
  </button>
)} 
        <div style={{
        minHeight:'100vh',
        background:'linear-gradient(135deg,#f0fdf4 0%,#ecfdf5 40%,#e0f2fe 100%)',
        display:'flex', flexDirection:'column',
        backgroundImage:`
          radial-gradient(circle at 15% 20%, rgba(5,150,105,0.08) 0%, transparent 50%),
          radial-gradient(circle at 85% 80%, rgba(59,130,246,0.07) 0%, transparent 50%)
        `
      }}>

        {/* Auth Page Branding Header */}
        <div style={{ textAlign:'center', paddingTop:32, paddingBottom:8 }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:12,
            background:'white', padding:'10px 24px',
            borderRadius:99, boxShadow:'0 4px 20px rgba(5,150,105,0.12)',
            border:'1px solid rgba(5,150,105,0.18)'
          }}>
            <div style={{
              width:38, height:38, borderRadius:10,
              background:'linear-gradient(135deg,#059669,#0d9488)',
              display:'flex', alignItems:'center', justifyContent:'center', fontSize:20
            }}>🌾</div>
            <div style={{textAlign:'left'}}>
              <div style={{display:'flex',alignItems:'center',gap:6}}>
                <span style={{fontFamily:'Outfit,sans-serif',fontWeight:900,fontSize:20,color:'#0f172a'}}>
                  Kisan<span style={{color:'#059669'}}>Seva</span>
                </span>
              </div>
              <p style={{fontSize:10,color:'#64748b',margin:0,fontFamily:'Inter,sans-serif'}}>
                Intelligent Agricultural Procurement Platform
              </p>
            </div>
          </div>
        </div>

        {/* 3 SEPARATE ROLE PORTAL SELECTION TABS */}
        <div style={{
          display:'flex', justifyContent:'center', flexWrap:'wrap', gap:10,
          marginTop:20, marginBottom:8, padding:'0 16px'
        }}>
          {/* Farmer Portal Tab */}
          <button
            onClick={() => navigateAuth('farmer','login')}
            style={{
              padding:'12px 22px', borderRadius:16,
              fontFamily:'Inter,sans-serif', fontWeight:800, fontSize:14,
              cursor:'pointer', transition:'all 0.25s',
              border: activeRoleTab === 'farmer'
                ? '2px solid #059669'
                : '1.5px solid #cbd5e1',
              background: activeRoleTab === 'farmer'
                ? 'linear-gradient(135deg,#059669,#0d9488)'
                : 'white',
              color: activeRoleTab === 'farmer' ? 'white' : '#334155',
              boxShadow: activeRoleTab === 'farmer'
                ? '0 8px 24px rgba(5,150,105,0.35)'
                : '0 2px 8px rgba(0,0,0,0.04)',
              display:'flex', alignItems:'center', gap:8
            }}
          >
            <span style={{fontSize:18}}>🌾</span>
            <div style={{textAlign:'left'}}>
              <div>Farmer Portal</div>
              <div style={{fontSize:10,fontWeight:500,opacity:0.85}}>Slot Booking & Receipts</div>
            </div>
          </button>

          {/* Mandi Officer Portal Tab */}
          <button
            onClick={() => navigateAuth('officer','login')}
            style={{
              padding:'12px 22px', borderRadius:16,
              fontFamily:'Inter,sans-serif', fontWeight:800, fontSize:14,
              cursor:'pointer', transition:'all 0.25s',
              border: activeRoleTab === 'officer'
                ? '2px solid #d97706'
                : '1.5px solid #cbd5e1',
              background: activeRoleTab === 'officer'
                ? 'linear-gradient(135deg,#d97706,#f59e0b)'
                : 'white',
              color: activeRoleTab === 'officer' ? 'white' : '#334155',
              boxShadow: activeRoleTab === 'officer'
                ? '0 8px 24px rgba(217,119,6,0.35)'
                : '0 2px 8px rgba(0,0,0,0.04)',
              display:'flex', alignItems:'center', gap:8
            }}
          >
            <span style={{fontSize:18}}>👮</span>
            <div style={{textAlign:'left'}}>
              <div>Officer Portal</div>
              <div style={{fontSize:10,fontWeight:500,opacity:0.85}}>Gate & Moisture Verification</div>
            </div>
          </button>

          {/* State Admin Portal Tab */}
          <button
            onClick={() => navigateAuth('admin','login')}
            style={{
              padding:'12px 22px', borderRadius:16,
              fontFamily:'Inter,sans-serif', fontWeight:800, fontSize:14,
              cursor:'pointer', transition:'all 0.25s',
              border: activeRoleTab === 'admin'
                ? '2px solid #2563eb'
                : '1.5px solid #cbd5e1',
              background: activeRoleTab === 'admin'
                ? 'linear-gradient(135deg,#1e40af,#3b82f6)'
                : 'white',
              color: activeRoleTab === 'admin' ? 'white' : '#334155',
              boxShadow: activeRoleTab === 'admin'
                ? '0 8px 24px rgba(37,99,235,0.35)'
                : '0 2px 8px rgba(0,0,0,0.04)',
              display:'flex', alignItems:'center', gap:8
            }}
          >
            <span style={{fontSize:18}}>📊</span>
            <div style={{textAlign:'left'}}>
              <div>State Admin Portal</div>
              <div style={{fontSize:10,fontWeight:500,opacity:0.85}}>Governance & Analytics</div>
            </div>
          </button>
        </div>

        {/* FARMER SUB-VIEW TOGGLE (LOGIN / REGISTER) */}
        {activeRoleTab === 'farmer' && (
          <div style={{
            display:'flex', justifyContent:'center', gap:8,
            marginTop:8, marginBottom:4
          }}>
            <button
              onClick={() => navigateAuth('farmer','login')}
              style={{
                padding:'6px 16px', borderRadius:20,
                fontSize:12, fontWeight:700, cursor:'pointer', border:'none',
                background: farmerSubView === 'login' ? '#059669' : '#e2e8f0',
                color: farmerSubView === 'login' ? 'white' : '#475569',
                transition:'all 0.2s'
              }}
            >
              🔑 Login
            </button>
            <button
              onClick={() => navigateAuth('farmer','register')}
              style={{
                padding:'6px 16px', borderRadius:20,
                fontSize:12, fontWeight:700, cursor:'pointer', border:'none',
                background: farmerSubView === 'register' ? '#059669' : '#e2e8f0',
                color: farmerSubView === 'register' ? 'white' : '#475569',
                transition:'all 0.2s'
              }}
            >
              🌱 Register New Account
            </button>
          </div>
        )}

        {/* RENDER THE SELECTED LOGIN / REGISTER VIEW */}
        <div style={{flex:1}}>
          {activeRoleTab === 'farmer' && farmerSubView === 'login' && (
            <window.FarmerLogin
              navigateTo={(page) => {
                if (page === 'farmerRegister') {
                  navigateAuth('farmer', 'register');
                } 
                else if (page === 'officerLogin') {
                  navigateAuth('officer', 'login');
                }
              }}
              onLoginSuccess={handleLoginSuccess}
            />
          )}

          {activeRoleTab === 'farmer' && farmerSubView === 'register' && (
            <window.FarmerRegister
              navigateTo={(page) => {
                if (page === 'farmerLogin') setFarmerSubView('login');
              }}
              onLoginSuccess={handleLoginSuccess}
            />
          )}

          {activeRoleTab === 'officer' && (
            <window.OfficerLogin
              navigateTo={navigateTo}
              onLoginSuccess={handleLoginSuccess}
            />
          )}

          {activeRoleTab === 'admin' && (
            window.AdminLogin ? (
              <window.AdminLogin
                navigateTo={navigateTo}
                onLoginSuccess={handleLoginSuccess}
              />
            ) : (
              <div style={{padding:32,textAlign:'center',background:'white',borderRadius:24,boxShadow:'0 10px 30px rgba(0,0,0,0.05)'}}>
                <i className="fa-solid fa-circle-notch fa-spin" style={{fontSize:24,color:'#2563eb',marginBottom:8}}></i>
                <div style={{fontWeight:700,fontSize:14,color:'#1e293b'}}>Loading Admin Portal…</div>
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div style={{
          textAlign:'center', padding:'16px 24px 24px',
          fontSize:11, color:'#94a3b8', fontFamily:'Inter,sans-serif'
        }}>
          © 2026 KisanSeva - Intelligent Agricultural Procurement Platform - Department of Agriculture
        </div>
      </div>
    </div>
    );
  }

  // ══════════════════════════════════════════════════════════
  // ── MAIN APP (shown after successful authentication) ──────
  // ══════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-green-50 text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white flex flex-col">

      {/* Top Header Navbar */}
      <window.Navbar
        currentPage={currentPage}
        navigateTo={navigateTo}
        userRole={userRole}
        user={user}
        setUserRole={setUserRole}
        unreadNotifCount={unreadNotifCount}
        toggleNotifDrawer={() => setIsNotifOpen(!isNotifOpen)}
        onLogout={handleLogout}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        t={t}
      />
     
      {/* Main Page View Switcher */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-12">
       {/* Global Back Navigation - Top Left */}
{pageHistory.length > 0 && (
  <div style={{
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center'
  }}>
    <button
      type="button"
      onClick={goBack}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '9px 15px',
        border: '1px solid #cbd5e1',
        borderRadius: '10px',
        background: '#ffffff',
        color: '#1f2937',
        fontSize: '14px',
        fontWeight: '700',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'all 0.2s'
      }}
    >
      ← Back
    </button>
  </div>
)}


        {currentPage === 'landing' && (
          <window.LandingPage
            navigateTo={navigateTo}
            mspRates={window.DEMO_DATA.mspRates}
          />
        )}

        {currentPage === 'farmerDash' && (
          <window.FarmerDashboard
            navigateTo={navigateTo}
            user={user}
            activeBooking={activeBooking}
            bookings={bookings}
            onCancelBooking={(bookingId,cancelReason) => {
  setBookings(prev =>
    prev.map(b =>
      b.id === bookingId
        ? { ...b, status: 'CANCELLED', cancelReason }
        : b
    )
  );

  setActiveBooking(prev =>
    prev && prev.id === bookingId
      ? null
      : prev
  );
}}
            t={t}
            selectedLanguage={selectedLanguage}
            transliterateFarmerName={transliterateFarmerName}
          />
        )}

        {currentPage === 'centreListing' && (
          <window.CentreListing
            navigateTo={navigateTo}
            centres={centres}
            onSelectCentre={(c) => setSelectedCentre(c)}
          />
        )}

        {currentPage === 'centreDetails' && (
          <window.CentreDetails
            navigateTo={navigateTo}
            centre={selectedCentre}
            onSelectCentre={(c) => setSelectedCentre(c)}
          />
        )}

        {currentPage === 'slotBooking' && (
          <window.SlotBooking
            navigateTo={navigateTo}
            centre={selectedCentre}
            centres={centres}
            onSelectCentre={(c) => setSelectedCentre(c)}
            slots={slots}
            onCreateBooking={handleCreateBooking}
            user={user}
            bookins={bookings}
            generateNextToken={generateNextToken}
          />
        )}

        {currentPage === 'bookingConfirmation' && (
          <window.BookingConfirmation
            navigateTo={navigateTo}
            booking={activeBooking}
          />
        )}

        {currentPage === 'liveQueue' && (
          <window.LiveQueueTracking
            navigateTo={navigateTo}
            booking={activeBooking}
          />
        )}

        {currentPage === 'procurementStatus' && (
          <window.ProcurementStatusTracking
            navigateTo={navigateTo}
            booking={activeBooking}
          />
        )}

        {currentPage === 'officerDash' && (
          <window.OfficerDashboard
            navigateTo={navigateTo}
            bookings={bookings}
            onUpdateBookingStatus={handleUpdateBookingStatus}
          />
        )}

        {currentPage === 'officerLogin' && (
          <window.OfficerLogin
            navigateTo={navigateTo}
            onLoginSuccess={(userData) => {
              setUser(userData);
              setUserRole('OFFICER');
              setCurrentPage('officerDash');
            }}
          />
        )}

        {currentPage === 'adminDash' && (
          window.AdminDashboard ? (
            <window.AdminDashboard
              navigateTo={navigateTo}
            />
          ) : (
            <div className="p-8 text-center text-slate-600 bg-white rounded-3xl shadow">
              <i className="fa-solid fa-circle-notch fa-spin text-2xl text-blue-600 mb-2"></i>
              <p className="font-semibold text-sm">Loading State Admin Dashboard...</p>
            </div>
          )
        )}

      </main>

      {/* Mobile Navigation Footer */}
      <window.MobileNav
        currentPage={currentPage}
        navigateTo={navigateTo}
        userRole={userRole}
      />

      {/* Slide-over Notification Panel */}
      <window.NotificationDrawer
        isOpen={isNotifOpen}
        onClose={() => setIsNotifOpen(false)}
        notifications={notifications}
        markAllRead={markAllNotifsRead}
        markNotificationRead={markNotificationRead}
      />

    </div>
  );
}

// Render React 18 App
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
