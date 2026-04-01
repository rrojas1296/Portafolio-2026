"use client";
import { ITheme, THEME_KEY, useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}
const ThemeProvider = ({ children }: Props) => {
  const { setTheme, theme } = useThemeStore();

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    if (!localTheme) {
      const isDarkOsTheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      localStorage.setItem(THEME_KEY, isDarkOsTheme ? "dark" : "light");
      setTheme(isDarkOsTheme ? "dark" : "light");
    } else {
      setTheme(localTheme as ITheme);
    }
  }, []);
  if (!theme) return;
  return children;
};

export default ThemeProvider;
