import Image from "next/image";
import Profile from "@/components/profile";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <Image alt="Niimi Logo" height={400} src="/icon.png" width={400} />
        <Profile />
      </div>
    </main>
  );
}
