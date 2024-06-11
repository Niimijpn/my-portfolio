/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
// page.tsx

"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Image from "next/image";
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
      const response = await fetch("/api/nippou", {
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
      {data
        .filter((item: { title: string; image: string }) =>
          item.title.includes("日報")
        )
        .map(
          (item: { title: string; image: string }) =>
            item.title.length > 0 && (
              <Link
                className="p-4"
                href={`https://scrapbox.io/toB-no-nikki/${item.title}`}
              >
                <div className="flex items-center justify-center">
                  <Image
                    alt="nippou"
                    height={100}
                    src={`${item.image}`}
                    width={100}
                  />
                  <h1>{item.title}</h1>
                </div>
              </Link>
            )
        )}
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
