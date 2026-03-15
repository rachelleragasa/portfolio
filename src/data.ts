import type { Project, Experience, Skill } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Cirilo Filipino Kainan",
    description:
      "Website, signage, and menu design for Cirilo Filipino Kainan — a cohesive digital and print identity for an East London Filipino restaurant.",
    tags: ["Gatsby", "styled-components"],
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Escape Dance Holiday",
    description:
      "E-commerce website for ESCAPE Dance Holiday — built on WooCommerce with Stripe payment integration for package bookings.",
    tags: ["Wordpress", "WooCommerce", "HTML", "CSS"],
    year: "2019",
    featured: true,
  },
  {
    id: 3,
    title: "Reading School of Dance",
    description:
      "Brochure website for a local dance school, built with clean, responsive HTML and CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2019",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    company: "Cera",
    role: "Senior Frontend Engineer",
    period: "2021 — Present",
    description:
      "Engineered new functionality within a healthcare medication management system, making it faster and more intuitive for carers to manage medications and set administration frequencies — improving daily care delivery.",
    highlights: [
      "Owned frontend development of Cera's medication management module end-to-end — one of the most safety-critical parts of the platform — kept reliable through disciplined unit testing and careful, considered development.",
      "Bridged design and engineering by translating Figma designs into accessible, reusable components — enforcing WCAG standards through eslint-a11y — contributing to a shared component library and design system documented in Storybook within a carefully maintained monorepo.",
      "Treated deployment as a process, not an event — using feature flags and pilot releases to validate changes with real users before full rollout, and Sentry to monitor production health and catch regressions early.",
      "Integrated Heap Analytics and became the team’s go-to for support ensuring consistent, reliable data for product decisions.",
      "Contributed to cross-team discovery and delivery of a new AI-integrated page — from identifying user pain points and evaluating business impact through to production.",
    ],
  },
  {
    company: "Costa Coffee",
    role: "Frontend Developer",
    period: "2019 — 2021",
    description:
      "Worked within an Agile/Scrum team building and releasing new features for the Costa Coffee website, collaborating closely with designers and product to deliver a polished, responsive experience across devices.",
    highlights: [
      "Developed reusable, responsive Contentful components within a JAMStack architecture, accelerating website delivery across multiple international markets.",
      "Became the team’s go-to voice on web accessibility — running upskilling sessions on WCAG and pushing for accessibility to be embedded in the design process rather than bolted on at the end.",
      "Implemented i18n to support multiple languages across international market websites, ensuring a localised and consistent user experience.",
    ],
  },
  {
    company: "Whitbread - Premier Inn",
    role: "Frontend Developer",
    period: "2017 — 2019",
    description:
      "Embedded within an Agile/Scrum team delivering and maintaining the Premier Inn website across the UK and Germany, with a focus on the customer booking and booking management journey — a high-traffic, conversion-critical part of the product.",
    highlights: [
      "Worked across Premierinn.com’s Booking Flow during an AngularJS-to-React migration — building new features in React while keeping existing AngularJS components stable within Adobe Experience Manager environment.",
      "A/B tested multiple booking journey configurations to optimise conversion funnel performance, using data-driven insights to inform the most effective user flow.",
    ],
  },
  {
    company: "AND Digital",
    role: "Associate Product Developer AND Dancer",
    period: "2015 — 2017",
    description:
      "Worked across internal product development and client-facing engagements as part of AND Digital's consultancy model, delivering web solutions within Agile/Scrum teams.",
    highlights: [],
  },
];

export const skills: Skill[] = [
  {
    category: "Core",
    items: ["React", "JavaScript", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["CSS / Sass", "Tailwind CSS", "CSS-in-JS"],
  },
  {
    category: "Testing",
    items: ["Vitest", "React Testing Library", "Jest"],
  },
  {
    category: "Tooling",
    items: ["Vite", "Storybook"],
  },
  {
    category: "Craft",
    items: ["Design Systems", "Web Accessibility"],
  },
];
