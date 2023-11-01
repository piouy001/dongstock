import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "components/layout/Layout";

import RootContextProvider from "context";
import { useThemeDispatch } from "context/ThemeContext";
import routes from "routeConfig";
import GlobalStyles from "theme/GlobalStyles";

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
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </RootContextProvider>
  );
};

export default App;
