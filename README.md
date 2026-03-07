# Worasret Kulkit | Portfolio

A modern, high-performance personal portfolio built to showcase my work in full-stack development, backend engineering, and AI-powered computer vision. Designed with a focus on clean architecture, responsive design, and recruiter-ready presentation.

**Live Site:** [worasret.vercel.app](https://worasret.vercel.app)


---

## Tech Stack

| Layer            | Technology                                              |
|------------------|---------------------------------------------------------|
| Framework        | React 18 with TypeScript                                |
| Styling          | Tailwind CSS 3 with custom design tokens                |
| Animations       | Framer Motion (scroll-triggered, staggered reveals)     |
| Icons            | Lucide React                                            |
| Build Tool       | Vite 6 (HMR, optimized production bundles)              |
| Typography       | Sora, DM Sans, JetBrains Mono (Google Fonts)            |
| Deployment       | Vercel (Edge Network, auto CI/CD from GitHub)           |

---

## Architecture

The codebase follows a modular, component-driven architecture. All personal data is decoupled from the UI through a centralized data layer, making the site fully content-editable without touching any component logic.

```
src/
├── components/
│   ├── ui/                     # Reusable design primitives
│   │   ├── SectionHeading.tsx  # Consistent section headers with scroll animation
│   │   └── TechBadge.tsx       # Styled tag component with variant support
│   ├── Navbar.tsx              # Fixed navigation with scroll-aware blur effect
│   ├── Hero.tsx                # Above-the-fold landing with CTA and photo frame
│   ├── About.tsx               # Bio, education, and highlight cards
│   ├── Skills.tsx              # Categorized tech stack grid (6 domains)
│   ├── Projects.tsx            # Detailed project cards with image lightbox
│   ├── Achievements.tsx        # Award timeline with medal-type indicators
│   ├── Contact.tsx             # Recruiter-focused contact section
│   └── Footer.tsx              # Minimal footer
├── data/
│   └── profile.ts              # Single source of truth for all content
├── hooks/
│   └── useInView.ts            # Intersection Observer hook for scroll animations
├── App.tsx                     # Root layout compositor
├── main.tsx                    # Application entry point
└── index.css                   # Global styles, scrollbar, dot-grid pattern
```

---

## Key Engineering Decisions

**Separation of data and UI.**
All personal information, including projects, skills, achievements, and contact details, lives in `src/data/profile.ts`. This means updating the portfolio content requires editing exactly one file. The components consume this data through typed imports, ensuring type safety across the entire application.

**Custom design system over off-the-shelf UI libraries.**
Instead of relying on component libraries like Material UI or Chakra, every element is hand-built with Tailwind utility classes and custom CSS variables. This eliminates unused CSS bloat and gives full control over the visual language.

**Scroll-driven animations with Intersection Observer.**
Animations trigger only when elements enter the viewport, using a custom `useInView` hook backed by the native Intersection Observer API. This avoids layout thrashing and keeps the main thread clean compared to scroll-event listeners.

**Responsive from 320px to 4K.**
The layout adapts across five breakpoints (320px, 375px, 480px, 640px, 1024px) with mobile-first scaling on typography, padding, grid columns, and component visibility.

---

## Getting Started

Prerequisites: Node.js 18+ and npm 9+.

```bash
# Clone the repository
git clone https://github.com/LittleKidz/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The development server runs at `http://localhost:5173` with hot module replacement enabled.

---

## Deployment

This project is optimized for static hosting. The `npm run build` command outputs a production-ready bundle to the `dist/` directory.

**Vercel:**

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects the Vite configuration. No manual setup required.
4. Every push to `main` triggers a new production deployment.

Also compatible with Netlify, Cloudflare Pages, and GitHub Pages.

---

## Customization

To adapt this portfolio for your own use:

1. Edit `src/data/profile.ts` with your name, bio, skills, projects, and contact information.
2. Replace images in `public/images/` and `public/me.jpg` with your own.
3. Update the metadata in `index.html` (title, description, favicon).
4. Adjust the color palette in `tailwind.config.js` under `theme.extend.colors`.

No component files need to be modified for content changes.

---

Built by **Worasret Kulkit** -- Computer Engineering, Chulalongkorn University.
