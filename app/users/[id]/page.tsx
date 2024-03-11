import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailsPage = ({ params: { id } }: Props) => {
  return <h1>UserDetails {id}</h1>;
};

export default UserDetailsPage;
