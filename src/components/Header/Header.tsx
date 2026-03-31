import { sections } from "@/constants/sections";
import { GlobeIcon, MoonIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <div className="flex justify-between items-center py-6 w-10/12 max-w-7xl fixed left-1/2 -translate-x-1/2">
      <Link className="font-bold text-xl text-text-1" href="/">
        Drojas
      </Link>
      <div className="hidden lg:flex gap-4">
        {sections.map(({ id, href, label }) => {
          return (
            <Link key={id} href={href} className="text-text-1 text-sm">
              {t(label)}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <button className="cursor-pointer h-10 w-10 flex items-center justify-center">
          <MoonIcon className="text-text-1" />
        </button>
        <button className="cursor-pointer h-10 w-10 flex items-center justify-center">
          <GlobeIcon className="text-text-1" />
        </button>
      </div>
    </div>
  );
};

export default Header;
