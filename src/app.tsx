import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import routes from "./routeConfig";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
