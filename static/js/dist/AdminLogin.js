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