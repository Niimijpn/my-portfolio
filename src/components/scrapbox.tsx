/* eslint-disable no-console */
// page.tsx

"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

function Page() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("/api/scrapbox", {
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

  interface Scrapbox {
    title: string;
    user: {
      id: string;
      name: string;
      displayName: string;
      photo: string;
    };
    descriptions: string[];
    pin: number;
    views: number;
    linked: number;
    commitId: string;
    created: number;
    updated: number;
    accessed: number;
    snapshotCreated: number;
    snapshotUpdated: number;
    lines: {
      id: string;
      text: string;
      userId: string;
      created: number;
      updated: number;
    }[];
    image: string;
    collaborators: string[];
    relatedPages: {
      links1hop: string[];
      links2hop: string[];
      projectLinks1hop: string[];
      hasBackLinksOrIcons: boolean;
      search: string;
      searchBackend: string;
    };
    links: string[];
    icons: string[];
    tags: string[];
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {data.lines
        .filter((line: Scrapbox["lines"]) => !line.text.includes("["))
        .map(
          (line: Scrapbox["lines"]) =>
            line.text.length > 0 && <p>{line.text}</p>
        )}
    </main>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
}
