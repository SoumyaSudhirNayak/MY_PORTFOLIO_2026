export interface Achievement {
  id: string;
  title: string;
  organization?: string;
  year: string;
  description?: string;
  relatedProject?: string;
  credential?: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  type: "project" | "achievement" | "education" | "future";
}

export interface Technology {
  name: string;
  icon?: string;
  category: string;
  libraries?: string[];
  projects?: string[];
  description?: string;
}


export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  link?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
