import { faker } from "@faker-js/faker";
import User from "../user-type";
import { readDataSync, saveData } from "./file-service";

let users = readDataSync();

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

export function deleteUser(id: string) {
  const user = getUser(id);
  if (!user) return { success: false };
  users = users.filter((user) => user.id !== id);
  saveData(users);
  return {
    success: true,
    obj: user,
  };
}
