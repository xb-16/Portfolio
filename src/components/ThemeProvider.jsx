import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("auto");
  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored && ["light", "dark", "auto"].includes(stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const isDark = theme === "dark" || (theme === "auto" && media.matches);
      const resolved = isDark ? "dark" : "light";
      setResolvedTheme(resolved);
      root.classList.remove("light", "dark");
      root.classList.add(resolved);
      root.style.colorScheme = resolved;
      if (theme === "auto") {
        root.removeAttribute("data-theme");
      } else {
        root.setAttribute("data-theme", theme);
      }
    };

    applyTheme();
    localStorage.setItem("theme", theme);

    const handler = () => applyTheme();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}