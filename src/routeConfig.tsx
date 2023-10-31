import React from "react";

import { DOMESTIC_URL, WORLDSTOCK_URL } from "constants/URLConstant";
import MainScreen from "components/main/MainScreen/MainScreen";
import DomesticScreen from "components/domestic/DomesticScreen/DomesticScreen";
import WorldStockScreen from "components/worldstock/WorldStockScreen/WorldStockScreen";

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
