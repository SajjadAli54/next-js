import { NextRequest, NextResponse } from "next/server";
import { getUser, updateUser } from "../users-service";

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
  user.id = id;
  const res = updateUser(user);
  if (res?.success) return NextResponse.json(user, { status: 200 });
  NextResponse.json({ error: "User not found" }, { status: 404 });
}
