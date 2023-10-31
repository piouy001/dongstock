import Colors from "./colors";
import { SemanticColors } from "./colors/types";

type Theme = "light" | "dark";
type VariableKey = keyof SemanticColors;
type ThemedPalette = Record<VariableKey, string>;

const themeVariableSets: Record<Theme, SemanticColors> = {
  light: Colors.lightTheme,
  dark: Colors.darkTheme,
};

const buildCssVariables = (variables: SemanticColors) => {
  const keys = Object.keys(variables) as (keyof SemanticColors)[];
  return keys.reduce((acc, key) => acc.concat(`--${key.replace(/_/g, "-")}: ${variables[key]};`, "\n"), "");
};

export const themes = {
  light: buildCssVariables(themeVariableSets.light),
  dark: buildCssVariables(themeVariableSets.dark),
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, "-")})`;

const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[];

export const themedPalette: ThemedPalette = variableKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as ThemedPalette);
