import { useThemeState } from "contexts/ThemeContext";

export const useTheme = () => {
  const darkModeState = useThemeState();

  const theme = (() => {
    if (darkModeState.systemTheme === "not-ready") return "light";
    if (darkModeState.theme !== "default") return darkModeState.theme;
    return darkModeState.systemTheme;
  })();

  return theme;
};
