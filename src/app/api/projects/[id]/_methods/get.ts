import { NextResponse } from "next/server";
import prisma from "@/lib/utils";

type Params = {
  id: string;
};

// 一覧を取得する
const handler = async (request: Request, context: { params: Params }) => {
  const id = context.params.id as string;
  const projects = await prisma.project.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json(projects);
};

export const GET = handler;
