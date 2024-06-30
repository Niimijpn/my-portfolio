/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

"use client";

import { useQuery } from "@tanstack/react-query";
import Profile from "@/components/elements/print";
import { Skeleton } from "@/components/ui/skeleton";
import Provider from "@/layouts/providers";

function Page() {
  const { data = [], status } = useQuery({
    queryKey: ["resume"],
    queryFn: async () => {
      const response = await fetch("/api/resume", {
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
    for (let i = 0; i < 13; i += 1) {
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
      <Provider>
        <Page />
      </Provider>
    </div>
  </main>
);

export default App;
