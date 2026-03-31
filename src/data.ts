import type { Project, Experience, Skill } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Cirilo Filipino Kainan",
    description:
      "Website, signage, and menu design for Cirilo Filipino Kainan, a cohesive digital and print identity for an East London Filipino restaurant.",
    tags: ["Gatsby", "styled-components"],
    year: "2024",
    featured: true,
    link: "https://www.cirilofilipinokainan.co.uk/",
  },
  {
    id: 2,
    title: "Escape Dance Holiday",
    description:
      "E-commerce website for ESCAPE Dance Holiday, built on WooCommerce with Stripe payment integration for package bookings.",
    tags: ["Wordpress", "WooCommerce", "HTML", "CSS"],
    year: "2019",
    featured: true,
    link: "https://www.escapedance.co.uk/",
  },
  {
    id: 3,
    title: "Reading School of Dance",
    description:
      "Brochure website for a local dance school, built with clean, responsive HTML and CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2019",
    featured: true,
    link: "https://www.readingschoolofdance.com/",
  },
  {
    id: 4,
    title: "UKvsCOVID Hackathon - Tell My GP",
    description:
      "Built during the #UKvsCOVIDHack, Tell My GP is a web app designed to bridge the gap between COVID-19 patients and their GPs — addressing a real problem where patient data from 111 calls was invisible to local doctors.",
    tags: ["Gatsby", "Material UI", "Firebase"],
    year: "2020",
    featured: true,
    link: "https://medium.com/ukvscovidhack/tell-my-gp-63de96231e38",
  },
];

export const experiences: Experience[] = [
  {
    company: "Cera",
    role: "Senior Frontend Engineer",
    period: "2021 — Present",
    description:
      "Cera is Europe's largest provider of digital-first home healthcare.",
    highlights: [
      "Built new features in a healthcare medication management system that made it quicker and easier for carers to manage medications and set administration schedules. ",
      "Piloted releases before going live to avoid disrupting daily care, with feedback from carers used to iron out issues early. Worked in a microfrontend setup and helped keep a shared monorepo in good shape across the team.",
      "Developed AI-powered tools that took complexity out of everyday carer workflows, saving time and improving care quality.",
    ],
    tags: [
      "React",
      "TypeScript",
      "React Query",
      "Vite",
      "Vitest",
      "React Testing Library",
      "Storybook",
      "Sentry",
      "Material UI",
    ],
  },
  {
    company: "Costa Coffee",
    role: "Frontend Developer",
    period: "2019 — 2021",
    description:
      "Costa is the Nation's Favourite coffee shop and the largest and fastest growing coffee shop chain in the UK.",
    highlights: [
      "Worked within an Agile/Scrum team building and releasing new features for the Costa Coffee website, collaborating closely with designers and product to deliver a polished, responsive experience across devices.",
      "Contributed to frontend architecture decisions and picked up performance work across the site. Built and managed content-driven features through Contentful CMS, keeping the experience consistent across devices.",
    ],
    tags: [
      "Gatsby",
      "GraphQL",
      "Styled Components",
      "Tailwind CSS",
      "React Testing Library",
      "Contentful",
    ],
  },
  {
    company: "Whitbread - Premier Inn",
    role: "Frontend Developer",
    period: "2017 — 2019",
    description:
      "Whitbread is a leading hospitality business and the owner of Premier Inn, the UK's biggest hotel brand.",
    highlights: [
      "Embedded within an Agile/Scrum team delivering and maintaining the Premier Inn website across the UK and Germany, with a focus on the customer booking and booking management journey — a high-traffic, conversion-critical part of the product.",
      "Built major features across the booking flow and contributed to architectural decisions on the frontend. Worked with React and AEM on both new development and improvements to existing customer journeys — covering two markets throughout.",
    ],
    tags: [
      "React",
      "Redux",
      "AngularJS",
      "Jest",
      "Sass",
      "Adobe Experience Manager (AEM)",
    ],
  },
  {
    company: "AND Digital",
    role: "Associate Product Developer AND Dancer",
    period: "2015 — 2017",
    description:
      "AND Digital is on a mission to close the world's digital skills gap.",
    highlights: [
      "Worked across internal product development and client-facing engagements as part of AND Digital's consultancy model, delivering web solutions within Agile/Scrum teams.",
    ],

    tags: ["AngularJS", "Adobe Experience Manager (AEM)"],
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
    items: ["Vite", "Sentry", "AI-assisted development", "Storybook"],
  },
  {
    category: "Craft",
    items: ["Design Systems", "Web Accessibility"],
  },
  {
    category: "Architecture",
    items: ["Microfrontend Architecture", "Shared Deployment Ownership"],
  },
];
