import { skills } from "@/constants/skills";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../Button/Button";
import { GlobeIcon } from "lucide-react";
import GithubIcon from "../Icons/GithubIcon";
import Link from "next/link";

const projects = [
  {
    id: "1",
    name: "projects.neovim.name",
    urlImage:
      "https://res.cloudinary.com/dder8kjda/image/upload/v1728621862/Screenshot_2024-10-10_23-43-44_yfxwr2.png",
    description: "projects.neovim.description",
    stack: ["Lua", "Neovim", "React", "NodeJS"],
    githubUrl: "https://github.com/rrojas1296/nvim-2026",
    webUrl: "https://github.com/rrojas1296/nvim-2026",
  },
];

const ProjectsSection = () => {
  const t = useTranslations("Projects");
  return (
    <div id="projects" className="mt-35 lg:mt-55 w-10/12 max-w-7xl mx-auto">
      <h1 className="font-bold text-3xl text-text-1">{t("title")}</h1>
      <h2 className="text-text-2 text-sm mt-1">{t("subtitle")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {projects.map(
          ({ id, name, urlImage, description, stack, githubUrl, webUrl }) => {
            return (
              <div
                key={id}
                className="p-3 border border-border-2 rounded-lg"
                style={{
                  backgroundImage: "var(--bg-linear)",
                }}
              >
                <Image
                  className="w-full h-60 object-cover block rounded-lg"
                  src={urlImage}
                  alt={name}
                  width="400"
                  height="400"
                />
                <h1 className="text-text-1 text-lg font-medium mt-3">
                  {t(name)}
                </h1>
                <p className="text-sm text-text-2 mt-1">{t(description)}</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {stack.map((s) => {
                    const skill = skills.find((sk) => sk.label === s);
                    if (!skill) return;
                    const { icon: Icon, label } = skill;

                    return (
                      <div
                        key={skill.id}
                        className="flex items-center gap-3 px-3 h-9 rounded-lg bg-bg-badge w-fit border border-border-1 text-text-1 text-sm"
                      >
                        {Icon && <Icon className="w-5 h-5" />} {label}
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3 font-medium">
                  <Link href={githubUrl} target="_blank">
                    <Button className="w-full">
                      <GlobeIcon className="w-5 h-5" />
                      {t("projects.buttons.preview")}
                    </Button>
                  </Link>
                  <Link href={webUrl} target="_blank">
                    <Button className="w-full bg-black dark:bg-white text-white dark:text-black">
                      <GithubIcon className="w-5 h-5" />
                      {t("projects.buttons.github")}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
