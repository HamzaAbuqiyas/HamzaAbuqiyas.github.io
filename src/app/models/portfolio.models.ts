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
}

/** Titles shown next to each section. */
export interface SectionHeadings {
  about: string;
  skills: string;
  experience: string;
  projects: string;
  ai: string;
  contact: string;
}

export interface About {
  paragraphs: string[];
  education: Education;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
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
  contact: Contact;
}
