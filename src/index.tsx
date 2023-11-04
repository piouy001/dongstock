import React from "react";

import { createRoot } from "react-dom/client";

import { IS_DEVELOPMENT } from "constants/envConstants";
import QueryClientProvider, { ReactQueryDevtools } from "queries/QueryClientProvider";

import App from "./App";

import "./reset.css";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
      {IS_DEVELOPMENT && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </React.StrictMode>,
);
