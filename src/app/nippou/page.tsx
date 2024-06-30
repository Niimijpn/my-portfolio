/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
// 時間があれば、以下のほうがいいかもしれない
// https://ui.shadcn.com/docs/components/data-table

"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import CustomTable from "@/components/elements/nippou";
import Pagination from "@/components/global/pagination";
import Provider from "@/layouts/providers";

function Page() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["nippou", currentPageNumber],
    queryFn: async () => {
      const response = await fetch("/api/nippou", {
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

  // dataが配列かどうかをチェックし、そうでない場合は空の配列
  const filteredItems = (Array.isArray(data) ? data : [])
    .filter((item: { title: string; image: string }) =>
      item.title.includes("日報")
    )
    .reverse();
  const totalItems = filteredItems.length;
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const offset = (currentPageNumber - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(offset, offset + itemsPerPage);

  return (
    <div className="p-20">
      <Pagination
        currentPageNumber={currentPageNumber}
        onPageChange={setCurrentPageNumber}
        totalPages={totalPages}
      />
      <hr />
      <CustomTable items={paginatedItems} />
    </div>
  );
}

const App = () => (
  <Provider>
    <Page />
  </Provider>
);

export default App;
