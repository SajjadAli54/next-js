import Link from "next/link";
import React, { use } from "react";
import { sort } from "fast-sort";
import User from "../api/users/user-type";
import { getUsers } from "../api/users/services/users-service";

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  let users: User[] = getUsers();
  const sortedUsers = sort(users).asc(
    sortOrder == "email" ? (user) => user.email : (user) => user.username
  );

  return (
    <div>
      <table className="table table-bordered m-4">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Id</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=name">Username</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr className="hover" key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
