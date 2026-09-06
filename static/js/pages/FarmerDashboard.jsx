// Page 4: Farmer Dashboard — Visual Demonstration Theme + Slot Cancellation

window.FarmerDashboard = function FarmerDashboard({ navigateTo, user, activeBooking }) {

  // All bookings the farmer can manage
  const [myBookings, setMyBookings] = React.useState(
    (window.DEMO_DATA.sampleBookings || []).filter(b =>
      b.farmerPhone === (user && user.phone ? user.phone : '9876543210')
    )
  );
  const [cancelTarget, setCancelTarget] = React.useState(null); // booking to cancel
  const [cancelReason, setCancelReason]   = React.useState('');
  const [showCancelModal, setShowCancelModal] = React.useState(false);
  const [cancelSuccess, setCancelSuccess] = React.useState(null);

  const cancelReasons = [
    'Crop not ready for delivery',
    'Heavy rainfall / weather issue',
    'Transport vehicle unavailable',
    'Personal / family emergency',
    'Found better centre nearby',
    'Other'
  ];

  const openCancelDialog = (booking) => {
    setCancelTarget(booking);
    setCancelReason('');
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    if (!cancelReason) return;
    setMyBookings(prev => prev.map(b =>
      b.id === cancelTarget.id ? { ...b, status: 'CANCELLED', cancelReason } : b
    ));
    setCancelSuccess(cancelTarget.tokenNumber);
    setShowCancelModal(false);
    setCancelTarget(null);
    setTimeout(() => setCancelSuccess(null), 4000);
  };

  const activeSlot = myBookings.find(b => b.status !== 'COMPLETED' && b.status !== 'CANCELLED');
  const pastBookings = myBookings.filter(b => b.status === 'COMPLETED' || b.status === 'CANCELLED');

  const statusColors = {
    BOOKED:         { bg:'#dbeafe', color:'#1d4ed8', icon:'fa-calendar-check' },
    CHECKED_IN:     { bg:'#d1fae5', color:'#065f46', icon:'fa-door-open' },
    QUALITY_CHECK:  { bg:'#fef3c7', color:'#92400e', icon:'fa-flask' },
    WEIGHED:        { bg:'#ede9fe', color:'#5b21b6', icon:'fa-weight-scale' },
    COMPLETED:      { bg:'#dcfce7', color:'#166534', icon:'fa-circle-check' },
    CANCELLED:      { bg:'#fee2e2', color:'#991b1b', icon:'fa-circle-xmark' }
  };

  const canCancel = (status) => ['BOOKED','CHECKED_IN'].includes(status);

  return (
    <div style={{paddingBottom:48, animation:'fadeIn 0.4s ease'}}>

      {/* ── CANCEL SUCCESS TOAST ─────────────────────────── */}
      {cancelSuccess && (
        <div style={{
          position:'fixed', top:80, right:24, zIndex:999,
          background:'#fef2f2', border:'1.5px solid #fca5a5',
          borderRadius:14, padding:'14px 20px',
          display:'flex', alignItems:'center', gap:10,
          boxShadow:'0 12px 32px rgba(239,68,68,0.2)',
          animation:'slideInRight 0.3s ease'
        }}>
          <span style={{fontSize:20}}>🚫</span>
          <div>
            <div style={{fontWeight:800,fontSize:14,color:'#991b1b'}}>Slot Cancelled</div>
            <div style={{fontSize:12,color:'#ef4444'}}>Token {cancelSuccess} has been cancelled successfully.</div>
          </div>
        </div>
      )}

      {/* ── CANCEL CONFIRMATION MODAL ─────────────────── */}
      {showCancelModal && cancelTarget && (
        <div style={{
          position:'fixed',inset:0,background:'rgba(15,23,42,0.55)',
          backdropFilter:'blur(6px)',display:'flex',
          alignItems:'center',justifyContent:'center',zIndex:500
        }}>
          <div style={{
            background:'white', borderRadius:24, padding:32,
            width:'90%', maxWidth:440,
            boxShadow:'0 32px 72px rgba(0,0,0,0.2)',
            animation:'slideUp 0.3s ease'
          }}>
            {/* Modal Header */}
            <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:20}}>
              <div style={{
                width:52,height:52,borderRadius:14,
                background:'#fee2e2', color:'#ef4444',
                display:'flex',alignItems:'center',justifyContent:'center',fontSize:24
              }}>
                🚫
              </div>
              <div>
                <h3 style={{fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:18,
                  color:'#0f172a',margin:'0 0 3px'}}>
                  Cancel Slot Booking?
                </h3>
                <p style={{fontSize:12,color:'#64748b',margin:0}}>
                  Token <strong style={{color:'#ef4444'}}>{cancelTarget.tokenNumber}</strong> · {cancelTarget.timeWindow}
                </p>
              </div>
            </div>

            {/* Booking Summary */}
            <div style={{
              background:'#fef2f2', border:'1px solid #fecaca',
              borderRadius:12, padding:'12px 14px', marginBottom:20,
              display:'grid', gridTemplateColumns:'1fr 1fr', gap:10
            }}>
              <div>
                <div style={{fontSize:11,color:'#94a3b8',fontWeight:600}}>Centre</div>
                <div style={{fontSize:13,fontWeight:700,color:'#0f172a'}}>{cancelTarget.centreName?.split(' ').slice(0,3).join(' ')}</div>
              </div>
              <div>
                <div style={{fontSize:11,color:'#94a3b8',fontWeight:600}}>Crop</div>
                <div style={{fontSize:13,fontWeight:700,color:'#0f172a'}}>{cancelTarget.cropType}</div>
              </div>
              <div>
                <div style={{fontSize:11,color:'#94a3b8',fontWeight:600}}>Date</div>
                <div style={{fontSize:13,fontWeight:700,color:'#0f172a'}}>{cancelTarget.slotDate}</div>
              </div>
              <div>
                <div style={{fontSize:11,color:'#94a3b8',fontWeight:600}}>Est. Qty</div>
                <div style={{fontSize:13,fontWeight:700,color:'#0f172a'}}>{cancelTarget.estimatedQty} Qtl</div>
              </div>
            </div>

            {/* Reason */}
            <div style={{marginBottom:20}}>
              <label style={{display:'block',fontSize:13,fontWeight:700,marginBottom:8,color:'#334155'}}>
                Reason for Cancellation <span style={{color:'#ef4444'}}>*</span>
              </label>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {cancelReasons.map(r => (
                  <label key={r} style={{
                    display:'flex',alignItems:'center',gap:10,
                    background: cancelReason===r ? '#fef2f2' : 'white',
                    border:`1.5px solid ${cancelReason===r ? '#fca5a5' : '#e2e8f0'}`,
                    borderRadius:10, padding:'9px 12px',
                    cursor:'pointer', transition:'all 0.18s'
                  }}>
                    <input
                      type="radio" name="cancelReason" value={r}
                      checked={cancelReason===r}
                      onChange={()=>setCancelReason(r)}
                      style={{accentColor:'#ef4444'}}
                    />
                    <span style={{fontSize:13,fontWeight:cancelReason===r ? 700 : 500,
                      color:cancelReason===r ? '#991b1b' : '#475569'}}>
                      {r}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div style={{display:'flex',gap:10}}>
              <button
                onClick={()=>{setShowCancelModal(false);setCancelTarget(null);}}
                style={{
                  flex:1,background:'white',border:'1.5px solid #e2e8f0',
                  color:'#475569',fontWeight:700,fontSize:14,
                  padding:'12px',borderRadius:12,cursor:'pointer'
                }}
              >
                Keep Slot
              </button>
              <button
                onClick={confirmCancel}
                disabled={!cancelReason}
                style={{
                  flex:1.5,
                  background: cancelReason ? 'linear-gradient(135deg,#ef4444,#dc2626)' : '#e2e8f0',
                  color: cancelReason ? 'white' : '#94a3b8',
                  fontWeight:800, fontSize:14,
                  padding:'12px', borderRadius:12, border:'none',
                  cursor: cancelReason ? 'pointer' : 'not-allowed',
                  boxShadow: cancelReason ? '0 6px 18px rgba(239,68,68,0.35)' : 'none',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:6
                }}
              >
                <i className="fa-solid fa-circle-xmark"></i>
                Confirm Cancel
              </button>
            </div>

            <p style={{fontSize:11,color:'#94a3b8',textAlign:'center',marginTop:12}}>
              ⚠ Cancellations within 2 hours of slot time may affect future booking priority.
            </p>
          </div>
        </div>
      )}

      {/* ── WELCOME BANNER ─────────────────────────────── */}
      <div style={{
        background:'linear-gradient(135deg,#059669,#0d9488 60%,#3b82f6)',
        borderRadius:24, padding:'32px 36px', marginBottom:28,
        position:'relative', overflow:'hidden',
        boxShadow:'0 24px 48px -10px rgba(5,150,105,0.4)'
      }}>
        <div style={{position:'absolute',top:-50,right:-50,width:200,height:200,
          borderRadius:'50%',background:'rgba(255,255,255,0.08)'}}/>
        <div style={{position:'relative',zIndex:1,
          display:'flex',flexWrap:'wrap',alignItems:'center',
          justifyContent:'space-between',gap:20}}>
          <div>
            <div style={{
              display:'inline-flex',alignItems:'center',gap:6,
              background:'rgba(255,255,255,0.2)',border:'1px solid rgba(255,255,255,0.3)',
              padding:'3px 12px',borderRadius:99,marginBottom:10,
              fontSize:11,fontWeight:700,color:'white'
            }}>
              <span style={{width:7,height:7,borderRadius:'50%',background:'#86efac',
                display:'inline-block',boxShadow:'0 0 0 3px rgba(134,239,172,0.3)'}}></span>
              Active Farmer Portal · Season 2026
            </div>
            <h1 style={{fontFamily:'Outfit,sans-serif',fontWeight:900,fontSize:28,
              color:'white',margin:'0 0 6px'}}>
              Welcome, {user ? user.name : 'Ramesh Patel'} 👋
            </h1>
            <p style={{color:'rgba(255,255,255,0.82)',fontSize:14,margin:0,display:'flex',gap:6,alignItems:'center'}}>
              <i className="fa-solid fa-location-dot"></i>
              {user ? user.village : 'Papyal Village, Medak District'}
            </p>
          </div>

          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            <button
              onClick={() => navigateTo('slotBooking')}
              style={{
                background:'rgba(255,255,255,0.95)',color:'#065f46',
                fontWeight:800,fontSize:13,padding:'11px 20px',
                borderRadius:12,border:'none',cursor:'pointer',
                display:'flex',alignItems:'center',gap:7,
                boxShadow:'0 6px 20px rgba(0,0,0,0.18)',transition:'all 0.2s'
              }}
              onMouseOver={e=>Object.assign(e.currentTarget.style,{transform:'translateY(-2px)'})}
              onMouseOut={e=>Object.assign(e.currentTarget.style,{transform:'translateY(0)'})}
            >
              <i className="fa-solid fa-calendar-plus"></i>
              Book Procurement Slot
            </button>
            <button
              onClick={() => navigateTo('centreListing')}
              style={{
                background:'rgba(255,255,255,0.18)',border:'1.5px solid rgba(255,255,255,0.4)',
                color:'white',fontWeight:700,fontSize:13,padding:'11px 18px',
                borderRadius:12,cursor:'pointer',
                display:'flex',alignItems:'center',gap:6,transition:'all 0.2s'
              }}
              onMouseOver={e=>Object.assign(e.currentTarget.style,{background:'rgba(255,255,255,0.28)'})}
              onMouseOut={e=>Object.assign(e.currentTarget.style,{background:'rgba(255,255,255,0.18)'})}
            >
              <i className="fa-solid fa-compass"></i>
              Find Centres
            </button>
          </div>
        </div>
      </div>

      {/* ── ACTIVE BOOKING CARD ─────────────────────────── */}
      {activeSlot && (
        <div style={{marginBottom:28}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
            <h3 style={{fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:18,
              color:'#0f172a',display:'flex',alignItems:'center',gap:8}}>
              <i className="fa-solid fa-ticket-simple" style={{color:'#f59e0b'}}></i>
              Your Active Procurement Token
            </h3>
            <span style={{
              fontSize:11,fontWeight:700,display:'flex',alignItems:'center',gap:5,
              background:'#d1fae5',color:'#065f46',padding:'3px 12px',borderRadius:99,
              border:'1px solid #6ee7b7'
            }}>
              <span style={{width:7,height:7,borderRadius:'50%',background:'#059669',
                display:'inline-block',animation:'pulse 2s infinite'}}></span>
              Live Status
            </span>
          </div>

          <div style={{
            background:'white',borderRadius:20,
            border:'1.5px solid rgba(5,150,105,0.25)',
            boxShadow:'0 12px 36px rgba(5,150,105,0.12)',
            overflow:'hidden'
          }}>
            {/* Token Header */}
            <div style={{
              background:'linear-gradient(135deg,#f0fdf4,#ecfdf5)',
              borderBottom:'1px solid rgba(5,150,105,0.15)',
              padding:'18px 24px',
              display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12
            }}>
              <div>
                <div style={{fontSize:11,color:'#64748b',fontWeight:600,
                  textTransform:'uppercase',letterSpacing:'.06em',marginBottom:4}}>
                  Token Number
                </div>
                <div style={{fontFamily:'Outfit,sans-serif',fontWeight:900,fontSize:28,
                  color:'#f59e0b',letterSpacing:'.04em'}}>
                  {activeSlot.tokenNumber}
                </div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{
                  background:'white',border:'1px solid rgba(5,150,105,0.2)',
                  borderRadius:12,padding:'8px 14px',fontSize:12
                }}>
                  <div style={{color:'#94a3b8',fontWeight:600}}>Crop & Est. Weight</div>
                  <div style={{fontWeight:800,color:'#0f172a'}}>
                    {activeSlot.cropType} · {activeSlot.estimatedQty} Qtl
                  </div>
                </div>
                {/* Status badge */}
                {(() => {
                  const s = statusColors[activeSlot.status] || {bg:'#f1f5f9',color:'#475569',icon:'fa-circle'};
                  return (
                    <div style={{
                      background:s.bg,color:s.color,fontSize:11,fontWeight:800,
                      padding:'5px 12px',borderRadius:99,display:'flex',alignItems:'center',gap:5
                    }}>
                      <i className={`fa-solid ${s.icon}`}></i>
                      {activeSlot.status.replace('_',' ')}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Stats strips */}
            <div style={{
              display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(110px,1fr))',
              gap:1,background:'#f1f5f9',padding:'0'
            }}>
              {[
                {label:'Procurement Yard',val:activeSlot.centreName?.split(' ').slice(0,3).join(' ')+'…',icon:'fa-building'},
                {label:'Time Window',val:activeSlot.timeWindow,icon:'fa-clock',col:'#059669'},
                {label:'Farmers Ahead',val:activeSlot.tokensAhead+' Farmers',icon:'fa-users',col:'#f59e0b'},
                {label:'Est. Wait',val:activeSlot.estWaitMins+' Mins',icon:'fa-hourglass-half',col:'#0d9488'},
              ].map((m,i)=>(
                <div key={i} style={{background:'white',padding:'14px 18px',textAlign:'center'}}>
                  <i className={`fa-solid ${m.icon}`} style={{color:m.col||'#94a3b8',fontSize:14,marginBottom:6,display:'block'}}></i>
                  <div style={{fontSize:11,color:'#94a3b8',fontWeight:600,marginBottom:3}}>{m.label}</div>
                  <div style={{fontWeight:800,fontSize:13,color:m.col||'#0f172a'}}>{m.val}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{
              padding:'16px 24px',display:'flex',
              justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:10
            }}>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                <button
                  onClick={() => navigateTo('bookingConfirmation')}
                  style={{
                    background:'white',border:'1.5px solid #e2e8f0',color:'#475569',
                    fontWeight:700,fontSize:12,padding:'8px 14px',
                    borderRadius:10,cursor:'pointer',display:'flex',alignItems:'center',gap:5,
                    transition:'all 0.2s'
                  }}
                  onMouseOver={e=>Object.assign(e.currentTarget.style,{background:'#f8fafc',borderColor:'#059669',color:'#059669'})}
                  onMouseOut={e=>Object.assign(e.currentTarget.style,{background:'white',borderColor:'#e2e8f0',color:'#475569'})}
                >
                  <i className="fa-solid fa-qrcode" style={{color:'#059669'}}></i> View Digital Pass
                </button>
                <button
                  onClick={() => navigateTo('liveQueue')}
                  style={{
                    background:'linear-gradient(135deg,#059669,#0d9488)',color:'white',
                    fontWeight:800,fontSize:12,padding:'8px 16px',
                    borderRadius:10,border:'none',cursor:'pointer',
                    display:'flex',alignItems:'center',gap:5,
                    boxShadow:'0 4px 12px rgba(5,150,105,0.3)',transition:'all 0.2s'
                  }}
                  onMouseOver={e=>Object.assign(e.currentTarget.style,{transform:'translateY(-1px)'})}
                  onMouseOut={e=>Object.assign(e.currentTarget.style,{transform:'translateY(0)'})}
                >
                  <i className="fa-solid fa-stopwatch"></i> Track Live Queue
                </button>
              </div>

              {/* 🚫 CANCEL BUTTON */}
              {canCancel(activeSlot.status) && (
                <button
                  onClick={() => openCancelDialog(activeSlot)}
                  style={{
                    background:'#fef2f2',border:'1.5px solid #fecaca',
                    color:'#dc2626',fontWeight:700,fontSize:12,
                    padding:'8px 14px',borderRadius:10,cursor:'pointer',
                    display:'flex',alignItems:'center',gap:5,transition:'all 0.2s'
                  }}
                  onMouseOver={e=>Object.assign(e.currentTarget.style,{background:'#fee2e2',borderColor:'#fca5a5'})}
                  onMouseOut={e=>Object.assign(e.currentTarget.style,{background:'#fef2f2',borderColor:'#fecaca'})}
                >
                  <i className="fa-solid fa-circle-xmark"></i> Cancel Slot
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── QUICK ACTIONS ─────────────────────────────── */}
      <div style={{marginBottom:28}}>
        <h3 style={{fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:18,
          color:'#0f172a',marginBottom:14}}>
          Quick Farmer Services
        </h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:14}}>
          {[
            {page:'centreListing',icon:'fa-compass',emoji:'🗺️',
              bg:'linear-gradient(135deg,#d1fae5,#a7f3d0)',color:'#059669',shadow:'rgba(5,150,105,0.2)',
              title:'Mandi Discovery', desc:'Find nearby yards sorted by shortest wait time.'},
            {page:'slotBooking',icon:'fa-calendar-check',emoji:'📅',
              bg:'linear-gradient(135deg,#ccfbf1,#99f6e4)',color:'#0d9488',shadow:'rgba(13,148,136,0.2)',
              title:'Book Delivery Slot', desc:'Schedule date and 2-hour window for grain delivery.'},
            {page:'liveQueue',icon:'fa-stopwatch',emoji:'📡',
              bg:'linear-gradient(135deg,#fef3c7,#fde68a)',color:'#d97706',shadow:'rgba(245,158,11,0.2)',
              title:'Live Queue Tracker', desc:'Monitor currently serving token and turn alerts.'},
            {page:'procurementStatus',icon:'fa-receipt',emoji:'🏦',
              bg:'linear-gradient(135deg,#dbeafe,#bfdbfe)',color:'#2563eb',shadow:'rgba(59,130,246,0.2)',
              title:'Payout & Receipts', desc:'View digital weighing slips and bank transfer history.'},
          ].map((c,i)=>(
            <div
              key={i}
              onClick={() => navigateTo(c.page)}
              style={{
                background:'white', borderRadius:16, padding:'18px',
                border:'1px solid rgba(0,0,0,0.06)',
                boxShadow:'0 4px 16px rgba(0,0,0,0.05)',
                cursor:'pointer', transition:'all 0.25s',
                position:'relative', overflow:'hidden'
              }}
              onMouseOver={e=>Object.assign(e.currentTarget.style,{
                transform:'translateY(-4px)',
                boxShadow:`0 14px 36px ${c.shadow}`})}
              onMouseOut={e=>Object.assign(e.currentTarget.style,{
                transform:'translateY(0)',
                boxShadow:'0 4px 16px rgba(0,0,0,0.05)'})}
            >
              <div style={{
                width:48,height:48,borderRadius:13,background:c.bg,
                display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:22,marginBottom:12,
                boxShadow:`0 4px 14px ${c.shadow}`
              }}>{c.emoji}</div>
              <h4 style={{fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:15,
                color:'#0f172a',margin:'0 0 5px'}}>{c.title}</h4>
              <p style={{fontSize:12,color:'#64748b',margin:'0 0 12px',lineHeight:1.6}}>{c.desc}</p>
              <span style={{fontSize:12,fontWeight:700,color:c.color,
                display:'flex',alignItems:'center',gap:4}}>
                Open <i className="fa-solid fa-chevron-right" style={{fontSize:10}}></i>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PAST BOOKINGS ─────────────────────────────── */}
      {pastBookings.length > 0 && (
        <div>
          <h3 style={{fontFamily:'Outfit,sans-serif',fontWeight:800,fontSize:18,
            color:'#0f172a',marginBottom:14}}>
            Booking History
          </h3>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {pastBookings.map(b => {
              const s = statusColors[b.status] || {bg:'#f1f5f9',color:'#475569',icon:'fa-circle'};
              return (
                <div key={b.id} style={{
                  background:'white', borderRadius:16, padding:'16px 20px',
                  border:`1px solid ${b.status==='CANCELLED' ? '#fecaca' : 'rgba(5,150,105,0.12)'}`,
                  boxShadow:'0 4px 12px rgba(0,0,0,0.04)',
                  display:'flex',justifyContent:'space-between',
                  alignItems:'center',flexWrap:'wrap',gap:12
                }}>
                  <div style={{display:'flex',gap:14,alignItems:'center'}}>
                    <div style={{
                      width:42,height:42,borderRadius:12,
                      background:s.bg,color:s.color,
                      display:'flex',alignItems:'center',justifyContent:'center',
                      fontSize:18
                    }}>
                      <i className={`fa-solid ${s.icon}`}></i>
                    </div>
                    <div>
                      <div style={{fontWeight:800,fontSize:14,color:'#0f172a',
                        fontFamily:'monospace',letterSpacing:'.04em'}}>
                        {b.tokenNumber}
                      </div>
                      <div style={{fontSize:12,color:'#64748b'}}>
                        {b.cropType} · {b.estimatedQty} Qtl · {b.slotDate}
                      </div>
                      {b.cancelReason && (
                        <div style={{fontSize:11,color:'#ef4444',marginTop:2}}>
                          <i className="fa-solid fa-circle-exclamation"></i> Reason: {b.cancelReason}
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:10}}>
                    {b.totalPayout && (
                      <div style={{textAlign:'right'}}>
                        <div style={{fontSize:11,color:'#94a3b8',fontWeight:600}}>Payout</div>
                        <div style={{fontWeight:800,color:'#059669',fontSize:15}}>
                          ₹{b.totalPayout.toLocaleString('en-IN')}
                        </div>
                      </div>
                    )}
                    <span style={{
                      background:s.bg,color:s.color,fontSize:11,fontWeight:800,
                      padding:'4px 12px',borderRadius:99
                    }}>
                      {b.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
