import { sections } from "@/constants/sections";
import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="fixed bottom-5 w-10/12 left-1/2 -translate-x-1/2 justify-between flex items-center rounded-xl border border-border-2 bg-bg-2 lg:hidden z-10 max-w-sm">
      {sections.map(({ id, href, ariaLabel, icon: Icon }) => {
        return (
          <Link key={id} aria-label={ariaLabel} href={href}>
            <button
              aria-label={ariaLabel}
              className="outline-none border-none cursor-pointer p-4"
            >
              <Icon className="text-text-2" />
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
