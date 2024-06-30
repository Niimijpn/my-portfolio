export default function Page({
  data,
}: {
  data: { lines: { text: string }[] };
}) {
  return (
    <div>
      {(data.lines ?? [])
        .filter(
          (line: { text: string }, index: number) =>
            index !== 0 && !line.text.includes("https://")
        )
        .map((line: { text: string }) => (
          <p>{line.text}</p>
        ))}
    </div>
  );
}
