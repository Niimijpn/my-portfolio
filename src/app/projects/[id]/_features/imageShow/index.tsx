import Image from "next/image";

export default function Page({ data }: { data: { id: string } }) {
  return (
    <Image
      alt="Picture of the author"
      height={200}
      src={`/projects/${data.id}/1.png`}
      width={400}
    />
  );
}
