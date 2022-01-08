import { useContext } from "react";
import PostContext from "../context/PostContext";

export const usePostContext = () => {
  return useContext(PostContext);
};
