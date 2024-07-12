"use client";

import useSWR from "swr";
import Created from "@/app/projects/[id]/_features/created";
import Description from "@/app/projects/[id]/_features/description";
import GithubLink from "@/app/projects/[id]/_features/githubLink";
import ImageShow from "@/app/projects/[id]/_features/imageShow";
import Skills from "@/app/projects/[id]/_features/skills";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  return res.json();
};

export default function GamePage({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(`/api/projects/${params.id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="mt-8 text-left text-xl font-bold md:text-2xl">
        {data.name}
      </h1>
      <div className="mt-4">
        <ImageShow data={data} />
        <Created data={data} />
        <Skills data={data} />
        <GithubLink data={data} />
        <Description data={data} />
      </div>
    </div>
  );
}
