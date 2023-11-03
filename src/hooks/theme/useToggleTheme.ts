import { useThemeDispatch } from "contexts/ThemeContext";

import { useTheme } from "./useTheme";

export function useToggleTheme() {
  const dispatch = useThemeDispatch();
  const theme = useTheme();

  const save = (value: "light" | "dark") => {
    localStorage.setItem("theme", value);
  };

  const toggle = () => {
    if (!theme) return;
    if (theme === "dark") {
      dispatch({ type: "enableLightMode" });
      save("light");
    } else {
      dispatch({ type: "enableDarkMode" });
      save("dark");
    }
  };

  return [theme, toggle] as const;
}
