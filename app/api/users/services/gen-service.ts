import { faker } from "@faker-js/faker";
import User from "../user-type";

function generateFakeData() {
  const users: User[] = [];
  for (let i = 0; i < 50; i++) {
    const user = {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
    };
    users.push(user);
  }
  return users;
}
