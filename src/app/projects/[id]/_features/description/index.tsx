export default function Page({ data }: { data: { description: string } }) {
  return (
    <>
      <h2 className="mt-8 text-left text-base font-bold md:text-xl">
        Description
      </h2>
      <div className="mt-4">{data.description}</div>
    </>
  );
}
