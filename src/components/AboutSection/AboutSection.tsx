import { useTranslations } from "next-intl";
import SecurityAbout from "@/assets/SecurityAbout.png";
import PerformanceAbout from "@/assets/PerformanceAbout.png";
import ArquitectureAbout from "@/assets/ArquitectureAbout.png";
import Image from "next/image";

const AboutSection = () => {
  const t = useTranslations("About");
  return (
    <section className=" max-w-7xl m-auto w-10/12 mt-5">
      <h1 className="font-bold text-text-1 text-3xl">{t("title")}</h1>
      <p className="text-text-2 text-sm mt-1">{t("subtitle")}</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="px-3 py-6 rounded-lg border border-border-2 flex flex-col items-center gap-4"
          style={{
            backgroundImage: "var(--bg-linear)",
          }}
        >
          <Image
            src={SecurityAbout}
            alt="security"
            className="custom-mask-image"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-text-1 font-medium text-lg w-full">
              {t("cards.security.title")}
            </h1>
            <p className="text-sm text-text-2 mt-1">
              {t("cards.security.description")}
            </p>
          </div>
        </div>
        <div
          className="px-3 py-6 rounded-lg border border-border-2 flex flex-col items-center gap-4"
          style={{
            backgroundImage: "var(--bg-linear)",
          }}
        >
          <Image
            src={PerformanceAbout}
            alt="security"
            className="custom-mask-image"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-text-1 font-medium text-lg">
              {t("cards.performance.title")}
            </h1>
            <p className="text-sm text-text-2 mt-1">
              {t("cards.performance.description")}
            </p>
          </div>
        </div>
        <div
          className="px-3 py-6 rounded-lg border border-border-2 flex flex-col items-center gap-4"
          style={{
            backgroundImage: "var(--bg-linear)",
          }}
        >
          <Image
            src={ArquitectureAbout}
            alt="security"
            className="custom-mask-image"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-text-1 font-medium text-lg">
              {t("cards.arquitecture.title")}
            </h1>
            <p className="text-sm text-text-2 mt-1">
              {t("cards.arquitecture.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
