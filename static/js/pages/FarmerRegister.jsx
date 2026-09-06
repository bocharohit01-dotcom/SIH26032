// Page 3: Farmer Registration — Visual Demonstration Theme with AP & TS District Support

window.FarmerRegister = function FarmerRegister({ navigateTo, onLoginSuccess }) {
  const [step, setStep] = React.useState(1); // 2-step registration
  const apDistricts = (window.DEMO_DATA && window.DEMO_DATA.apDistricts) || [
    "Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla",
    "Chittoor", "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur",
    "Kakinada", "NTR (Vijayawada)", "Nandyal", "Palnadu", "Parvathipuram Manyam",
    "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam",
    "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"
  ];
  const tsDistricts = (window.DEMO_DATA && window.DEMO_DATA.tsDistricts) || [
    "Medak", "Siddipet", "Sangareddy", "Karimnagar", "Nizamabad", "Warangal"
  ];

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

  const set = (key, val) => setFormData(prev => ({ ...prev, [key]: val }));

  const currentDistricts = formData.stateName === 'Andhra Pradesh' ? apDistricts : tsDistricts;

  const handleStateChange = (e) => {
    const newState = e.target.value;
    const defaultDist = newState === 'Andhra Pradesh' ? 'Guntur' : 'Medak';
    setFormData(prev => ({ ...prev, stateName: newState, district: defaultDist }));
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
const handleSubmit = async (e) => {
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
      throw new Error(
        data.error || data.message || 'Registration failed'
      );
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
  const inputStyle = (hasError) => ({
    width:'100%', padding:'11px 14px',
    border:`1.5px solid ${hasError ? '#fca5a5' : '#e2e8f0'}`,
    borderRadius:10, fontFamily:'Inter,sans-serif',
    fontSize:14, outline:'none', background:'white', color:'#0f172a',
    transition:'all 0.2s'
  });
  const labelStyle = { display:'block', fontSize:13, fontWeight:700, marginBottom:6, color:'#334155' };
  const errStyle   = { fontSize:11, color:'#ef4444', marginTop:4, fontWeight:600 };

  return (
    <div style={{maxWidth:520, margin:'0 auto', padding:'32px 0 48px', animation:'fadeIn 0.4s ease'}}>

      {/* Header */}
      <div style={{
        background:'linear-gradient(135deg,#059669,#3b82f6)',
        borderRadius:'24px 24px 0 0', padding:'28px 32px 44px',
        position:'relative', overflow:'hidden'
      }}>
        <div style={{position:'absolute',top:-40,right:-40,width:150,height:150,
          borderRadius:'50%',background:'rgba(255,255,255,0.08)'}}/>

        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:18,position:'relative',zIndex:1}}>
          <div style={{
            width:52,height:52,borderRadius:14,
            background:'rgba(255,255,255,0.2)',
            border:'2px solid rgba(255,255,255,0.3)',
            display:'flex',alignItems:'center',justifyContent:'center',fontSize:26
          }}>🌱</div>
          <div>
            <h2 style={{fontFamily:'Outfit,sans-serif',fontWeight:900,fontSize:22,color:'white',margin:0}}>
              Farmer Registration
            </h2>
            <p style={{color:'rgba(255,255,255,0.85)',fontSize:12,margin:0}}>
              Andhra Pradesh & Telangana Farmer Portal — Step {step} of 2
            </p>
          </div>
        </div>

        {/* Step Progress Bar */}
        <div style={{position:'relative',zIndex:1}}>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            {[1,2].map(s => (
              <React.Fragment key={s}>
                <div style={{
                  width:28,height:28,borderRadius:'50%',
                  background: s <= step ? 'white' : 'rgba(255,255,255,0.25)',
                  color: s <= step ? '#059669' : 'rgba(255,255,255,0.6)',
                  fontWeight:800,fontSize:13,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  transition:'all 0.3s'
                }}>
                  {s < step ? <i className="fa-solid fa-check" style={{fontSize:11}}></i> : s}
                </div>
                {s < 2 && (
                  <div style={{
                    flex:1,height:3,borderRadius:99,
                    background: step > 1 ? 'white' : 'rgba(255,255,255,0.3)',
                    transition:'background 0.4s'
                  }}/>
                )}
              </React.Fragment>
            ))}
          </div>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:6}}>
            <span style={{fontSize:10,color:'rgba(255,255,255,0.85)',fontWeight:700}}>Personal & Location</span>
            <span style={{fontSize:10,color:'rgba(255,255,255,0.85)',fontWeight:700}}>Account Setup</span>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div style={{
        background:'white', borderRadius:'0 0 24px 24px',
        padding:'32px', boxShadow:'0 20px 48px rgba(5,150,105,0.14)',
        border:'1px solid rgba(5,150,105,0.12)', borderTop:'none'
      }}>

        {/* ── STEP 1: Personal Info ────────────────────────── */}
        {step === 1 && (
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            <div>
              <label style={labelStyle}>Full Name <span style={{color:'#059669'}}>*</span></label>
              <input
                type="text" value={formData.fullName}
                onChange={e => set('fullName', e.target.value)}
                placeholder="e.g. K. Venkatrao"
                style={inputStyle(errors.fullName)}
                onFocus={e=>Object.assign(e.target.style,{borderColor:'#059669',boxShadow:'0 0 0 3px rgba(5,150,105,0.10)'})}
                onBlur={e=>Object.assign(e.target.style,{boxShadow:'none',borderColor:errors.fullName?'#fca5a5':'#e2e8f0'})}
              />
              {errors.fullName && <div style={errStyle}><i className="fa-solid fa-circle-exclamation"></i> {errors.fullName}</div>}
            </div>

            <div>
              <label style={labelStyle}>Mobile Number <span style={{color:'#059669'}}>*</span></label>
              <div style={{position:'relative'}}>
                <span style={{position:'absolute',left:14,top:'50%',transform:'translateY(-50%)',
                  fontSize:13,fontWeight:700,color:'#059669'}}>+91</span>
                <input
                  type="tel" value={formData.phone}
                  onChange={e => set('phone', e.target.value)}
                  placeholder="10-digit phone number"
                  style={{...inputStyle(errors.phone), paddingLeft:48}}
                  onFocus={e=>Object.assign(e.target.style,{borderColor:'#059669',boxShadow:'0 0 0 3px rgba(5,150,105,0.10)'})}
                  onBlur={e=>Object.assign(e.target.style,{boxShadow:'none',borderColor:errors.phone?'#fca5a5':'#e2e8f0'})}
                />
              </div>
              {errors.phone && <div style={errStyle}><i className="fa-solid fa-circle-exclamation"></i> {errors.phone}</div>}
            </div>

            {/* State & District Dropdowns */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              <div>
                <label style={labelStyle}>State <span style={{color:'#059669'}}>*</span></label>
                <select
                  value={formData.stateName}
                  onChange={handleStateChange}
                  style={{...inputStyle(false), cursor:'pointer', fontWeight:700, color:'#065f46'}}
                >
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>District ({currentDistricts.length} Available) <span style={{color:'#059669'}}>*</span></label>
                <select
                  value={formData.district}
                  onChange={e => set('district', e.target.value)}
                  style={{...inputStyle(false), cursor:'pointer'}}
                >
                  {currentDistricts.map(d=>(
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              <div>
                <label style={labelStyle}>Village / Mandal <span style={{color:'#059669'}}>*</span></label>
                <input
                  type="text" value={formData.village}
                  onChange={e => set('village', e.target.value)}
                  placeholder="e.g. Tenali / Mangalagiri"
                  style={inputStyle(errors.village)}
                  onFocus={e=>Object.assign(e.target.style,{borderColor:'#059669',boxShadow:'0 0 0 3px rgba(5,150,105,0.10)'})}
                  onBlur={e=>Object.assign(e.target.style,{boxShadow:'none',borderColor:errors.village?'#fca5a5':'#e2e8f0'})}
                />
                {errors.village && <div style={errStyle}>{errors.village}</div>}
              </div>

              <div>
                <label style={labelStyle}>Primary Crop</label>
                <select
                  value={formData.primaryCrop}
                  onChange={e => set('primaryCrop', e.target.value)}
                  style={{...inputStyle(false), cursor:'pointer'}}
                >
                  {['Paddy (Grade A)','Paddy (Common)','Wheat (Grade 1)','Cotton (Long Staple)','Maize (Yellow)','Pulses (Red Gram/Tur)'].map(c=>(
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              <div>
                <label style={labelStyle}>Land Holding (Acres)</label>
                <input
                  type="number" value={formData.landHolding}
                  onChange={e => set('landHolding', e.target.value)}
                  placeholder="e.g. 5.0"
                  style={inputStyle(false)}
                  onFocus={e=>Object.assign(e.target.style,{borderColor:'#059669',boxShadow:'0 0 0 3px rgba(5,150,105,0.10)'})}
                  onBlur={e=>Object.assign(e.target.style,{boxShadow:'none',borderColor:'#e2e8f0'})}
                />
              </div>

              <div>
                <label style={labelStyle}>Aadhaar Number <span style={{fontSize:11,color:'#94a3b8',fontWeight:500}}>(optional)</span></label>
                <input
                  type="text" value={formData.aadhaar}
                  onChange={e => set('aadhaar', e.target.value)}
                  placeholder="12-digit Aadhaar"
                  maxLength={12}
                  style={inputStyle(false)}
                  onFocus={e=>Object.assign(e.target.style,{borderColor:'#059669',boxShadow:'0 0 0 3px rgba(5,150,105,0.10)'})}
                  onBlur={e=>Object.assign(e.target.style,{boxShadow:'none',borderColor:'#e2e8f0'})}
                />
              </div>
            </div>

            <button
              type="button" onClick={handleNext}
              style={{
                background:'linear-gradient(135deg,#059669,#0d9488)',
                color:'white', fontWeight:800, fontSize:15,
                padding:'13px', borderRadius:12, border:'none', cursor:'pointer',
                display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                boxShadow:'0 6px 20px rgba(5,150,105,0.38)', marginTop:4
              }}
            >
              Continue to Account Setup
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        )}

        {/* ── STEP 2: Account Setup ────────────────────────── */}
        {step === 2 && (
          <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:16}}>

            <div style={{
              background:'linear-gradient(135deg,#f0fdf4,#ecfdf5)',
              border:'1px solid rgba(5,150,105,0.2)',
              borderRadius:10, padding:'12px 14px',
              display:'flex', alignItems:'center', gap:10
            }}>
              <div style={{
                width:40,height:40,borderRadius:10,
                background:'linear-gradient(135deg,#059669,#0d9488)',
                color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18
              }}>👤</div>
              <div>
                <div style={{fontWeight:800,fontSize:14,color:'#065f46'}}>{formData.fullName}</div>
                <div style={{fontSize:12,color:'#059669'}}>
                  +91 {formData.phone} · {formData.village}, {formData.district} ({formData.stateName})
                </div>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Bank Account Number <span style={{fontSize:11,color:'#94a3b8',fontWeight:500}}>(for MSP payout)</span></label>
              <input
                type="text" value={formData.bankAccount}
                onChange={e => set('bankAccount', e.target.value)}
                placeholder="Your savings account number"
                style={inputStyle(false)}
                onFocus={e=>Object.assign(e.target.style,{borderColor:'#059669',boxShadow:'0 0 0 3px rgba(5,150,105,0.10)'})}
                onBlur={e=>Object.assign(e.target.style,{boxShadow:'none',borderColor:'#e2e8f0'})}
              />
            </div>

            <div>
              <label style={labelStyle}>IFSC Code</label>
              <input
                type="text" value={formData.ifsc}
                onChange={e => set('ifsc', e.target.value.toUpperCase())}
                placeholder="e.g. SBIN0001234"
                style={inputStyle(false)}
                onFocus={e=>Object.assign(e.target.style,{borderColor:'#059669',boxShadow:'0 0 0 3px rgba(5,150,105,0.10)'})}
                onBlur={e=>Object.assign(e.target.style,{boxShadow:'none',borderColor:'#e2e8f0'})}
              />
            </div>

            <div>
              <label style={labelStyle}>Create Password <span style={{color:'#059669'}}>*</span></label>
              <div style={{position:'relative'}}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={e => set('password', e.target.value)}
                  placeholder="Minimum 6 characters"
                  style={{...inputStyle(errors.password), paddingRight:44}}
                  onFocus={e=>Object.assign(e.target.style,{borderColor:'#059669',boxShadow:'0 0 0 3px rgba(5,150,105,0.10)'})}
                  onBlur={e=>Object.assign(e.target.style,{boxShadow:'none',borderColor:errors.password?'#fca5a5':'#e2e8f0'})}
                  required
                />
                <button type="button" onClick={()=>setShowPassword(!showPassword)}
                  style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',
                    background:'transparent',border:'none',color:'#94a3b8',fontSize:15,cursor:'pointer'}}>
                  <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              {errors.password && <div style={errStyle}><i className="fa-solid fa-circle-exclamation"></i> {errors.password}</div>}
            </div>

            <div>
              <label style={labelStyle}>Confirm Password <span style={{color:'#059669'}}>*</span></label>
              <div style={{position:'relative'}}>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={e => set('confirmPassword', e.target.value)}
                  placeholder="Re-enter password"
                  style={{...inputStyle(errors.confirmPassword), paddingRight:44}}
                  onFocus={e=>Object.assign(e.target.style,{borderColor:'#059669',boxShadow:'0 0 0 3px rgba(5,150,105,0.10)'})}
                  onBlur={e=>Object.assign(e.target.style,{boxShadow:'none',borderColor:errors.confirmPassword?'#fca5a5':'#e2e8f0'})}
                  required
                />
                <button type="button" onClick={()=>setShowConfirm(!showConfirm)}
                  style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',
                    background:'transparent',border:'none',color:'#94a3b8',fontSize:15,cursor:'pointer'}}>
                  <i className={`fa-solid ${showConfirm ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              {errors.confirmPassword && <div style={errStyle}><i className="fa-solid fa-circle-exclamation"></i> {errors.confirmPassword}</div>}
            </div>

            <div style={{display:'flex',gap:10, marginTop:4}}>
              <button
                type="button" onClick={()=>{setStep(1);setErrors({});}}
                style={{
                  flex:1, background:'white', border:'1.5px solid #e2e8f0',
                  color:'#475569', fontWeight:700, fontSize:14,
                  padding:'13px', borderRadius:12, cursor:'pointer',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:6
                }}
              >
                <i className="fa-solid fa-arrow-left"></i> Back
              </button>
              <button
                type="submit" disabled={isLoading}
                style={{
                  flex:2,
                  background: isLoading ? '#94a3b8' : 'linear-gradient(135deg,#059669,#0d9488)',
                  color:'white', fontWeight:800, fontSize:15,
                  padding:'13px', borderRadius:12, border:'none',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                  boxShadow: isLoading ? 'none' : '0 6px 20px rgba(5,150,105,0.38)'
                }}
              >
                {isLoading ? (
                  <><i className="fa-solid fa-spinner fa-spin"></i> Registering…</>
                ) : (
                  <><i className="fa-solid fa-user-plus"></i> Complete Registration</>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Footer */}
        <div style={{textAlign:'center',marginTop:22,paddingTop:18,
          borderTop:'1px solid #f1f5f9',fontSize:13,color:'#64748b'}}>
          Already have an account?{' '}
          <button
            onClick={() => navigateTo('farmerLogin')}
            style={{color:'#059669',fontWeight:800,background:'none',border:'none',
              cursor:'pointer',textDecoration:'underline'}}
          >
            Login Here
          </button>
        </div>
      </div>
    </div>
  );
};
