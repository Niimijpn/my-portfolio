import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function Page({
  data,
}: {
  data: { name: string; description: string; id: string; overview: string };
}) {
  return (
    <Card className="w-[300px] lg:w-[400px]">
      <Image
        alt="Picture of the author"
        className="flex justify-center"
        height={200}
        src={`/projects/${data.id}/1.png`}
        width={400}
      />
      <hr />
      <CardTitle className="mt-1 text-center md:mt-2">{data.name}</CardTitle>
      <CardDescription className="mt-1 min-h-[80px] p-1 text-left md:mt-2 md:p-2">
        {data.overview}
      </CardDescription>
      <CardFooter className="mt-2 flex justify-center md:mt-4">
        <Button asChild className="rounded-[0.5rem]" variant="outline">
          <Link href={`./projects/${data.id}`}>詳細</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
