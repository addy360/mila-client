import React from "react";
import { useFramer } from "../hooks/useframer";
const { motion } = useFramer();

function Backdrop({ children, handleClose }) {
  const handleClick = (e) => {
    e.target.id === "backdrop" ? handleClose() : null;
  };
  return (
    <motion.div
      layout
      id="backdrop"
      className="fixed z-50 inset-0 bg-black bg-opacity-75 grid place-content-center  "
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
