"use client";
import { sections } from "@/constants/sections";
import { useRouter } from "@/i18n/navigation";
import { useThemeStore } from "@/store/useThemeStore";
import { LanguagesIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn/dropdown-menu";
import { useEffect, useRef } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const Header = () => {
  const active = useActiveSection();
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
              <Link
                key={id}
                href={href}
                className={cn(
                  "text-text-1 text-sm",
                  active === id && "text-primary-500 font-bold",
                )}
              >
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
              <MoonIcon className="text-text-1 h-5 w-5" />
            ) : (
              <SunIcon className="text-text-1 h-5 w-5" />
            )}
          </button>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="cursor-pointer h-10 w-10 flex items-center justify-center">
                <LanguagesIcon className="text-text-1 h-5 w-5" />
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
