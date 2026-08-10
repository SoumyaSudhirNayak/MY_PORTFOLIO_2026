export type ProjectVisibility =
  | "public"
  | "github-only"
  | "restricted"
  | "private";

export type ProjectType =
  | "featured"
  | "case-study"
  | "standard"
  | "experiment";

export type ProjectStatus =
  | "completed"
  | "ongoing"
  | "archived"
  | "experimental";

export interface Project {
  id: string;
  number?: string;

  title: string;
  shortTitle?: string;
  subtitle: string;

  type: ProjectType;
  visibility: ProjectVisibility;

  year: string;
  date?: string;

  featured?: boolean;
  status?: ProjectStatus;
  priority?: number;

  category: string[];
  tags?: string[];

  description: string;

  image?: string;
  thumbnail?: string;
  cover?: string;

  technologies: string[];

  links?: {
    live?: string;
    github?: string;
    external?: string;
  };

  role?: string;
  team?: string;

  achievement?: {
    title: string;
    organization?: string;
  };

  caseStudy?: {
    problem?: string;
    context?: string;
    solution?: string;
    architecture?: string;
    implementation?: string;
    challenges?: string[];
    outcome?: string;
    impact?: string;
  };

  gallery?: string[];
  videos?: string[];

  metrics?: {
    label: string;
    value: string;
  }[];

  confidential?: boolean;
}
