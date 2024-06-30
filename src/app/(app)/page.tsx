/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Profile from "@/components/elements/profile";
import Provider from "@/layouts/providers";

function Page() {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch("/api/profile", {
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
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <Image alt="Niimi Logo" height={400} src="/icon.png" width={400} />
        <Profile data={data} />
      </div>
    </main>
  );
}

const App = () => (
  <Provider>
    <Page />
  </Provider>
);

export default App;
