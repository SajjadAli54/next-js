import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

import prisma from "@/prisma/migrations/client";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  if (!user)
    return NextResponse.json({ error: "User Not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const user = await request.json();
  const validatin = schema.safeParse(user);
  if (!validatin.success) return NextResponse.json(validatin.error.errors);
  user.id = id;
  // const res = updateUser(user);
  const res = await prisma.user.update({
    where: { id: user.id },
    data: user,
  });
  if (res) return NextResponse.json(user, { status: 200 });
  NextResponse.json({ error: "User not found" }, { status: 404 });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  // const response = deleteUser(id);
  const response = prisma.user.delete({ where: { id: parseInt(id) } });
  if (response) return NextResponse.json(response, { status: 200 });
  return NextResponse.json({ error: "User Not Fund" }, { status: 404 });
}
