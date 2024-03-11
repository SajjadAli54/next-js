import { faker } from "@faker-js/faker";

let users = generateFakeData();

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

export function getUsers(){
    return users;
}

export function getUser(id: string){
    return users.find(user => user.id === id);
}
  