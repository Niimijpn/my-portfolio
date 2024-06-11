/* eslint-disable no-console */
import { NextResponse } from "next/server";

export async function GET() {
  const PROJECT_NAME = "toB-no-nikki";
  const PAGE_TITLE = "213";

  const res = await fetch(
    // `https://scrapbox.io/api/pages/${PROJECT_NAME}/search/titles`
    `https://scrapbox.io/api/pages/${PROJECT_NAME}/${PAGE_TITLE}/`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  const data = await res.json();
  console.log(data);

  return NextResponse.json(data);
}
