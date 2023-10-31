import { createGlobalStyle } from "styled-components";
import { themes } from "./Theme";

const GlobalStyles = createGlobalStyle`
body {
  ${themes.light}
  transition: 0.125s all ease-in;
}

@media (prefers-color-scheme: dark) {
  body {
    ${themes.dark}
  }
}

body[data-theme='light'] {
  ${themes.light};
}

body[data-theme='dark'] {
  ${themes.dark};
}

`;

export default GlobalStyles;
