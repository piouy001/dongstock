import { useEffect } from "react";
import { useThemeDispatch, useThemeState } from "context/ThemeContext";

export const useThemeEffect = () => {
  const { theme } = useThemeState();
  const dispatch = useThemeDispatch();

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    dispatch({
      type: "setSystemTheme",
      systemTheme: systemPrefersDark ? "dark" : "light",
    });
  }, [dispatch]);

  useEffect(() => {
    if (theme !== "default") {
      document.body.dataset.theme = theme;
    }
  }, [theme]);
};
