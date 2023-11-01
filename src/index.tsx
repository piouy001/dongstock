import React from "react";
import ReactDOM from "react-dom/client";

import App from "App";
import { IS_DEVELOPMENT } from "constants/envConstants";
import RootContextProvider from "context";
import QueryClientProvider, { ReactQueryDevtools } from "queries/QueryClientProvider";

import "./reset.css";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <RootContextProvider>
        <App />
        {IS_DEVELOPMENT && <ReactQueryDevtools initialIsOpen={false} />}
      </RootContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
