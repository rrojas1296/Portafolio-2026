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
];
