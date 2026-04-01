import { create } from "zustand";

export type ITheme = "dark" | "light";

export const THEME_KEY = "theme";

interface IThemeStore {
  theme?: ITheme;
  setTheme: (theme: ITheme) => void;
}

export const useThemeStore = create<IThemeStore>((set) => ({
  theme: undefined,
  setTheme: (theme: ITheme) => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
    set({ theme });
  },
}));
