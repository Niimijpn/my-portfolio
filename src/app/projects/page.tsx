/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import useSWR from "swr";
import Card from "@/app/projects/_features/card";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  return res.json();
};
export default function Page() {
  const { data, error } = useSWR(`/api/projects`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1 className="mt-8 text-left text-xl font-bold md:text-2xl">Projects</h1>
      <div className="mt-4 text-left text-sm md:text-base">
        過去, または現在進行中のプロジェクトを一覧表示しています.
        プロジェクトの詳細については, それぞれの個別ページをご覧ください.
      </div>
      <div className="flex justify-center">
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {data.map((project: any) => (
            <Card key={project.id} data={project} />
          ))}
        </div>
      </div>
    </>
  );
}
