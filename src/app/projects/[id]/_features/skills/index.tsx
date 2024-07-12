export default function Page({ data }: { data: { skills: string } }) {
  return (
    <>
      <h2 className="mt-8 text-left text-base font-bold md:text-xl">Skills</h2>
      <div className="mt-4">
        <img alt={`${data.skills}`} src={`${data.skills}`} />
      </div>
    </>
  );
}
