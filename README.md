# 🎓 On Track Admissions
https://xyzdummy.netlify.app/
**Your Global Future Starts Here.**

A premium, modern, and professionally designed website for On Track Admissions — a global university admissions consultancy helping students apply to top international universities across the UK, USA, Canada, Australia, and Europe.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Premium Design** | Dark blue & gold brand theme, elegant typography, glassmorphism effects |
| **6 Polished Pages** | Home, About, Services, Universities, Success Stories, Consultation |
| **Scroll Animations** | Smooth reveal-on-scroll using IntersectionObserver API |
| **Animated Counters** | Stats auto-count when they enter the viewport |
| **FAQ Accordion** | Interactive FAQ section on the home page |
| **University Popup** | Click any university card to see detailed info, programs & highlights |
| **Lead Capture Form** | CRM-ready consultation form with qualifying questions |
| **Language Selector** | Multi-language support (EN, AR, ZH, HI, FR) |
| **Mobile Responsive** | Fully responsive with mobile-first approach |
| **SEO Optimized** | Meta tags, semantic HTML, proper heading hierarchy |

---

## 🛠 Tech Stack

- **React.js** — Component-based UI
- **Vite** — Lightning-fast dev server & build tool
- **React Router** — Client-side routing with scroll-to-top
- **Lucide React** — Clean, modern icon library
- **Vanilla CSS** — Custom design system with CSS variables

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd on-track-admissions

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
on-track-admissions/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx         # Page wrapper
│   │   │   ├── Navbar.jsx         # Navigation with language selector
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx         # Site footer
│   │   │   └── Footer.css
│   │   └── ScrollToTop.jsx        # Auto-scroll on route change
│   ├── hooks/
│   │   └── useAnimations.js       # Scroll-reveal & counter hooks
│   ├── pages/
│   │   ├── Home.jsx / .css        # Hero, services, stats, FAQ, testimonials
│   │   ├── About.jsx / .css       # Founder, mission/vision, values
│   │   ├── Services.jsx / .css    # 6 services + student journey timeline
│   │   ├── Universities.jsx / .css # 12 universities with filter + popup modal
│   │   ├── SuccessStories.jsx/.css # Case studies with before/after
│   │   └── Consultation.jsx/.css  # Lead capture form with success state
│   ├── App.jsx                    # Router configuration
│   └── index.css                  # Global design system & shared styles
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎨 Design System

### Brand Colors
| Token | Value | Usage |
|---|---|---|
| `--navy-900` | `#06112B` | Darkest backgrounds |
| `--navy-800` | `#0A1F44` | Primary dark blue |
| `--gold-400` | `#D4AF37` | Accent, CTAs, highlights |
| `--white` | `#FFFFFF` | Secondary, text on dark |

### Typography
- **Display:** DM Serif Display (headings)
- **Body:** DM Sans (paragraphs, UI)

---

## 📄 Pages Overview

### 🏠 Home Page
- Full-screen hero with real photography & trust badges
- 6 service overview cards with hover animations
- Animated counter stats (500+ students, 98% rate, etc.)
- Study destination photo cards (UK, USA, Canada, Australia)
- 3 student testimonials with star ratings
- FAQ accordion with 5 common questions
- Inspirational image banner
- Conversion-focused CTA section

### 👤 About Page
- Founder introduction with photo & quote
- Company story with key metrics (10+ years, 30+ partners)
- 4-image campus strip
- Mission & Vision cards (dark theme)
- 5 core values with icons

### 🎯 Services Page
- 6 detailed service cards with photographs
- 6-step student journey timeline
- CTA box at the bottom

### 🏫 Universities Page
- 12 universities with rich data
- Country filter pills (All, UK, USA, Canada, Australia)
- Brand-colored abbreviation headers
- **Click-to-expand popup modal** with:
  - University description
  - Popular programs
  - International student percentage
  - Key highlights
  - Direct link to university website

### 🌟 Success Stories
- 3 detailed case studies with photos
- Before/After journey (Challenge → Result)
- Extended student quotes
- University & course details

### 📋 Consultation
- Professional lead capture form
- Qualifying questions (destination, budget, qualification, English test)
- "What happens next?" sidebar with 3-step process
- Animated success confirmation state
- CRM-ready field structure

---

## 🌐 Target Audience

- Students aged 17–30
- Parents seeking guidance for their children
- International students from Asia, Middle East, and Africa

---

## 📱 Responsive Breakpoints

| Breakpoint | Description |
|---|---|
| `< 768px` | Mobile — single column, hamburger menu |
| `768px+` | Tablet — 2-column grids |
| `1024px+` | Desktop — full multi-column layouts |

---

## 🔮 Future Enhancements

- [ ] Full multilingual content (i18n integration)
- [ ] Backend API for form submission
- [ ] CRM integration (HubSpot/Salesforce)
- [ ] Calendly booking integration
- [ ] Blog / Resources section
- [ ] Student portal / dashboard
- [ ] Real university logo images

---

## 📄 License

Private — On Track Admissions © 2025
