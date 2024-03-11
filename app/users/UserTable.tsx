import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await response.json();

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>User Name</td>
            <td>User Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="hover" key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
