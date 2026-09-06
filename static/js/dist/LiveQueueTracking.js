// Page 9: Live Queue Tracking Component

window.LiveQueueTracking = function LiveQueueTracking({
  navigateTo,
  booking
}) {
  const currentBooking = booking || window.DEMO_DATA.sampleBookings[0];
  const [refreshing, setRefreshing] = React.useState(false);
  const [tokensAhead, setTokensAhead] = React.useState(currentBooking.tokensAhead || 2);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 600);
  };
  const estWaitMins = tokensAhead * 12;
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto space-y-6 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-white font-serif flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-stopwatch text-amber-400"
  }), " Live Procurement Queue Tracker"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-xs sm:text-sm mt-1"
  }, "Real-time status updates directly connected to Mandi gate scanners.")), /*#__PURE__*/React.createElement("button", {
    onClick: handleRefresh,
    className: `p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition ${refreshing ? 'animate-spin text-emerald-400' : ''}`,
    title: "Refresh Queue"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-rotate-right text-base"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400 uppercase font-semibold tracking-wider"
  }, "Your Token Number"), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-extrabold text-amber-400 font-mono tracking-wider mt-0.5"
  }, currentBooking.tokenNumber), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-300 mt-1"
  }, currentBooking.centreName)), /*#__PURE__*/React.createElement("div", {
    className: "px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
  }), "Queue Position: #", tokensAhead + 1)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400"
  }, "Currently Serving Dock"), /*#__PURE__*/React.createElement("div", {
    className: "text-xl font-extrabold text-emerald-400 font-mono"
  }, currentBooking.currentlyServing || 'TK-2026-104'), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500"
  }, "Quality Inspection Gate")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400"
  }, "Farmers Ahead of You"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-extrabold text-amber-400 font-mono"
  }, tokensAhead, " Farmers"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500"
  }, "In Weighing Queue")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1 text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-slate-400"
  }, "Estimated Waiting Time"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-extrabold text-teal-300 font-mono"
  }, estWaitMins, " Mins"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-500"
  }, "Approx 12 mins per farmer"))), tokensAhead <= 3 && /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border border-amber-500/80 rounded-2xl flex items-start gap-3 shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-amber-900 text-amber-300 flex items-center justify-center text-xl font-bold flex-shrink-0 animate-bounce"
  }, "\u26A1"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-amber-300 text-sm"
  }, "Your Turn is Approaching!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-200 leading-relaxed"
  }, "You are among the next 3 farmers in queue for token ", currentBooking.tokenNumber, ". Please bring your vehicle near ", /*#__PURE__*/React.createElement("strong", null, "Gate 2 Unloading Dock"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('procurementStatus'),
    className: "w-full py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-timeline text-emerald-400"
  }), /*#__PURE__*/React.createElement("span", null, "View 5-Step Procurement Progress & Payout Slips")))));
};