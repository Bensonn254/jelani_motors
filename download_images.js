import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop", name: "hero-bg.jpg" },
  { url: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1400&q=80&auto=format&fit=crop", name: "cta-bg.jpg" },
  { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=60&auto=format&fit=crop", name: "footer-bg.jpg" },
  { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&auto=format&fit=crop&crop=face", name: "avatar-1.jpg" },
  { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&auto=format&fit=crop&crop=face", name: "avatar-2.jpg" },
  { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&auto=format&fit=crop&crop=face", name: "avatar-3.jpg" },
  { url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80&auto=format&fit=crop&crop=face", name: "avatar-4.jpg" },
  { url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80&auto=format&fit=crop", name: "how-we-work.jpg" },
  { url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=85&auto=format&fit=crop", name: "car-1.jpg" },
  { url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=700&q=80&auto=format&fit=crop", name: "car-1-sm.jpg" },
  { url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&q=80&auto=format&fit=crop", name: "car-2-sm.jpg" },
  { url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80&auto=format&fit=crop", name: "car-2.jpg" },
  { url: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=700&q=80&auto=format&fit=crop", name: "car-3-sm.jpg" },
  { url: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80&auto=format&fit=crop", name: "car-3.jpg" },
  { url: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=1600&q=80&auto=format&fit=crop", name: "suv-bg.jpg" }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', (err) => {
          fs.unlink(dest, () => reject(err));
        });
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  for (const img of images) {
    console.log(`Downloading ${img.name}...`);
    try {
      await download(img.url, path.join(imagesDir, img.name));
      console.log(`Success: ${img.name}`);
    } catch (e) {
      console.error(`Failed to download ${img.name}:`, e);
    }
  }
}

main();
