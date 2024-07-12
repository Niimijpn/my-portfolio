/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import useSWR from "swr";
import Card from "@/app/(app)/_features/card";

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
      <h2 className="mt-8 w-full text-left text-base font-bold md:text-2xl">
        Projects
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {data.map((project: any) => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </>
  );
}
