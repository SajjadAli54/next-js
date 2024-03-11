// Route Handler to handle HTTP Requests
import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

interface User {
  id: string;
  username: string;
  email: string;
}

function generateFakeData() {
  const users: User[] = [];
  for (let i = 0; i < 10; i++) {
    const user = {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
    };
    users.push(user);
  }
  return users;
}

export function GET(request: NextRequest) {
  const users: User[] = generateFakeData();
  return NextResponse.json(users);
}
