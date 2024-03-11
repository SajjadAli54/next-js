import fs from "fs";
import User from "../user-type";

export function readDataSync(): User[] {
  let users: User[] = [];
  try {
    const data = fs.readFileSync("users.csv", "utf8");
    const lines = data.split("\n");
    users = lines.map((line) => {
      const [id, username, email] = line.split(",");
      return { id, username, email };
    });
    console.log("Data read successfully!");
    console.log(users);
  } catch (err) {
    console.error("Error reading data:", err);
  }
  return users;
}

export function saveData(users: User[]) {
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
