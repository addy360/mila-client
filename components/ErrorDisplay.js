import React from "react";
import { useFramer } from "../hooks/useframer";
import Backdrop from "./Backdrop";

function ErrorDisplay({ handleClose, error }) {
  const { dropInVariants, motion } = useFramer();
  let message;
  try {
    message = JSON.stringify(error.response.data.data.errors, null, 4);
  } catch (error) {
    message = "Something went wrong!";
  }
  return (
    <Backdrop handleClose={handleClose}>
      <motion.div
        variants={dropInVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-10 md:top-40 bottom-10 md:bottom-40 left-10 md:left-40 right-10 md:right-40 bg-prisec-100 bg-opacity-70 shadow-lg rounded-md p-4 overflow-x-auto"
      >
        <p className="text-center text-7xl my-4  ">
          Error
          <span className=" ml-3 animate-spin inline-block "> 🎃</span>
        </p>
        <p className="text-center text-secondary-900">{message}</p>
      </motion.div>
    </Backdrop>
  );
}

export default ErrorDisplay;
