import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

// suspense オプションを削除
const queryClient = new QueryClient();

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
