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