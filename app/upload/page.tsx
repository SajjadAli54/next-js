"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("js67p7rm9egop0dptnsl");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="Simple Image" />
      )}
      <CldUploadWidget
        uploadPreset="uvageujl"
        options={{
          sources: ["local", "url", "camera", "image_search"],
          multiple: false,
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-square">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
