"use client";
import { sections } from "@/constants/sections";
import { useRouter } from "@/i18n/navigation";
import { useThemeStore } from "@/store/useThemeStore";
import { GlobeIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn/dropdown-menu";
import { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<null | HTMLDivElement>(null);
  const t = useTranslations("Header");
  const router = useRouter();

  const { setTheme, theme } = useThemeStore();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLocale = (locale: string) => {
    router.replace("/", {
      locale,
    });
  };
  useEffect(() => {
    const method = () => {
      const scroll = window.scrollY;
      if (scroll > 50) {
        headerRef.current?.classList.add("active-header");
      } else {
        headerRef.current?.classList.remove("active-header");
      }
    };
    document.addEventListener("scroll", method);
    return () => {
      document.removeEventListener("scroll", method);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full z-20 h-20 flex items-end justify-center lg:h-25">
      <div
        ref={headerRef}
        className="flex px-4 justify-between py-2 border border-transparent items-center  rounded-xl w-10/12 max-w-7xl transition-all"
      >
        <Link className="font-bold text-xl text-text-1" href="/">
          Drojas
        </Link>
        <div className="hidden lg:flex gap-8">
          {sections.map(({ id, href, label }) => {
            return (
              <Link key={id} href={href} className="text-text-1 text-sm">
                {t(label)}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer h-10 w-10 flex items-center justify-center"
            onClick={handleTheme}
          >
            {theme === "dark" ? (
              <MoonIcon className="text-text-1" />
            ) : (
              <SunIcon className="text-text-1" />
            )}
          </button>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="cursor-pointer h-10 w-10 flex items-center justify-center">
                <GlobeIcon className="text-text-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="flex justify-between"
                onClick={() => handleLocale("es")}
              >
                <span>{t("locale.es")}</span> <span>🇪🇸</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex justify-between"
                onClick={() => handleLocale("en")}
              >
                <span>{t("locale.en")} </span> <span>🇺🇸</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
