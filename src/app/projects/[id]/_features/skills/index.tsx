export default function Page({ data }: { data: { skilld: string } }) {
  return (
    <>
      <h2 className="mt-8 text-left text-base font-bold md:text-xl">Skills</h2>
      <div className="mt-4">
        <img alt={`${data.skilld}`} src={`${data.skilld}`} />
      </div>
    </>
  );
}
