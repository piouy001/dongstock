import React from "react";
import { RouteProps } from "react-router-dom";

import DomesticScreen from "./components/domestic/DomesticScreen";
import WorldStockScreen from "./components/worldstock/WorldStockScreen";

import { DOMESTIC_URL, WORLDSTOCK_URL } from "./constants/URLConstant";
import MainScreen from "./components/main/MainScreen";

const routes = [
  {
    path: "/",
    element: <MainScreen />,
  },
  {
    path: DOMESTIC_URL,
    element: <DomesticScreen />,
  },
  {
    path: WORLDSTOCK_URL,
    element: <WorldStockScreen />,
  },
];

export default routes;
