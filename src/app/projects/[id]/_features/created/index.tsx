export default function Page({
  data,
}: {
  data: { year: string; state: string };
}) {
  return (
    <div className="mt-4 text-sm font-bold">
      <div className="">開発開始年度: {data.year}年</div>
      <div className="">開発状況: {data.state}</div>
    </div>
  );
}
