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