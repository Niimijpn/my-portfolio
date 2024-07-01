"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Provider from "@/layouts/providers";

function Page() {
  const { data = [], status } = useQuery({
    queryKey: ["exhibition"],
    queryFn: async () => {
      const response = await fetch("/api/exhibition", {
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });

  if (status === "pending") {
    return (
      <div className="flex h-lvh items-center justify-center text-black">
        Loadnig...
      </div>
    );
  }

  return (
    <div className="p-24">
      <h1 className="p-4 pl-0 text-3xl font-bold">出展・参加</h1>
      {data.map(
        (exhibition: { id: string; title: string; createdAt: number }) => (
          <div key={exhibition.id} className="mb-8">
            <h2 className="text-2xl">{exhibition.title}</h2>
          </div>
        )
      )}
    </div>
  );
}

const App = () => (
  <Provider>
    <Page />
  </Provider>
);

export default App;
