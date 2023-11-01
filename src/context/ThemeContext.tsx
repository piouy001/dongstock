import { useTheme } from "hooks/theme/useTheme";
import { produce } from "immer";
import React, { Dispatch, useContext, useReducer } from "react";
import { ThemeProvider } from "styled-components";

import Colors from "theme/colors";

type Theme = "dark" | "light" | "default";
type SystemTheme = "dark" | "light" | "not-ready";

type ThemeState = {
  theme: Theme;
  systemTheme: SystemTheme;
};

const INITIAL_STATE = {
  theme: "default",
  systemTheme: "not-ready",
} as const;

const NOOP = () => {};

const ThemeContext = React.createContext<ThemeState>(INITIAL_STATE);

type ThemeDispatch = Dispatch<Action>;
const ThemeDispatchContext = React.createContext<ThemeDispatch>(NOOP);

type Action =
  | { type: "enableDarkMode" }
  | { type: "enableLightMode" }
  | { type: "setSystemTheme"; systemTheme: SystemTheme };

const themeReducer = produce((draft: ThemeState, action: Action) => {
  switch (action.type) {
    case "enableDarkMode":
      draft.theme = "dark";
      break;
    case "enableLightMode":
      draft.theme = "light";
      break;
    case "setSystemTheme":
      draft.systemTheme = action.systemTheme;
      break;
    default:
      break;
  }
});

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeContext.Provider value={state}>
        <ThemeContextInner>{children}</ThemeContextInner>
      </ThemeContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};

const ThemeContextInner = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  const colors = (() => {
    if (theme === "dark") {
      return {
        ...Colors.darkTheme,
      };
    }
    return {
      ...Colors.lightTheme,
    };
  })();

  return <ThemeProvider theme={colors}>{children}</ThemeProvider>;
};

export const useThemeState = () => {
  const state = useContext(ThemeContext);
  if (!state) {
    throw new Error("ThemeContextProvider not found");
  }
  return state;
};

export const useThemeDispatch = () => {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) {
    throw new Error("ThemeContextProvider not found");
  }
  return dispatch;
};
