"use client";
import { sections } from "@/constants/sections";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/scrollToSection";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const active = useActiveSection();
  return (
    <div className="fixed bottom-5 w-10/12 left-1/2 -translate-x-1/2 justify-between flex items-center rounded-xl border border-border-2 bg-bg-2 lg:hidden z-10 max-w-sm">
      {sections.map(({ id, ariaLabel, icon: Icon }) => {
        return (
          <button
            key={id}
            aria-label={ariaLabel}
            className={cn(
              "outline-none text-text-2 border-none cursor-pointer p-4",
              active === id && "text-primary-500",
            )}
            onClick={() => scrollToSection(id)}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
