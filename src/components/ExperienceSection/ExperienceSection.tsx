import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../shadcn/hover-card";

const experiences = [
  {
    name: "timeline.experiences.jabu.name",
    role: "timeline.experiences.jabu.role",
    date: "timeline.experiences.jabu.date",
    description: "timeline.experiences.jabu.description",
    className: "left-1/12",
  },
  {
    name: "timeline.experiences.inetum.name",
    role: "timeline.experiences.inetum.role",
    date: "timeline.experiences.inetum.date",
    description: "timeline.experiences.inetum.description",
    className: "left-4/12",
  },
  {
    name: "timeline.experiences.lapzo.name",
    role: "timeline.experiences.lapzo.role",
    date: "timeline.experiences.lapzo.date",
    description: "timeline.experiences.lapzo.description",
    className: "left-7/12",
    present: true,
  },
];

const ExperienceSection = () => {
  const t = useTranslations("Experience");
  return (
    <div id="experience" className="mt-35 w-10/12 max-w-7xl mx-auto">
      <h1 className="font-bold text-3xl text-text-1">{t("title")}</h1>
      <h2 className="text-text-2 text-sm mt-1">{t("subtitle")}</h2>

      <div className="mt-10 lg:mt-20">
        <div className="h-4 bg-primary-500 rounded-2xl relative hidden lg:block">
          <p className="text-text-2 text-sm absolute left-0 top-0 -translate-y-[calc(100%+12px)]">
            {t("timeline.past")}
          </p>
          {experiences.map(
            ({ name, role, date, className, present, description }, i) => {
              return (
                <HoverCard key={i}>
                  <HoverCardTrigger asChild>
                    <div
                      className={cn(
                        "flex flex-col gap-3 absolute top-1/2 -translate-y-14",
                        className,
                      )}
                    >
                      <p className="text-text-1 font-semibold text-sm">
                        {t(date)}
                      </p>
                      <div className="w-12 h-12 border-4 border-white rounded-full bg-primary-500" />

                      <div>
                        <h2 className="text-xl font-semibold text-text-1">
                          {t(name)}
                        </h2>
                        <p className="text-text-2 text-sm mt-1">{t(role)}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="text-text-1 font-semibold text-xl flex items-center gap-3">
                      {t(name)}
                      <span>-</span>
                      <span className="text-text-2 text-sm font-normal">
                        {t(date)}
                      </span>
                      {present && (
                        <span className="text-text-2 text-sm font-normal">
                          ({t("timeline.toPresent")})
                        </span>
                      )}
                    </h1>
                    <h2 className="text-text-2 text-sm mt-1">{t(role)}</h2>
                    <p className="text-text-1 text-sm mt-3">{t(description)}</p>
                  </HoverCardContent>
                </HoverCard>
              );
            },
          )}
          <p className="text-text-2 text-sm absolute right-0 top-0 -translate-y-[calc(100%+12px)]">
            {t("timeline.present")}
          </p>
        </div>

        <div className="flex gap-4 lg:hidden">
          <div className="w-4 rounded-2xl bg-primary-500" />
          <div className="flex flex-col gap-5 w-full">
            {experiences.map(
              ({ name, role, date, description, present }, i) => {
                return (
                  <div
                    key={i}
                    className="border border-border-2 rounded-lg bg-bg-2 p-5 w-full"
                  >
                    <h1 className="text-text-1 font-semibold text-xl flex items-center gap-3">
                      {t(name)}
                      <span>-</span>
                      <span className="text-text-2 text-sm font-normal">
                        {t(date)}
                      </span>
                      {present && (
                        <span className="text-text-2 text-sm font-normal">
                          ({t("timeline.toPresent")})
                        </span>
                      )}
                    </h1>
                    <h2 className="text-text-2 text-sm mt-1">{t(role)}</h2>
                    <p className="text-text-1 text-sm mt-3">{t(description)}</p>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
