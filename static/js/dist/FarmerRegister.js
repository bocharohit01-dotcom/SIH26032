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