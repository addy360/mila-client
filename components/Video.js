import React from "react";

function Video({ src }) {
  return <iframe src={src} frameBorder="0"></iframe>;
}

export default Video;
