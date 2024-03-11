import { NextRequest, NextResponse } from "next/server";
import { getUser } from "../users-service";

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
