/* eslint-disable no-console */
import { NextResponse } from "next/server";
import prisma from "@/lib/utils";

// 一覧を取得する
export async function GET() {
  const projects = await prisma.project.findMany();

  const formattedPosts = projects.map((project) => ({
    ...project,
    createdAt: new Date(project.createdAt).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Asia/Tokyo",
    }),
  }));

  return NextResponse.json(formattedPosts);
}
