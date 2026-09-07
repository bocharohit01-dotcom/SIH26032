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