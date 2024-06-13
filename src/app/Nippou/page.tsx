/* eslint-disable react/button-has-type */
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
import React, { useState } from "react";
// import { Scrapbox } from "./ui/interface";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const queryClient = new QueryClient();

function Page() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

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
  // 現在のページ番号を管理するためのstateを作成

  // データをフィルタリング
  const filteredItems = data
    .filter((item: { title: string; image: string }) =>
      item.title.includes("日報")
    )
    .reverse();

  // データの総数
  const totalItems = filteredItems.length;
  console.log(totalItems);

  // 1ページあたりのアイテム数
  const itemsPerPage = 5;

  // 総ページ数
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // console.log(totalPages);

  // ページ番号を増やす関数
  const incrementPageNumber = () => {
    setCurrentPageNumber((prevPageNumber) =>
      prevPageNumber < totalPages ? prevPageNumber + 1 : totalPages
    );
  };

  // ページ番号を減らす関数
  const decrementPageNumber = () => {
    setCurrentPageNumber((prevPageNumber) =>
      prevPageNumber > 1 ? prevPageNumber - 1 : 1
    );
  };

  // フィルタリングしたデータをページネーション
  const offset = (currentPageNumber - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(offset, offset + itemsPerPage);

  return (
    <div className="p-20">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>Visual</TableHead>
            <TableHead className="">Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedItems.map(
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
      <hr />
      <div className="flex justify-between p-10">
        <button onClick={decrementPageNumber}>Previous</button>
        <button onClick={incrementPageNumber}>Next</button>
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
