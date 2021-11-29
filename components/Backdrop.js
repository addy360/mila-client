import React from "react";
import { useFramer } from "../hooks/useframer";
const { motion, fadeVariants } = useFramer();

function Backdrop({ children, handleClose }) {
  const handleClick = (e) => {
    e.target.id === "backdrop" ? handleClose() : null;
  };
  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      id="backdrop"
      className="fixed z-50 inset-0 bg-white bg-opacity-75 grid place-content-center  "
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
