// Page 8: Booking Confirmation Component

window.BookingConfirmation = function BookingConfirmation({
  navigateTo,
  booking
}) {
  const currentBooking = booking || window.DEMO_DATA.sampleBookings[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-xl mx-auto py-6 space-y-6 pb-12 animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 bg-emerald-950 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto shadow-xl animate-bounce"
  }, "\u2713"), /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl sm:text-3xl font-extrabold text-white font-serif"
  }, "Procurement Token Generated!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-300"
  }, "Your delivery slot has been registered. Present this token pass at the Mandi entry gate.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 border-2 border-emerald-500/80 rounded-3xl overflow-hidden shadow-2xl space-y-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-6 border-b border-emerald-800/80 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] uppercase font-bold tracking-wider text-emerald-400"
  }, "Official Government Procurement Pass"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-widest mt-1"
  }, currentBooking.tokenNumber)), /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center text-xl font-bold border border-emerald-700"
  }, "\uD83C\uDF3E")), /*#__PURE__*/React.createElement("div", {
    className: "p-6 space-y-6 bg-slate-900"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Farmer Name"), /*#__PURE__*/React.createElement("strong", {
    className: "text-white text-sm font-semibold"
  }, currentBooking.farmerName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Mobile Number"), /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-400 text-sm font-mono"
  }, currentBooking.farmerPhone)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Procurement Centre"), /*#__PURE__*/React.createElement("strong", {
    className: "text-white text-xs"
  }, currentBooking.centreName)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Delivery Slot Window"), /*#__PURE__*/React.createElement("strong", {
    className: "text-amber-300 text-xs"
  }, currentBooking.timeWindow)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Crop & Estimated Qty"), /*#__PURE__*/React.createElement("strong", {
    className: "text-white text-xs"
  }, currentBooking.cropType, " \u2022 ", currentBooking.estimatedQty, " Qtl")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 block text-[11px]"
  }, "Date"), /*#__PURE__*/React.createElement("strong", {
    className: "text-teal-300 text-xs font-mono"
  }, currentBooking.slotDate))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col items-center justify-center gap-2 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3 rounded-xl shadow-inner border-4 border-slate-900 inline-block"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "120",
    height: "120",
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "100",
    height: "100",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 10H40V40H10V10ZM20 20H30V30H20V20Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M60 10H90V40H60V10ZM70 20H80V30H70V20Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 60H40V90H10V60ZM20 70H30V80H20V70Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "50",
    y: "50",
    width: "15",
    height: "15",
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "70",
    y: "65",
    width: "20",
    height: "10",
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "80",
    width: "10",
    height: "10",
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "75",
    y: "80",
    width: "15",
    height: "10",
    fill: "black"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-slate-400 font-mono uppercase tracking-widest"
  }, currentBooking.qrCode)), /*#__PURE__*/React.createElement("div", {
    className: "p-3.5 bg-amber-950/40 border border-amber-800/80 rounded-xl text-amber-300 text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-triangle-exclamation"
  }), " Mandi Entry Instructions"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-300 leading-relaxed"
  }, "Arrive at Gate 2 approximately 15 minutes before your time window. Show this QR pass to the entry officer.")))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => navigateTo('liveQueue'),
    className: "w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-bold text-sm transition shadow-lg flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-stopwatch"
  }), /*#__PURE__*/React.createElement("span", null, "Track Live Queue Position")), /*#__PURE__*/React.createElement("button", {
    onClick: () => window.print(),
    className: "w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-print"
  }), /*#__PURE__*/React.createElement("span", null, "Print / Save Pass"))));
};