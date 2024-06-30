/* eslint-disable no-console */
import { NextResponse } from "next/server";

const handler = async () => {
  const res = await fetch(
    `https://scrapbox.io/api/pages/${process.env.PROJECT_NAME}/${process.env.PAGE_TITLE}/`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  const data = await res.json();
  // console.log(data);

  return NextResponse.json(data);
};
export const GET = handler;
