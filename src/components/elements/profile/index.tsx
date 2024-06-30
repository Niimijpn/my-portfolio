/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

"use client";

import React from "react";

export default function Page({
  data,
}: {
  data: { lines: { text: string }[] };
}) {
  return (
    <div>
      {(data.lines ?? [])
        .filter((line: { text: string }) => !line.text.includes("https://"))
        .map(
          (line: { text: string }) => line.text.length > 0 && <p>{line.text}</p>
        )}
    </div>
  );
}
