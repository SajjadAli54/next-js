// Route Handler to handle HTTP Requests
import { NextRequest, NextResponse } from "next/server";
import { getUsers, addUser } from "./services/users-service";
import schema from "./schema";

export function GET(request: NextRequest) {
  const users = getUsers();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const user = await request.json();
  const validationResult = schema.safeParse(user);
  if (!validationResult.success)
    return NextResponse.json(validationResult.error.errors);
  addUser(user);
  return NextResponse.json(user, { status: 201 });
}
