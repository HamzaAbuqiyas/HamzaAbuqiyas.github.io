export interface NavLink {
  label: string;
  /** Id of the section to scroll to (without #). */
  target: string;
}

export interface Profile {
  name: string;
  title: string;
  /** Short line shown under the title in the hero. */
  tagline: string;
  location: string;
  availability: string;
  photo?: Photo;
  /** Short facts shown under the hero, e.g. "Based in — Amman, Jordan". */
  facts: LabeledItem[];
}

export interface Photo {
  /** Path inside the public/ folder. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Titles shown next to each section. */
export interface SectionHeadings {
  about: string;
  skills: string;
  experience: string;
  projects: string;
  education: string;
  cv: string;
  ai: string;
  contact: string;
}

export interface About {
  paragraphs: string[];
  education: Education;
  languages: LabeledItem[];
  certifications: LabeledItem[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  coursework?: string[];
}

/** A name with a short detail, e.g. a language and its level, or a certificate and its issuer. */
export interface LabeledItem {
  name: string;
  detail: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  /** True for things I'm still learning, shown with a "learning" label. */
  learning?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export type ProjectStatus = 'completed' | 'in-progress';

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  status: ProjectStatus;
  repoUrl?: string;
  liveUrl?: string;
}

export interface AiPractice {
  title: string;
  description: string;
}

export interface AiSection {
  intro: string;
  practices: AiPractice[];
}

export interface ContactLink {
  label: string;
  /** Shown text, e.g. the email address or the profile handle. */
  value: string;
  url: string;
}

export interface Contact {
  heading: string;
  message: string;
  links: ContactLink[];
  /** Labels for the "copy email" button. */
  copyLabel: string;
  copiedLabel: string;
}

/** The downloadable CV (PDF in the public/ folder). */
export interface Cv {
  /** Path inside public/, e.g. 'files/cv.pdf'. */
  url: string;
  /** File name used when the visitor downloads it. */
  fileName: string;
  title: string;
  description: string;
  /** Small details under the title, e.g. "PDF · 1 page · 46 KB". */
  meta: string;
  downloadLabel: string;
  viewLabel: string;
}

export interface PortfolioData {
  nav: NavLink[];
  headings: SectionHeadings;
  profile: Profile;
  about: About;
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  projects: Project[];
  ai: AiSection;
  cv: Cv;
  contact: Contact;
}
