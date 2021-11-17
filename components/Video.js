import React from "react";

function Video({ src }) {
  return (
    <div className="w-full h-[0px] pb-[56.75%] relative">
      <iframe
        allowFullScreen
        loading="lazy"
        src={src}
        frameBorder="0"
        className="absolute w-full h-full"
      ></iframe>
    </div>
  );
}

export default Video;
