"use client";

import { useRouter } from "next/navigation";
import React from "react";

// Beautiful NotFound Page with Daisy UI
const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>The Requested Page does not exist</h1>
      <button className="btn" onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
