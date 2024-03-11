import { NextRequest, NextResponse } from "next/server";
import { deleteUser, getUser, updateUser } from "../services/users-service";
import schema from "../schema";

interface Props {
  params: {
    id: string;
  };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  const user = getUser(id);
  if (!user)
    return NextResponse.json({ error: "User Not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const user = await request.json();
  const validatin = schema.safeParse(user);
  if (!validatin.success) return NextResponse.json(validatin.error.errors);
  user.id = id;
  const res = updateUser(user);
  if (res?.success) return NextResponse.json(user, { status: 200 });
  NextResponse.json({ error: "User not found" }, { status: 404 });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  const response = deleteUser(id);
  if (response?.success)
    return NextResponse.json(response?.obj, { status: 200 });
  return NextResponse.json({ error: "User Not Fund" }, { status: 404 });
}
