import { motion } from "framer-motion";

export const useFramer = () => {
  const fadeVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const dropInVariants = {
    hidden: {
      y: -500,
    },
    visible: {
      y: 0,
    },
  };
  return {
    motion,
    fadeVariants,
    dropInVariants,
  };
};
