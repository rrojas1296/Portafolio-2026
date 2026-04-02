import {
  BookOpenIcon,
  BoxIcon,
  BriefcaseBusinessIcon,
  HomeIcon,
  MailIcon,
} from "lucide-react";
export const sections = [
  {
    id: "hero",
    label: "sections.home",
    ariaLabel: "Home section",
    href: "#home",
    icon: HomeIcon,
  },
  {
    id: "about",
    label: "sections.about",
    ariaLabel: "About section",
    href: "#about",
    icon: BookOpenIcon,
  },
  {
    id: "experience",
    label: "sections.experience",
    ariaLabel: "Experience section",
    href: "#experience",
    icon: BriefcaseBusinessIcon,
  },
  {
    id: "projects",
    label: "sections.projects",
    ariaLabel: "Projects section",
    href: "#projects",
    icon: BoxIcon,
  },
  {
    id: "contact",
    label: "sections.contact",
    ariaLabel: "Contact section",
    href: "#contact",
    icon: MailIcon,
  },
];
