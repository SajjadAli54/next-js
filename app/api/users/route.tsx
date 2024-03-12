// Route Handler to handle HTTP Requests
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validationResult = schema.safeParse(body);
  if (!validationResult.success)
    return NextResponse.json(validationResult.error.errors);

  const existingUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (existingUser)
    return NextResponse.json(
      { error: "User with this email already exists" },
      { status: 400 }
    );

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(user, { status: 201 });
}
