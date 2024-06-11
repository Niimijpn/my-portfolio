/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
// page.tsx

"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
// import { Scrapbox } from "./ui/interface";

const queryClient = new QueryClient();

function Page() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("/api/profile", {
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      //   console.log(response);

      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  //   console.log(data);

  return (
    <div>
      {data.lines
        .filter((line: { text: string }) => !line.text.includes("["))
        .map(
          (line: { text: string }) => line.text.length > 0 && <p>{line.text}</p>
        )}
      <div className="text-center">
        <p>This page information is obtained from the Scrapbox API.</p>
        <Link href="https://scrapbox.io/toB-no-nikki/">
          https://scrapbox.io/toB-no-nikki/
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
}
