// Reusable Navbar Component — Visual Demonstration Theme

window.Navbar = function Navbar({ currentPage, navigateTo, userRole, user, setUserRole, unreadNotifCount, toggleNotifDrawer, onLogout,selectedLanguage,setSelectedLanguage,t}) {
  const [showSettings, setShowSettings] = React.useState(false);
  const [showLanguages, setShowLanguages] = React.useState(false);
  
  return (
    <header style={{
      position:'sticky', top:0, zIndex:40,
      background:'rgba(255,255,255,0.94)',
      backdropFilter:'blur(18px)',
      borderBottom:'1px solid rgba(5,150,105,0.15)',
      boxShadow:'0 2px 20px rgba(5,150,105,0.08)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={() => navigateTo(userRole === 'FARMER' ? 'farmerDash' : userRole === 'OFFICER' ? 'officerDash' : userRole === 'ADMIN' ? 'adminDash' : 'landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div style={{
              width:44, height:44, borderRadius:12,
              background:'linear-gradient(135deg,#059669,#0d9488)',
              color:'white', display:'flex', alignItems:'center',
              justifyContent:'center', fontSize:22, fontWeight:900,
              boxShadow:'0 6px 18px rgba(5,150,105,0.35)',
              transition:'transform 0.2s'
            }} className="group-hover:scale-105">
              🌾
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span style={{fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:20,color:'#0f172a'}}>
                  Kisan<span style={{color:'#059669'}}>Seva</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Agricultural Procurement Coordination Portal
              </p>
            </div>
          </div>

          {/* Center Navigation Links (Role-gated) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-2xl" style={{
            background:'#f0fdf4', border:'1px solid rgba(5,150,105,0.2)'
          }}>
            {/* FARMER NAV LINKS */}
            {userRole === 'FARMER' && (
              <>
                <button
                  onClick={() => navigateTo('farmerDash')}
                  style={currentPage === 'farmerDash' ? {
                    background:'linear-gradient(135deg,#059669,#0d9488)',
                    color:'white', boxShadow:'0 2px 10px rgba(5,150,105,0.3)'
                  } : {color:'#475569'}}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
                >
                  <i className="fa-solid fa-house"></i>
                  <span>{t('dashboard')}</span>
                </button>

                <button
                  onClick={() => navigateTo('centreListing')}
                  style={['centreListing','centreDetails'].includes(currentPage) ? {
                    background:'linear-gradient(135deg,#059669,#0d9488)',
                    color:'white', boxShadow:'0 2px 10px rgba(5,150,105,0.3)'
                  } : {color:'#475569'}}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
                >
                  <i className="fa-solid fa-compass"></i>
                  <span>{t('mandiDiscovery')}</span>
                </button>

                <button
                  onClick={() => navigateTo('slotBooking')}
                  style={['slotBooking','bookingConfirmation'].includes(currentPage) ? {
                    background:'linear-gradient(135deg,#059669,#0d9488)',
                    color:'white', boxShadow:'0 2px 10px rgba(5,150,105,0.3)'
                  } : {color:'#475569'}}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
                >
                  <i className="fa-solid fa-calendar-plus"></i>
                  <span>{t('bookSlot')}</span>
                </button>

                <button
                  onClick={() => navigateTo('liveQueue')}
                  style={currentPage === 'liveQueue' ? {
                    background:'linear-gradient(135deg,#059669,#0d9488)',
                    color:'white', boxShadow:'0 2px 10px rgba(5,150,105,0.3)'
                  } : {color:'#475569'}}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
                >
                  <i className="fa-solid fa-stopwatch"></i>
                  <span>{t('liveQueue')}</span>
                </button>

                <button
                  onClick={() => navigateTo('procurementStatus')}
                  style={currentPage === 'procurementStatus' ? {
                    background:'linear-gradient(135deg,#059669,#0d9488)',
                    color:'white', boxShadow:'0 2px 10px rgba(5,150,105,0.3)'
                  } : {color:'#475569'}}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
                >
                  <i className="fa-solid fa-receipt"></i>
                  <span>{t('payoutReceipts')}</span>
                </button>
              </>
            )}

            {/* OFFICER NAV LINKS */}
            {userRole === 'OFFICER' && (
              <button
                onClick={() => navigateTo('officerDash')}
                style={currentPage === 'officerDash' ? {
                  background:'linear-gradient(135deg,#f59e0b,#d97706)',
                  color:'white', boxShadow:'0 2px 10px rgba(245,158,11,0.3)'
                } : {color:'#475569'}}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
              >
                <i className="fa-solid fa-clipboard-check"></i>
                <span>{t('officerConsole')}</span>
              </button>
            )}

            {/* ADMIN NAV LINKS */}
            {userRole === 'ADMIN' && (
              <button
                onClick={() => navigateTo('adminDash')}
                style={currentPage === 'adminDash' ? {
                  background:'linear-gradient(135deg,#3b82f6,#6366f1)',
                  color:'white', boxShadow:'0 2px 10px rgba(59,130,246,0.3)'
                } : {color:'#475569'}}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 hover:bg-white"
              >
                <i className="fa-solid fa-chart-pie"></i>
                <span>{t('adminDash')}</span>
              </button>
            )}

            {/* If no role is set */}
            {!userRole && (
              <button
                onClick={() => navigateTo('landing')}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-white"
              >
                <span>{t('dashboard')}</span>
              </button>
            )}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5"
          style = {{position:'relative'}}>
            
            {/* Notification Bell */}
            <button
              onClick={toggleNotifDrawer}
              className="relative p-2 rounded-xl border transition"
              style={{background:'#f0fdf4', border:'1px solid rgba(5,150,105,0.25)', color:'#059669'}}
              title="Notifications"
            >
              <i className="fa-regular fa-bell text-sm"></i>
              {unreadNotifCount > 0 && (
                <span style={{
                  position:'absolute', top:-5, right:-5,
                  width:18, height:18, borderRadius:'50%',
                  background:'linear-gradient(135deg,#f43f5e,#e11d48)',
                  color:'white', fontSize:9, fontWeight:900,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  boxShadow:'0 2px 6px rgba(244,63,94,0.5)',
                  border:'2px solid white'
                }}>
                  {unreadNotifCount}
                </span>
              )}
            </button>

            {/* Role / Login Status + Logout */}
            {userRole ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs" style={{
                  background:'#f0fdf4', border:'1px solid rgba(5,150,105,0.25)'
                }}>
                  <span style={{width:8,height:8,borderRadius:'50%',background:'#059669',display:'inline-block',
                    boxShadow:'0 0 0 3px rgba(5,150,105,0.2)'}}></span>
                  <span className="font-bold text-slate-700">{user ? user.name : 'User'}</span>
                  <span style={{
                    fontSize:10, color: userRole==='ADMIN'?'#1e40af':userRole==='OFFICER'?'#92400e':'#065f46',
                    background: userRole==='ADMIN'?'#dbeafe':userRole==='OFFICER'?'#fef3c7':'#d1fae5',
                    padding:'2px 8px', borderRadius:4, fontFamily:'monospace',
                    fontWeight:800, textTransform:'uppercase'
                  }}>
                    {userRole}
                  </span>
                </div>

                {(userRole === 'FARMER' || userRole === 'OFFICER') && (
  <>
    {/* Settings Button */}
    <button
      onClick={() => setShowSettings(!showSettings)}
      title="Settings"
      style={{
        background:'#f8fafc',
        border:'1px solid #cbd5e1',
        color:'#475569',
        fontSize:12,
        fontWeight:700,
        padding:'7px 12px',
        borderRadius:10,
        cursor:'pointer',
        display:'flex',
        alignItems:'center',
        gap:5,
        transition:'all 0.2s'
      }}
    >
      <i className="fa-solid fa-gear"></i>
      <span className="hidden sm:inline">{t('settings')}</span>
    </button>

    {/* Settings Dropdown */}
    {showSettings && (
      <div style={{
        position:'absolute',
        top:62,
        right:80,
        width:240,
        background:'white',
        border:'1px solid rgba(5,150,105,0.18)',
        borderRadius:16,
        boxShadow:'0 12px 35px rgba(15,23,42,0.15)',
        padding:8,
        zIndex:100
      }}>

        <div style={{
          padding:'10px 12px',
          fontSize:12,
          fontWeight:800,
          color:'#64748b',
          borderBottom:'1px solid #e2e8f0',
          marginBottom:4
        }}>
          ⚙️ {t('settings')}
        </div>

        <button className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50">
          👤 {t('profile')}
        </button>

        {/* Language */}
        <button
          onClick={() => setShowLanguages(!showLanguages)}
          className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50"
        >
          🌐 {selectedLanguage}
        </button>

        {showLanguages && (
          <div style={{padding:'8px 12px'}}>

            <button
              onClick={() => {
                setSelectedLanguage('English');
                setShowLanguages(false);
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 ${
                selectedLanguage === 'English'
                  ? 'bg-emerald-100 text-emerald-800'
                  : ''
              }`}
            >
              🇬🇧 English
            </button>

            <button
              onClick={() => {
                setSelectedLanguage('Hindi');
                setShowLanguages(false);
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 ${
                selectedLanguage === 'Hindi'
                  ? 'bg-emerald-100 text-emerald-800'
                  : ''
              }`}
            >
              🇮🇳 Hindi
            </button>

            <button
              onClick={() => {
                setSelectedLanguage('Telugu');
                setShowLanguages(false);
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 ${
                selectedLanguage === 'Telugu'
                  ? 'bg-emerald-100 text-emerald-800'
                  : ''
              }`}
            >
              🇮🇳 తెలుగు
            </button>

          </div>
        )}

        {userRole === 'FARMER' && (
          <>
            <button className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50">
              📍 {t('preferredCentre')}
            </button>

            <button className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50">
              📋 {t('bookingHistory')}
            </button>
          </>
        )}

        {userRole === 'OFFICER' && (
          <>
            <button className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50">
              🏢 {t('assignedMandi')}
            </button>

            <button className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50">
              📊 {t('workSummary')}
            </button>

            <button className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50">
              ⚙️ {t('queuePreferences')}
            </button>
          </>
        )}

        <button className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50">
          ❓ {t('helpSupport')}
        </button>

        <button className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50">
          ℹ️ {t('aboutKisanSeva')}
        </button>

        <div style={{
          height:1,
          background:'#e2e8f0',
          margin:'6px 4px'
        }}></div>

        <button
          onClick={() => {
            setShowSettings(false);
            onLogout();
          }}
          className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-red-50"
          style={{color:'#dc2626'}}
        >
          🚪 {t('logout')}
        </button>

      </div>
    )}
  </>
)}

{/* Admin keeps standalone Logout */}
{userRole === 'ADMIN' && (
  <button
    onClick={onLogout}
    title="Logout"
    className="px-3 py-2 rounded-xl text-xs font-bold transition hover:bg-red-50"
    style={{
      background:'#fff',
      border:'1px solid #fecaca',
      color:'#dc2626',
      cursor:'pointer'
    }}
  >
    🚪 {t('logout')}
  </button>
)}
                
              </div>
            ) : null}

          </div>

        </div>
      </div>
    </header>
  );
};
