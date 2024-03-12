// Route Handler to handle HTTP Requests
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

import prisma from "@/prisma/migrations/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}

export async function POST(request: NextRequest) {
  const user = await request.json();
  const validationResult = schema.safeParse(user);
  if (!validationResult.success)
    return NextResponse.json(validationResult.error.errors);
  return NextResponse.json(user, { status: 201 });
}
