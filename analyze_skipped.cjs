const fs = require('fs');
const path = require('path');

const localDir = 'C:\\Users\\HP\\OneDrive\\Documents\\WEB DEV\\01_CLIENT_WORK\\Jelani_Motors';
const newDir = path.join(localDir, 'jelani-motors-kenya-v2');

const filesToAnalyze = [
  'src\\components\\WhatsAppButton.jsx',
  'src\\components\\SplashScreen.jsx',
  'src\\components\\ScrollToTop.jsx',
  'src\\components\\ComingSoon.jsx',
  'src\\components\\Checkout.jsx',
  'src\\components\\AdminLogin.jsx',
  'src\\components\\AdminDashboard.jsx'
];

function extractImageUrls(content) {
  const images = [];
  const srcRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  while ((match = srcRegex.exec(content)) !== null) {
    images.push({ type: 'img_src', url: match[1], full: match[0] });
  }

  const bgRegex = /backgroundImage:\s*[`"']url\(([^)]+)\)[`"']/g;
  while ((match = bgRegex.exec(content)) !== null) {
      images.push({ type: 'bg_image', url: match[1], full: match[0] });
  }
  
  const cssUrlRegex = /url\(['"]?([^'"()]+)['"]?\)/g;
  while ((match = cssUrlRegex.exec(content)) !== null) {
    images.push({ type: 'css_url', url: match[1], full: match[0] });
  }

  const importRegex = /import\s+[^'"]+\s+from\s+['"]([^'"]+\.(png|jpe?g|svg|webp|gif))['"]/g;
  while ((match = importRegex.exec(content)) !== null) {
    images.push({ type: 'import', url: match[1], full: match[0] });
  }
  return images;
}

const analysis = [];
filesToAnalyze.forEach(file => {
  const localFile = path.join(localDir, file);
  if (fs.existsSync(localFile)) {
    const localContent = fs.readFileSync(localFile, 'utf8');
    const localImages = extractImageUrls(localContent);
    if (localImages.length > 0) {
      analysis.push({ file, localImages });
    }
  }
});

console.log(JSON.stringify(analysis, null, 2));
