import React from "react";

import DomesticScreen from "components/domestic/DomesticScreen";
import WorldStockScreen from "components/worldstock/WorldStockScreen";
import MainScreen from "components/main/MainScreen";

import { DOMESTIC_URL, WORLDSTOCK_URL } from "constants/URLConstant";

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
