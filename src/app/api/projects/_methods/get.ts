import { NextResponse } from "next/server";
import prisma from "@/lib/utils";


// 一覧を取得する
const handler = async () => {
  const projects = await prisma.project.findMany();

  return NextResponse.json(projects);
};

export const GET = handler;
