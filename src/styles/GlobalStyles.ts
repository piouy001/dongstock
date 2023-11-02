import { createGlobalStyle } from "styled-components";

import { themes } from "../theme/Theme";

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

body{
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.onBackground};
  min-height: 100vh;
  min-height: 100dvh;
  height: 300vh;
}

::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: #ccc;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.surfaceVariant};
  border-radius:8px;
}
`;

export default GlobalStyles;
