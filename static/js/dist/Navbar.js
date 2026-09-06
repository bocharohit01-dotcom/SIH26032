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