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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <div className="px-20">
      <Table className="">
        <TableCaption>Nippou</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Visual</TableHead>
            <TableHead className="">Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            .filter((item: { title: string; image: string }) =>
              item.title.includes("日報")
            )
            .toReversed()
            .map(
              (item: { title: string; image: string }) =>
                item.title.length > 0 && (
                  <TableRow>
                    <TableCell className="">
                      <Image
                        alt="nippou"
                        height={100}
                        src={`${item.image}`}
                        width={100}
                      />
                    </TableCell>
                    <TableCell>
                      <Link
                        className="p-10 pl-0"
                        href={`https://scrapbox.io/toB-no-nikki/${item.title}`}
                      >
                        {item.title}
                      </Link>
                    </TableCell>
                  </TableRow>
                )
            )}
        </TableBody>
      </Table>
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
