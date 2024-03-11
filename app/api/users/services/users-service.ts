import { faker } from "@faker-js/faker";
import User from "../user-type";
import { readDataSync, saveData } from "./file-service";

let users = readDataSync();

function find(id: string) {
  users.indexOf;
  return users.find((user) => user.id === id) !== null;
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
  saveData(users);
}

export function updateUser(updatedUser: User) {
  if (!updatedUser.id) return { success: false };
  users = users.map((u) => (u.id === updatedUser.id ? updatedUser : u));
  saveData(users);
  return { success: true };
}
