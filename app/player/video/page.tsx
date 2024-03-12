"use client";

import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const VideoPlayer = () => {
  return (
    <CldVideoPlayer
      id="sea-turtle"
      width="1920"
      height="1080"
      src="samples/sea-turtle"
      colors={{
        accent: "#ff0000",
        base: "#00ff00",
        text: "#0000ff",
      }}
      fontFace="Source Serif Pro"
    />
  );
};

export default VideoPlayer;
