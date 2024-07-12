import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page({
  data,
}: {
  data: { id: string; name: string; state: string };
}) {
  return (
    <div className="rounded-2xl border-2 ">
      <Link href={`/projects/${data.id}`}>
        <h1 className=" flex min-h-20  items-center p-2 text-left text-xs font-bold  md:p-4 md:text-sm">
          <Avatar>
            <AvatarImage src="https://github.com/Niimijpn.png" />
            <AvatarFallback>👍</AvatarFallback>
          </Avatar>
          <div className="ml-4 flex-col">
            <div className="text-black">{data.name}</div>
            <div>{data.state}</div>
          </div>
        </h1>
      </Link>
    </div>
  );
}
