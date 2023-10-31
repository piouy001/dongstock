import Layout from "components/layout/Layout";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "routeConfig";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
