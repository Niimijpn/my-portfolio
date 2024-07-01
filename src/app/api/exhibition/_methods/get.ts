/* eslint-disable no-console */
import { NextResponse } from "next/server";
import prisma from "@/lib/utils";

// 一覧を取得する
const handler = async () => {
  const exhibitions = await prisma.exhibition.findMany();

  const formattedPosts = exhibitions.map((e) => ({
    ...e,
    createdAt: new Date(e.createdAt).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Asia/Tokyo",
    }),
  }));

  return NextResponse.json(formattedPosts);
};

export const GET = handler;
