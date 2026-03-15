# Rachelle Ragasa — Senior Frontend Developer Portfolio

A clean, minimal portfolio built with **React 18**, **TypeScript**, and **Vite**.

## Design

- **Palette**: Warm off-white (`#F8F7F4`) base with a single terracotta accent (`#E8441A`) and a muted forest green for status indicators
- **Typography**: DM Serif Display (headings) + DM Sans (body) + DM Mono (labels/code) — all from Google Fonts
- **Layout**: CSS Grid with a consistent 1120px container, 1.5px gap grid for project cards
- **Motion**: CSS keyframe animations only — no JS animation libraries needed

## Stack

| Tool                | Purpose                 |
| ------------------- | ----------------------- |
| React 18            | UI framework            |
| TypeScript (strict) | Type safety             |
| Vite 6              | Dev server & bundler    |
| CSS Modules         | Scoped component styles |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run start

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Nav/
│   │   ├── Nav.tsx
│   │   └── Nav.module.css
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── Work/
│   │   ├── Work.tsx
│   │   └── Work.module.css
│   ├── Experience/
│   │   ├── Experience.tsx
│   │   └── Experience.module.css
│   ├── About/
│   │   ├── About.tsx
│   │   └── About.module.css
│   ├── Contact/
│   │   ├── Contact.tsx
│   │   ├── Contact.module.css
│   │   └── contactFormSchema.ts
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.css
├── data.ts
├── types.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Accessible (semantic HTML, ARIA labels, keyboard navigation)
- ✅ CSS custom properties for easy theming
- ✅ Animated hero with staggered reveals
- ✅ Filterable projects grid (Featured / All)
- ✅ Tabbed experience section
- ✅ Contact form with loading & success states
- ✅ Mobile navigation drawer
- ✅ Smooth scroll & scroll-aware nav
