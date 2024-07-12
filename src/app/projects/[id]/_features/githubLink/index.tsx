import Link from "next/link";

export default function Page({ data }: { data: { github: string } }) {
  return (
    <h2 className="mt-8 text-left text-base font-bold md:text-xl">
      <Link href={data.github}>Github Link 🔗</Link>
    </h2>
  );
}
