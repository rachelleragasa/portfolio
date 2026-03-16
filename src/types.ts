export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
