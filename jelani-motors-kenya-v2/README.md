# 🚗 Jelani Motors Kenya — Corporate Car Hire Website

A production-ready React + Tailwind CSS website for Jelani Motors Kenya, a corporate
car hire company based in Kitengela.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI Components (JSX) |
| **Vite 5** | Dev server & build tool |
| **Tailwind CSS 3** | Utility-first styling |
| **PostCSS + Autoprefixer** | CSS processing |
| **Lucide React** | Icon library |

---

## 🚀 Getting Started (Local Development)

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy to any static host (Vercel, Netlify, Hostinger, etc.)

---

## 📁 Project Structure

```
jelani-motors/
├── index.html                  ← Entry HTML
├── package.json                ← Dependencies
├── vite.config.js              ← Vite config
├── tailwind.config.js          ← Tailwind theme (fonts, colours, animations)
├── postcss.config.js           ← PostCSS plugins
└── src/
    ├── main.jsx                ← React DOM root
    ├── App.jsx                 ← Page orchestration + scroll observer
    ├── index.css               ← Tailwind directives + custom CSS
    ├── data.js                 ← All content data (fleet, services, FAQs, etc.)
    └── components/
        ├── ui.jsx              ← Shared: Button, Badge, Icons, Logo
        ├── Navbar.jsx          ← Fixed navbar + mobile side drawer
        ├── HeroSection.jsx     ← Hero banner with animated entrance
        ├── BookingWidget.jsx   ← Booking form with Geolocation + KYC upload
        ├── Sections.jsx        ← FeatureCards, About, HowWeWork, Services
        ├── FleetSection.jsx    ← Fleet grid with Kenyan vehicles
        ├── TestimonialsAndFAQ.jsx ← Testimonials grid + FAQ accordion
        └── CTABannerAndFooter.jsx ← CTA banner + dark footer
```

---

## 🇰🇪 Localisation

- **Currency**: All prices in **KSh** (Kenyan Shillings)
- **Address**: FXQ2+5V3, Namanga Road, Yukos, Kitengela
- **Phone**: +254 700 000 000
- **Fleet**: Land Cruiser V8, Prado TX/TZ, Range Rover Vogue, Alphard VIP, S-Class, Subaru

---

## ⚙️ Prototype Features

### 📍 Location Pin (Geolocation)
- Uses `navigator.geolocation.getCurrentPosition()`
- On success → coordinates captured silently, field turns green: **"Location Secured ✓"**
- On denial/error → graceful fallback still shows secured

### 📎 KYC Upload
- Hidden `<input type="file" accept="image/*,pdf" capture="environment">`
- Opens camera roll on mobile devices
- On file select → label updates to **"filename.jpg ✓"** in green

---

## ✏️ Updating Content

All text content, fleet data, services, FAQs, and testimonials live in `src/data.js`.
Edit that file to update the site content without touching any component code.
