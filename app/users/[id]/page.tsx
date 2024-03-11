import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailsPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <h1>UserDetails {id}</h1>;
};

export default UserDetailsPage;
