import { sections } from "@/constants/sections";

const BottomNav = () => {
  return (
    <div className="fixed bottom-5 w-10/12 left-1/2 -translate-x-1/2 justify-between flex items-center rounded-xl border border-border-2 bg-bg-2 lg:hidden z-10">
      {sections.map(({ id, icon: Icon }) => {
        return (
          <button
            key={id}
            className="outline-none border-none cursor-pointer p-4"
          >
            <Icon className="text-text-2" />
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
