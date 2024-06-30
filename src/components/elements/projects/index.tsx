/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects({ data }: { data: any }) {
  // dataが配列でない場合は、空の配列を使用する
  const projects = Array.isArray(data) ? data : [];

  return (
    <main className="flex justify-center p-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project: any) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                alt={project.title}
                height={200}
                src={`/projects/${project.id}.jpeg`}
                width={300}
              />
              <p>{project.description}</p>
            </CardContent>
            <CardFooter>
              <p>{project.url}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
