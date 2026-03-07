# Worasret Kulkit — Portfolio

A modern, responsive portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite 6

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure

```
src/
├── components/
│   ├── ui/                  # Reusable UI primitives
│   │   ├── SectionHeading.tsx
│   │   └── TechBadge.tsx
│   ├── Navbar.tsx           # Sticky navigation
│   ├── Hero.tsx             # Landing section
│   ├── About.tsx            # Bio & education
│   ├── Skills.tsx           # Tech stack grid
│   ├── Projects.tsx         # Project showcase
│   ├── Achievements.tsx     # Awards timeline
│   ├── Contact.tsx          # Contact CTA
│   └── Footer.tsx           # Footer
├── data/
│   └── profile.ts           # All personal data (single source of truth)
├── hooks/
│   └── useInView.ts         # Intersection Observer hook
├── App.tsx                  # Root component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## Customization

All personal data (name, skills, projects, achievements, contact) is centralized in `src/data/profile.ts`. Edit this single file to update your portfolio content.

## Deployment

Build and deploy to any static hosting:

```bash
npm run build
# Deploy the `dist/` folder
```

Compatible with **Vercel**, **Netlify**, **GitHub Pages**, and **Cloudflare Pages**.
