import { NextResponse } from "next/server";
import prisma from "@/lib/utils";

// 一覧を取得する
export async function GET() {
  const posts = await prisma.post.findMany();

  const formattedPosts = posts.map((post) => ({
    ...post,
    createdAt: new Date(post.createdAt).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Asia/Tokyo",
    }),
  }));

  return NextResponse.json(formattedPosts);
}
