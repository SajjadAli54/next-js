"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="uvageujl">
      {({ open }) => (
        <button onClick={() => open()} className="btn btn-square">
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
