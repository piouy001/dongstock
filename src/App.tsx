import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootContextProvider from "contexts";
import { useThemeDispatch } from "contexts/ThemeContext";
import routes from "routeConfig";
import GlobalStyles from "styles/GlobalStyles";

const router = createBrowserRouter(routes);

const App = () => {
  const themeDispatch = useThemeDispatch();

  const loadTheme = () => {
    const theme = localStorage.getItem("theme");

    if (!theme) return;
    if (theme === "dark") {
      themeDispatch({ type: "enableDarkMode" });
    } else {
      themeDispatch({ type: "enableLightMode" });
    }
    document.body.dataset.theme = theme;
  };

  loadTheme();

  return (
    <RootContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </RootContextProvider>
  );
};

export default App;
