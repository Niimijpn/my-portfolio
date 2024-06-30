/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Profile from "@/components/elements/profile";
import { Skeleton } from "@/components/ui/skeleton";
import Provider from "@/layouts/providers";

function Page() {
  const { data = [], status } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch("/api/profile", {
        cache: "no-cache",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });

  if (status === "pending") {
    const skeletons = [];
    for (let i = 0; i < 5; i += 1) {
      skeletons.push(
        <Skeleton key={i} className="my-2 h-[20px] w-full rounded-full" />
      );
    }

    return <div>{skeletons}</div>;
  }

  return <Profile data={data} />;
}

const App = () => (
  <main className="flex flex-col items-center justify-between p-24">
    <div>
      <Image alt="Niimi Logo" height={400} src="/icon.png" width={400} />
      <Provider>
        <Page />
      </Provider>
    </div>
  </main>
);

export default App;
