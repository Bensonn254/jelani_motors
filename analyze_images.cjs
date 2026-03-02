const fs = require('fs');
const path = require('path');

const localDir = 'C:\\Users\\HP\\OneDrive\\Documents\\WEB DEV\\01_CLIENT_WORK\\Jelani_Motors';
const newDir = path.join(localDir, 'jelani-motors-kenya-v2');

const filesToUpdate = [
  'vite.config.js',
  'tailwind.config.js',
  'src\\main.jsx',
  'src\\index.css',
  'src\\data.js',
  'src\\components\\ui.jsx',
  'src\\components\\TestimonialsAndFAQ.jsx',
  'src\\components\\Sections.jsx',
  'src\\components\\Navbar.jsx',
  'src\\components\\HeroSection.jsx',
  'src\\components\\FleetSection.jsx',
  'src\\components\\CTABannerAndFooter.jsx',
  'src\\components\\BookingWidget.jsx',
  'src\\App.jsx',
  'README.md',
  'postcss.config.js',
  'index.html'
];

function extractImageUrls(content) {
  const images = [];
  
  // 1. <img src="..." />
  const srcRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  while ((match = srcRegex.exec(content)) !== null) {
    images.push({ type: 'img_src', url: match[1], full: match[0] });
  }

  // 2. backgroundImage: `url(...)` or backgroundImage: "url(...)"
  const bgRegex = /backgroundImage:\s*[`"']url\(([^)]+)\)[`"']/g;
  while ((match = bgRegex.exec(content)) !== null) {
      images.push({ type: 'bg_image', url: match[1], full: match[0] });
  }
  
  // 3. url(...) in CSS
  const cssUrlRegex = /url\(['"]?([^'"()]+)['"]?\)/g;
  while ((match = cssUrlRegex.exec(content)) !== null) {
    // Only add if not already captured by bgRegex
    images.push({ type: 'css_url', url: match[1], full: match[0] });
  }

  // 4. import ... from '...png|jpg|jpeg|svg|webp'
  const importRegex = /import\s+[^'"]+\s+from\s+['"]([^'"]+\.(png|jpe?g|svg|webp|gif))['"]/g;
  while ((match = importRegex.exec(content)) !== null) {
    images.push({ type: 'import', url: match[1], full: match[0] });
  }

  // 5. Custom image strings inside mapping like image: '/images/...' or image: 'http...'
  // This is tricky, maybe look for common property `image:`
  const objImageRegex = /image:\s*['"]([^'"]+)['"]/g;
  while ((match = objImageRegex.exec(content)) !== null) {
      images.push({ type: 'obj_image', url: match[1], full: match[0] });
  }

  return images;
}

const analysis = [];

filesToUpdate.forEach(file => {
  const localFile = path.join(localDir, file);
  const newFile = path.join(newDir, file);

  const localContent = fs.readFileSync(localFile, 'utf8');
  const newContent = fs.readFileSync(newFile, 'utf8');

  const localImages = extractImageUrls(localContent);
  const newImages = extractImageUrls(newContent);

  if (localImages.length > 0 || newImages.length > 0) {
    analysis.push({ file, localImages, newImages });
  }
});

console.log(JSON.stringify(analysis, null, 2));
