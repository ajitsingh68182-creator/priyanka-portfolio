# Priyanka Singh — Award-Winning Portfolio Website

A bespoke, high-end personal portfolio website designed and engineered for **Priyanka Singh** (Graphic Designer & UI/UX Designer, Gorakhpur, Uttar Pradesh, India).

Built with **pure HTML5, CSS3, and Vanilla JavaScript**, featuring modern Swiss typography, editorial luxury layouts, custom interactive cursor, Three.js ambient canvas, GSAP scroll triggers, interactive device mockups, dynamic project detail modal, and fullscreen masonry lightbox.

---

## 🎨 Visual Identity & Design Tokens

- **Background:** `#F5F3EE` (Warm off-white / editorial paper tone)
- **Primary / Ink:** `#111111` (Deep charcoal black)
- **Secondary / Slate:** `#252525` & `#55524E`
- **Accent:** `#830005` (Deep Burgundy / Wine Red)
- **Supporting Neutrals:** `#F0ECE4`, `#E2DDD5`, `#FFFFFF`
- **Typography:**
  - Display / Editorial Serif: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
  - Monogram & Headings: [Syne](https://fonts.google.com/specimen/Syne)
  - UI / Body Sans: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 📁 Project File Structure

```text
priyanka-portfolio/
├── index.html                 # Complete semantic HTML5 structure (all 35 required sections)
├── css/
│   └── style.css              # Custom CSS architecture, variables, fluid clamp(), responsive down to 375px
├── js/
│   └── script.js              # Vanilla JS engine: cursor, Three.js, GSAP, filter, modal, lightbox, clock, form
├── assets/
│   ├── images/                # Real production assets (posters, branding, UI/UX mockups, portraits)
│   │   ├── priyanka-profile.png
│   │   ├── uiux-bunny-coffee.jpeg
│   │   ├── uiux-bloomenergy.jpeg
│   │   ├── poster-porsche-gt3rs.jpeg
│   │   ├── branding-bunny-coffee.jpg
│   │   ├── branding-black-cherry.jpg
│   │   ├── billboard-tokyo-tourism.png
│   │   └── ... (67 verified production assets)
│   └── docs/
│       └── Priyanka_Singh_Resume.pdf  # Verified ATS resume
└── README.md                  # Project documentation & local preview instructions
```

---

## ✨ Features & Architecture

1. **Preloader:** Editorial typography monogram `[PS]` with progress bar and counter.
2. **Custom Fluid Cursor:** Smooth lerp follower with hover scaling and context labels ("VIEW", "ZOOM") for desktop; gracefully hidden on touch screens.
3. **Sticky Glass Navigation:** Compacts on scroll with subtle backdrop blur, live "Available for Work" badge, and full-screen animated mobile drawer.
4. **Editorial Hero Section:**
   - Oversized typography with mixed serif and sans-serif styling.
   - Interactive 3D mouse parallax tilt on the hero portrait card.
   - Floating tool pills (Figma, Photoshop, Illustrator) and rotating editorial stamp.
   - Live Three.js ambient particle dust canvas in the background.
5. **Infinite Dual-Row Marquee:** Hardware-accelerated infinite scrolling ticker (forward & reverse rows, pauses on hover).
6. **Editorial About & Verified Dossier:** Authentic career summary from ATS resume (MAAC Gorakhpur DGWA, B.Sc. from DDU Gorakhpur University, languages, core disciplines).
7. **Dedicated UI/UX Case Studies:**
   - **BUNNY Coffee & Sweets:** Multi-device responsive web architecture, color swatches, viewport specs.
   - **BloomEnergy:** Clean-tech SaaS grid platform, dashboard hierarchy, emerald accent tokens.
8. **Asymmetric Selected Work Grid:**
   - Asymmetric editorial grid (large, tall, wide, and medium cards with project numbering `01` to `16`).
   - Real category filtering tabs (`ALL`, `BRANDING`, `POSTERS`, `UI/UX`, `PACKAGING & OOH`, `VECTOR ART`).
   - Click to open interactive **Project Detail Modal** with high-res preview, tools used, deliverables, overview, and Next/Previous navigation.
9. **Graphic Design Archive & Lightbox:**
   - Multi-column masonry gallery featuring posters, brochures, billboards, packaging, and vector art.
   - Fullscreen **Lightbox** with previous/next controls, keyboard arrows (`←` / `→`), and `ESC` to close.
10. **Skills & Tools Matrix:** Visual software proficiency meters for Photoshop, Illustrator, Figma, Premiere Pro, and After Effects, plus soft skills cluster.
11. **"How I Design" Methodology:** 5-stage timeline from *Discover & Immerse* to *Deliver & Document*.
12. **Education & Resume Download:** Direct link to download `Priyanka_Singh_Resume.pdf` and view in a new tab.
13. **Contact Section:**
    - Live copy-to-clipboard for `priyankasingh09@gmail.com` with toast notification.
    - Tel link for `+91 6306023403`.
    - Interactive contact form with client-side validation and feedback state.
14. **Footer:** Live Gorakhpur local time clock (IST: UTC + 5:30), back-to-top button, and copyright notice.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or serve it using any local static web server:

### Option A: Open directly
Double-click `index.html` in Windows File Explorer.

### Option B: Using Node.js (Recommended)
From PowerShell in the project directory:
```powershell
npx serve .
# or
npx http-server -p 3000
```

### Option C: Using Python
```powershell
python -m http.server 3000
```
Open `http://localhost:3000` in your browser.

---

## 🌐 Deployment to Vercel / Netlify / GitHub Pages

This project consists of 100% static HTML5, CSS3, and Vanilla JavaScript, requiring zero build steps:
- **Vercel:** Drag and drop the `priyanka-portfolio` folder into [vercel.com](https://vercel.com) or run `vercel deploy`.
- **Netlify:** Drag and drop the folder into [app.netlify.com/drop](https://app.netlify.com/drop).
- **GitHub Pages:** Push to a repository and enable GitHub Pages in Settings -> Pages.
