"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Provider from "@/layouts/providers";

function Page() {
  const { data = [], status } = useQuery({
    queryKey: ["roll"],
    queryFn: async () => {
      const response = await fetch("/api/roll", {
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
    <div className="p-24 text-left">
      <h1 className="p-4 pl-0 text-3xl font-bold">役割</h1>
      {data.map((roll: { id: string; title: string }) => (
        <div key={roll.id} className="mb-8">
          <h2 className="text-2xl">{roll.title}</h2>
        </div>
      ))}
    </div>
  );
}

const App = () => (
  <Provider>
    <Page />
  </Provider>
);

export default App;
