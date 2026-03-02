const fs = require('fs');
const path = require('path');

const localDir = 'C:\\Users\\HP\\OneDrive\\Documents\\WEB DEV\\01_CLIENT_WORK\\Jelani_Motors';
const newDir = path.join(localDir, 'jelani-motors-kenya-v2');

const exactCopyFiles = [
  'vite.config.js',
  'tailwind.config.js',
  'src\\main.jsx',
  'src\\index.css',
  'src\\data.js',
  'src\\components\\ui.jsx',
  'src\\components\\TestimonialsAndFAQ.jsx',
  'src\\components\\Sections.jsx',
  'src\\components\\Navbar.jsx',
  'src\\components\\FleetSection.jsx',
  'src\\components\\CTABannerAndFooter.jsx',
  'src\\components\\BookingWidget.jsx',
  'src\\App.jsx',
  'README.md',
  'postcss.config.js',
  'index.html'
];

exactCopyFiles.forEach(file => {
  const localFile = path.join(localDir, file);
  const newFile = path.join(newDir, file);
  fs.copyFileSync(newFile, localFile);
  console.log(`Copied exactly: ${file}`);
});

// Handle HeroSection.jsx
const heroSectionFile = 'src\\components\\HeroSection.jsx';
const localHeroFile = path.join(localDir, heroSectionFile);
const newHeroFile = path.join(newDir, heroSectionFile);
let newHeroContent = fs.readFileSync(newHeroFile, 'utf8');

const imageUrlToStrip = 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=85&auto=format&fit=crop';
newHeroContent = newHeroContent.replace(imageUrlToStrip, '');

fs.writeFileSync(localHeroFile, newHeroContent, 'utf8');
console.log(`Copied and modified: ${heroSectionFile}`);
