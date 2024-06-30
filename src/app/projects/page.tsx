"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Projects from "@/components/elements/projects";
import Provider from "@/layouts/providers";

function Page() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await fetch("/api/prisma", {
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Projects data={data} />
    </main>
  );
}

const App = () => (
  <Provider>
    <Page />
  </Provider>
);

export default App;
