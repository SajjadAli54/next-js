import { faker } from "@faker-js/faker";
import fs from "fs";

let users = generateFakeData();
// saveData(users);

interface User {
  id: string;
  username: string;
  email: string;
}

function readData(): User[] {
  let users: User[] = [];
  fs.readFile("users.csv", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading data:", err);
    } else {
      const lines = data.split("\n");
      users = lines.map((line) => {
        const [id, username, email] = line.split(",");
        return { id, username, email };
      });
      console.log("Data read successfully!");
      console.log(users);
    }
  });
  return users;
}

export function getUsers() {
  return users;
}

export function getUser(id: string) {
  return users.find((user) => user.id === id);
}

export function addUser(user: User) {
  user.id = faker.string.uuid();
  users.push(user);
  //   saveData(users);
}

function saveData(users: User[]) {
  const csvData = users
    .map((user) => `${user.id},${user.username},${user.email}`)
    .join("\n");
  fs.writeFile("users.csv", csvData, (err) => {
    if (err) {
      console.error("Error saving data:", err);
    } else {
      console.log("Data saved successfully!");
    }
  });
}

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
