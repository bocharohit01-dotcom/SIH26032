// Reusable Notification Slide-Over Drawer (Dark Theme)

window.NotificationDrawer = function NotificationDrawer({ isOpen, onClose, notifications, markAllRead }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
          
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-bell text-emerald-400"></i>
              <h3 className="font-bold text-white text-base">Notifications & Live Alerts</h3>
            </div>
            
            <div className="flex items-center gap-2">
              <button onClick={markAllRead} className="text-xs text-emerald-400 hover:underline font-semibold">Mark all read</button>
              <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {notifications.length === 0 ? (
              <div className="text-center py-12 text-slate-500 text-xs">No notifications right now.</div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-3.5 rounded-2xl border transition space-y-1 ${
                    notif.read
                      ? 'bg-slate-950/40 border-slate-800/80 text-slate-500'
                      : 'bg-emerald-950/30 border-emerald-800 text-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-emerald-400">{notif.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{notif.timestamp}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">{notif.message}</p>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
