// Node script to pre-transpile all JSX files into pure JS dist files for instant load time
const fs = require('fs');
const path = require('path');
const Babel = require('./static/js/vendor/babel.min.js');

const distDir = path.join(__dirname, 'static', 'js', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const filesToBuild = [
  'static/js/data/demoData.js',
  'static/js/components/Navbar.jsx',
  'static/js/components/MobileNav.jsx',
  'static/js/components/NotificationDrawer.jsx',
  'static/js/pages/LandingPage.jsx',
  'static/js/pages/FarmerLogin.jsx',
  'static/js/pages/FarmerRegister.jsx',
  'static/js/pages/FarmerDashboard.jsx',
  'static/js/pages/CentreListing.jsx',
  'static/js/pages/CentreDetails.jsx',
  'static/js/pages/SlotBooking.jsx',
  'static/js/pages/BookingConfirmation.jsx',
  'static/js/pages/LiveQueueTracking.jsx',
  'static/js/pages/ProcurementStatusTracking.jsx',
  'static/js/pages/OfficerLogin.jsx',
  'static/js/pages/OfficerDashboard.jsx',
  'static/js/pages/AdminLogin.jsx',
  'static/js/pages/AdminDashboard.jsx',
  'static/js/App.jsx'
];

let bundleCode = '';

filesToBuild.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) {
    console.warn('File not found:', filePath);
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  let compiled = content;
  if (filePath.endsWith('.jsx')) {
    compiled = Babel.transform(content, { presets: ['react'] }).code;
  }
  const baseName = path.basename(filePath, path.extname(filePath)) + '.js';
  const outPath = path.join(distDir, baseName);
  fs.writeFileSync(outPath, compiled, 'utf8');
  console.log(`✓ Compiled ${filePath} -> static/js/dist/${baseName}`);

  bundleCode += `\n/* --- ${filePath} --- */\n` + compiled + '\n';
});

// Create single bundle file for maximum speed
const bundlePath = path.join(distDir, 'bundle.js');
fs.writeFileSync(bundlePath, bundleCode, 'utf8');
console.log(`\n🎉 Created single production bundle: static/js/dist/bundle.js (${(bundleCode.length / 1024).toFixed(1)} KB)`);
