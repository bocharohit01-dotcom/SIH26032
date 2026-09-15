// Page: Admin Login — Visual Demonstration Theme

window.AdminLogin = function AdminLogin({ navigateTo, onLoginSuccess }) {
  const [adminEmail, setAdminEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [department, setDepartment] = React.useState('Department of Agriculture & Marketing');
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!adminEmail || !password) {
    setErrorMsg('Please fill in all credentials.');
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
        email: adminEmail,
        password: password,
        role: 'ADMIN'
      })
    });

    const data = await response.json();

    if (!response.ok) {
      setErrorMsg(data.error || 'Invalid admin credentials.');
      setIsLoading(false);
      return;
    }

    if (!data.user || data.user.role !== 'ADMIN') {
      setErrorMsg('This account is not authorized for Admin login.');
      setIsLoading(false);
      return;
    }

    onLoginSuccess({
      name: data.user.name,
      role: data.user.role,
      department: department,
      email: data.user.email
    });

    navigateTo('adminDash');

  } catch (error) {
    console.error('Admin login error:', error);
    setErrorMsg('Unable to connect to the server. Please try again.');
    setIsLoading(false);
  }
};

 

  const inputStyle = {
    width:'100%', padding:'12px 14px',
    border:'1.5px solid #e2e8f0', borderRadius:10,
    fontFamily:'Inter,sans-serif', fontSize:14, outline:'none',
    transition:'all 0.2s', background:'white', color:'#0f172a'
  };

  return (
    <div style={{maxWidth:460, margin:'0 auto', padding:'32px 0 48px', animation:'fadeIn 0.4s ease'}}>

      {/* Header Banner */}
      <div style={{
        background:'linear-gradient(135deg,#1e40af,#3b82f6)',
        borderRadius:'24px 24px 0 0', padding:'32px 32px 48px',
        textAlign:'center', position:'relative', overflow:'hidden'
      }}>
        <div style={{position:'absolute',top:-30,right:-30,width:120,height:120,
          borderRadius:'50%',background:'rgba(255,255,255,0.1)'}}/>

        <div style={{
          width:68, height:68, borderRadius:18,
          background:'rgba(255,255,255,0.2)',
          border:'2px solid rgba(255,255,255,0.35)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:32, margin:'0 auto 14px',
          backdropFilter:'blur(4px)',
          position:'relative', zIndex:1,
          boxShadow:'0 8px 24px rgba(0,0,0,0.15)'
        }}>
          📊
        </div>
        <h2 style={{fontFamily:'Outfit,sans-serif',fontWeight:900,fontSize:26,color:'white',
          margin:'0 0 6px',position:'relative',zIndex:1}}>
          State Admin Portal
        </h2>
        <p style={{color:'rgba(255,255,255,0.85)',fontSize:13,position:'relative',zIndex:1}}>
          State Agricultural Procurement Analytics & Governance Console
        </p>
      </div>

      {/* Form Card */}
      <div style={{
        background:'white', borderRadius:'0 0 24px 24px',
        padding:'32px', boxShadow:'0 20px 48px rgba(59,130,246,0.15)',
        border:'1px solid rgba(59,130,246,0.15)', borderTop:'none'
      }}>

        {errorMsg && (
          <div style={{
            display:'flex', alignItems:'center', gap:8,
            padding:'12px 14px', marginBottom:20,
            background:'#fef2f2', border:'1.5px solid #fecaca',
            borderRadius:10, color:'#dc2626', fontSize:13, fontWeight:600
          }}>
            <i className="fa-solid fa-circle-exclamation"></i>
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:18}}>

          {/* Department */}
          <div>
            <label style={{display:'block',fontSize:13,fontWeight:700,marginBottom:6,color:'#334155'}}>
              State Department / Authority <span style={{color:'#2563eb'}}>*</span>
            </label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              style={{...inputStyle, cursor:'pointer'}}
            >
              <option value="Department of Agriculture & Marketing">Department of Agriculture & Marketing</option>
              <option value="Telangana State Civil Supplies Corporation">Telangana State Civil Supplies Corporation</option>
              <option value="FCI District Monitoring Board">FCI District Monitoring Board</option>
              <option value="State Procurement Task Force">State Procurement Task Force</option>
            </select>
          </div>

          {/* Admin Email / ID */}
          <div>
            <label style={{display:'block',fontSize:13,fontWeight:700,marginBottom:6,color:'#334155'}}>
              Official Admin ID / Email <span style={{color:'#2563eb'}}>*</span>
            </label>
            <div style={{position:'relative'}}>
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="e.g:admin@kisanseva-demo.in"
                style={inputStyle}
                onFocus={e=>Object.assign(e.target.style,{borderColor:'#2563eb',boxShadow:'0 0 0 3px rgba(37,99,235,0.12)'})}
                onBlur={e=>Object.assign(e.target.style,{borderColor:'#e2e8f0',boxShadow:'none'})}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{display:'block',fontSize:13,fontWeight:700,marginBottom:6,color:'#334155'}}>
              Admin Password <span style={{color:'#2563eb'}}>*</span>
            </label>
            <div style={{position:'relative'}}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                style={{...inputStyle, paddingRight:44}}
                onFocus={e=>Object.assign(e.target.style,{borderColor:'#2563eb',boxShadow:'0 0 0 3px rgba(37,99,235,0.12)'})}
                onBlur={e=>Object.assign(e.target.style,{borderColor:'#e2e8f0',boxShadow:'none'})}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',
                  background:'transparent',border:'none',color:'#94a3b8',
                  fontSize:15,cursor:'pointer',padding:4
                }}
              >
                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>

          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: isLoading ? '#94a3b8' : 'linear-gradient(135deg,#1e40af,#3b82f6)',
              color:'white', fontWeight:800, fontSize:15,
              padding:'14px', borderRadius:12, border:'none',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              display:'flex', alignItems:'center', justifyContent:'center', gap:8,
              boxShadow: isLoading ? 'none' : '0 6px 20px rgba(37,99,235,0.4)',
              transition:'all 0.2s', marginTop:4
            }}
          >
            {isLoading ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i>
                Authenticating Admin…
              </>
            ) : (
              <>
                <i className="fa-solid fa-chart-line"></i>
                Login to Admin Analytics Dashboard
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};
