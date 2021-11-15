import React from "react";
import { motion } from "framer-motion";
import TimeToday from "./TimeToday";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
function FeaturedPost({ featuredPost, handlePostDetail }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="lg:col-span-4 md:col-span-2 md:h-72"
    >
      <div
        className="
                flex
                flex-col
                md:flex-row
                h-full
                shadow
                border
                rounded-md
                overflow-hidden
                hover:shadow-xl
                items-center
                justify-center
      "
      >
        <div className="bg-green-900 overflow-hidden flex-1">
          <img
            src={featuredPost?.thumbnail}
            className="bg-cover h-auto w-full"
            alt={featuredPost?.post_title}
          />
        </div>
        <div className="flex-1 p-6">
          <span
            className="
                    bg-secondary-100
                    text-secondary-800
                    px-6
                    py-1
                    rounded-md
                    border-secondary-800
                    drop-shadow-md
                "
          >
            {featuredPost.category}
          </span>
          <p
            onClick={() => handlePostDetail(featuredPost.post_link)}
            className="
                        my-3
                        block
                        text-primary-800
                        hover:text-primary-900
                        transition-all
                        cursor-pointer
                    "
          >
            {featuredPost?.post_title}
          </p>

          <p className="font-light">{featuredPost?.post_title}</p>
          <div
            className="mt-5
                    flex
                    items-center
                    w-full
                    pr-2 drop-shadow-md "
          >
            <TimeToday />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedPost;
