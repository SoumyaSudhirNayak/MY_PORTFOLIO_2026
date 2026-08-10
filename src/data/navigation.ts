import type { NavItem } from "../types/common";

export const navItems: NavItem[] = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#selected-work" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];

export const mobileNavItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#selected-work" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/assets/resume/SOUMYA_SUDHIR_NAYAK_RESUME.pdf", isExternal: true },
];
