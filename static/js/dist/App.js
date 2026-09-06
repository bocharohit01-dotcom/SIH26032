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