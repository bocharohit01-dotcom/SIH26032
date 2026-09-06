// Reusable Notification Slide-Over Drawer (Dark Theme)

window.NotificationDrawer = function NotificationDrawer({
  isOpen,
  onClose,
  notifications,
  markAllRead
}) {
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 overflow-hidden animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    className: "absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-y-0 right-0 max-w-full flex pl-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bell text-emerald-400"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-white text-base"
  }, "Notifications & Live Alerts")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: markAllRead,
    className: "text-xs text-emerald-400 hover:underline font-semibold"
  }, "Mark all read"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "p-1 rounded-lg text-slate-400 hover:text-white"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark text-lg"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-4 space-y-3"
  }, notifications.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12 text-slate-500 text-xs"
  }, "No notifications right now.") : notifications.map(notif => /*#__PURE__*/React.createElement("div", {
    key: notif.id,
    className: `p-3.5 rounded-2xl border transition space-y-1 ${notif.read ? 'bg-slate-950/40 border-slate-800/80 text-slate-500' : 'bg-emerald-950/30 border-emerald-800 text-slate-200 shadow-sm'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between text-xs font-bold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-400"
  }, notif.title), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-400 font-mono"
  }, notif.timestamp)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300 leading-snug"
  }, notif.message)))))));
};