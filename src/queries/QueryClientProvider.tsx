import React from "react";
import { QueryClientProvider as AppQueryClientProvider, QueryCache, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      console.error(error);
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppQueryClientProvider client={queryClient}>{children}</AppQueryClientProvider>;
};

export { ReactQueryDevtools };
export default QueryClientProvider;
