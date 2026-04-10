import FigmaIcon from "@/components/Icons/FigmaIcon";
import GithubIcon from "@/components/Icons/GithubIcon";
import { IProject } from "@/types/Projects";
import { GlobeIcon } from "lucide-react";

export const projects: IProject[] = [
  {
    id: "1",
    name: "projects.neovim.name",
    urlImage:
      "https://res.cloudinary.com/dder8kjda/image/upload/v1728621862/Screenshot_2024-10-10_23-43-44_yfxwr2.png",
    description: "projects.neovim.description",
    stack: ["Lua", "Neovim", "React", "NodeJS"],
    buttons: [
      {
        id: "1",
        label: "projects.buttons.preview",
        icon: GlobeIcon,
        url: "https://github.com/rrojas1296/nvim-2026",
        buttonType: "filled",
      },
      {
        id: "2",
        label: "projects.buttons.github",
        icon: GithubIcon,
        url: "https://github.com/rrojas1296/nvim-2026",
        buttonType: "secondary",
      },
    ],
  },
  {
    id: "2",
    name: "projects.devflow.name",
    urlImage:
      "https://res.cloudinary.com/dxkd8sigp/image/upload/v1775853412/20260410_15h36m06s_grim_izpai6.png",
    description: "projects.devflow.description",
    stack: ["React", "Typescript", "Zustand", "NodeJS", "Next.js"],
    buttons: [
      {
        id: "1",
        label: "projects.buttons.figma",
        icon: FigmaIcon,
        url: "https://www.figma.com/design/KKjm6eY2OABmVYy9z7EKWk/Devflow?node-id=0-1&t=nK1NHJIGKOFYLUuS-1",
        buttonType: "filled",
      },
      {
        id: "2",
        label: "projects.buttons.github",
        icon: GithubIcon,
        url: "https://github.com/rrojas1296/devflow-client",
        buttonType: "secondary",
      },
    ],
  },
];
