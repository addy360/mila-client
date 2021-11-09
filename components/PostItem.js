import Image from "next/image";
import React from "react";
import { useFramer } from "../hooks/useframer";

function PostItem({ post, handlePostDetail }) {
  const { motion, fadeVariants } = useFramer();
  if (!post) return <h4>Loading...</h4>;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
      className="border hover:shadow-xl rounded overflow-hidden"
    >
      <div className="h-[250px] md:h-[150px] bg-transparent overflow-hidden relative">
        {/* <img
          src={post.thumbnail}
          className="w-full "
          alt=""
        /> */}
        <Image layout="fill" src={post?.thumbnail} className=" " alt="image" />
      </div>
      <div className="h-1/2 p-4">
        <p className="font-light">
          {post?.post_title}
          <button
            onClick={() => handlePostDetail(post?.post_link)}
            className="ml-3 text-primary-800 hover:text-primary-900 transition-all"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 inline text-primary-700 animate-pulse"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </p>
        {/* <div className="mt-5 flex items-center pr-2">
          <img
            src="/assets/bg.svg"
            className="h-12 w-12 rounded-full shadow-md"
            alt=""
          />
          <div className="ml-2">
            <p className="text-sm font-light">Jane Doe</p>
            <small className="text-primary-800 text-xs font-thin">
              5th June, 2021
            </small>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}

export default PostItem;
