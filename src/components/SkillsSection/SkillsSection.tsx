import { skills } from "@/constants/skills";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SkillsSection = () => {
  const t = useTranslations("Skills");
  return (
    <div className="mt-35 w-10/12 max-w-7xl mx-auto">
      <h1 className="font-bold text-3xl text-text-1">{t("title")}</h1>
      <h2 className="text-text-2 text-sm mt-1">{t("subtitle")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 mt-10">
        {skills.map(({ id, label, icon: Icon, image }) => {
          return (
            <div
              className="rounded-lg bg-bg-2 border border-border-2 h-10 flex items-center justify-center text-sm gap-3"
              key={id}
            >
              {Icon ? (
                <Icon className="w-6 h-6 text-black dark:text-white" />
              ) : (
                <Image src={image} alt={label} className="w-6 h-6" />
              )}
              <span className="text-text-1"> {label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
