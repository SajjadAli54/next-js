// Route Handler to handle HTTP Requests
import { NextRequest, NextResponse } from "next/server";
import { getUsers } from "./users-service";

export function GET(request: NextRequest) {
  const users = getUsers();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  return NextResponse.json(body);
}
