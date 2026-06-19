/**
 * Single source of truth for all site content + config.
 * Editing identity, projects, skills, and links happens here only.
 */

export const site = {
  name: "Hari Krishna T",
  shortName: "Hari Krishna",
  initials: "HK",
  role: "Full Stack Developer",
  location: "India",
  availability: "Available for work — 2026",
  email: "iamharikrishnat@gmail.com",
  url: "https://harikrishna.dev",
  tagline:
    "I design and build digital products end to end — clean interfaces, solid logic, no clutter.",
  intro:
    "Full Stack Developer crafting fast, accessible web experiences. I care about the details that make software feel effortless — the kind of interface you don't notice because it simply works.",
  description:
    "Portfolio of Hari Krishna T — a Full Stack Developer specializing in React and modern web technologies. Building fast, accessible, and beautiful digital products.",
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export type Skill = { name: string; level: string };

export const skills: Skill[] = [
  { name: "JavaScript", level: "Language" },
  { name: "React", level: "Framework" },
  { name: "Node.js", level: "Runtime" },
  { name: "HTML", level: "Markup" },
  { name: "CSS", level: "Styling" },
  { name: "Git", level: "Tooling" },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  type: string;
  year: string;
  description: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    id: "temple",
    index: "01",
    title: "Temple Website",
    type: "Tharayil Bhagavathi",
    year: "2026",
    description:
      "A devotional website for the Tharayil Bhagavathi temple — presenting its history, events, and offerings in a fast, mobile-first experience. Hand-built from scratch with vanilla HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://tharayilbhagavathikshethram.in",
  },
  {
    id: "beta",
    index: "02",
    title: "Course Platform",
    type: "Learning Platform",
    year: "2026",
    description:
      "A project-based online learning platform built around \"learn by building\" — structured course content with hands-on, practical exercises in a fast, focused interface.",
    stack: ["Next.js", "React", "Tailwind"],
    href: "https://course-platform-kappa-wheat.vercel.app",
  },
  {
    id: "gamma",
    index: "03",
    title: "Project Gamma",
    type: "Landing Experience",
    year: "2024",
    description:
      "A high-conversion marketing site with immersive motion, perfect Core Web Vitals, and a CMS-driven content model.",
    stack: ["Next.js", "Framer Motion", "Tailwind"],
    href: "#",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "6+", label: "Core technologies" },
  { value: "3", label: "Featured projects" },
  { value: "100%", label: "Commitment to craft" },
];

export type SocialLink = { label: string; href: string; handle: string };

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", handle: "@harikrishnat" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harikrishna--t", handle: "in/harikrishna--t" },
  { label: "Email", href: "mailto:iamharikrishnat@gmail.com", handle: "iamharikrishnat@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/iamhari_.__", handle: "@iamhari_.__" },
];
