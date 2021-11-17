import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
function ImageGallery({ images }) {
  const [idx, setIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  if (!images) return null;

  const handleImageSelect = (index) => {
    setIsOpen(true);
    setIdx(index);
  };
  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-4">
        {images.map((src, i) => (
          <img
            height={128}
            loading="lazy"
            src={src}
            className="h-32 w-auto cursor-pointer opacity-80 hover:opacity-100 transition-all shadow-md rounded-md"
            key={i}
            onClick={() => handleImageSelect(i)}
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[idx]}
          nextSrc={images[(idx + 1) % images.length]}
          prevSrc={images[(idx + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIdx((prev) => (prev + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setIdx((prev) => (prev + 1) % images.length)}
        />
      )}
    </div>
  );
}

export default ImageGallery;
