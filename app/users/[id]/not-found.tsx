"use client";

import { useRouter } from "next/navigation";
import React from "react";

const UserNotFound = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Requested User Not Found</h1>
      <button className="btn btn-circle" onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
};

export default UserNotFound;
