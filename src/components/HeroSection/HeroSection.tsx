"use client";
import HeroImage from "@/assets/HeroImage.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { RocketIcon } from "lucide-react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import Button from "../Button/Button";
import { scrollToSection } from "@/lib/scrollToSection";

const HeroSection = () => {
  const t = useTranslations("Hero");
  return (
    <section
      id="hero"
      className="h-screen relative"
      style={{
        backgroundImage: "var(--bg-hero)",
      }}
    >
      <div className="w-10/12 max-w-7xl flex justify-between items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="max-w-125 flex flex-col gap-5">
          <div className="flex flex-col">
            <p className="text-text-2 text-sm">{t("role")}</p>
            <p className="text-4xl lg:text-6xl leading-normal lg:leading-23 text-text-1 font-bold">
              {t("name")}
            </p>
            <p className="text-sm text-text-2">{t("description")}</p>
          </div>
          <div className="flex gap-3">
            <GithubIcon className="text-text-1" />
            <LinkedinIcon className="text-text-1" />
            <InstagramIcon className="text-text-1" />
          </div>
          <Button
            className="w-fit px-5"
            onClick={() => scrollToSection("contact")}
          >
            {t("contactButton")}
            <RocketIcon className="text-text-3 w-5 h-5" />
          </Button>
        </div>
        <Image
          className="hidden lg:block w-6/12"
          src={HeroImage}
          alt="HeroImage"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
