// Route Handler to handle HTTP Requests
import { NextRequest, NextResponse } from "next/server";
import { getUsers, addUser } from "./users-service";

export function GET(request: NextRequest) {
  const users = getUsers();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const user = await request.json();
  if (!user["username" || !user["email"]])
    return NextResponse.json(
      { error: "Name and Email both are required" },
      { status: 400 }
    );
  addUser(user);
  return NextResponse.json(user, { status: 201 });
}
