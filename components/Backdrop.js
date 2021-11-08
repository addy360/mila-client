import React from "react";

function Backdrop({ children, handleClose }) {
  const handleClick = (e) => {
    e.target.id === "backdrop" ? handleClose() : null;
  };
  return (
    <div
      id="backdrop"
      className="fixed z-50 inset-0 bg-white bg-opacity-75 grid place-content-center  "
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default Backdrop;
