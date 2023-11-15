import { createGlobalStyle } from "styled-components";

import { themes } from "../theme/Theme";

const GlobalStyles = createGlobalStyle`
body {
  ${themes.light}
  transition: all 0.15s cubic-bezier(0.14, 0.97, 0.59, 1);
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
