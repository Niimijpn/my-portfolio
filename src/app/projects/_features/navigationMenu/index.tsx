import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div>
      <div className="flex h-5 items-center space-x-2 text-sm md:space-x-4">
        <Link href="../">
          <div>Home</div>
        </Link>
        <Separator orientation="vertical" />
        <Link href="./">
          <div>Projects</div>
        </Link>
        <Separator orientation="vertical" />
        {/* <Link href="./nippou">
          <div>Nippou</div>
        </Link> */}
      </div>
    </div>
  );
}
