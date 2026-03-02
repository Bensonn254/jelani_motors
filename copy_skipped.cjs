const fs = require('fs');
const path = require('path');

const localDir = 'C:\\Users\\HP\\OneDrive\\Documents\\WEB DEV\\01_CLIENT_WORK\\Jelani_Motors';
const newDir = path.join(localDir, 'jelani-motors-kenya-v2');

const filesToCopy = [
  'src\\components\\WhatsAppButton.jsx',
  'src\\components\\SplashScreen.jsx',
  'src\\components\\ScrollToTop.jsx',
  'src\\components\\ComingSoon.jsx',
  'src\\components\\Checkout.jsx',
  'src\\components\\AdminLogin.jsx',
  'src\\components\\AdminDashboard.jsx',
  'package.json'
];

filesToCopy.forEach(file => {
  const localFile = path.join(localDir, file);
  const newFile = path.join(newDir, file);
  
  if (fs.existsSync(newFile)) {
    fs.copyFileSync(newFile, localFile);
    console.log(`Copied: ${file}`);
  } else {
    console.log(`Not found in newDir: ${file}`);
  }
});
