/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const queryClient = new QueryClient();

function Projects() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("/api/prisma", {
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

  return (
    <main className="flex justify-center p-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {data.map((project: any) => (
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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Projects />
    </QueryClientProvider>
  );
}
