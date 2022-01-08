import React, { useCallback, useEffect } from "react";
import { usePostContext } from "../hooks/useContext";
import { useFramer } from "../hooks/useframer";
import FeaturedPost from "./FeaturedPost";
import PostItem from "./PostItem";
import PostItemDetal from "./PostItemDetal";
const { motion, dropInVariants, fadeVariants } = useFramer();

function Posts() {
  const {
    getPosts,
    getNextPosts,
    next,
    posts,
    posts_fetching,
    error,
    clearError,
    slug,
    clearSlug,
  } = usePostContext();

  useEffect(() => getPosts(), []);

  const handlePostDetailClose = useCallback(() => clearSlug(), []);

  const featuredPost = posts[0];

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeVariants}>
      {posts.length > 0 && (
        <div className="mb-10 p-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={dropInVariants}
            className=" text-prisec-600 font-thin text-3xl text-center my-4"
          >
            Latest Posts
          </motion.h1>
          <div className="grid gap-16 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
            <FeaturedPost featuredPost={featuredPost} />

            {posts.slice(1).map((post, i) => (
              <PostItem post={post} key={i} />
            ))}
          </div>
        </div>
      )}
      {posts_fetching && (
        <div className="grid place-content-center my-3">
          <p className=" mb-4 py-2 px-4 border rounded filter drop-shadow-md shadow animate-pulse text-primary-800 font-light text-center  mx-auto inline-block">
            fetching data...
          </p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="grid place-content-center">
          <motion.button
            disabled={posts_fetching}
            onClick={() => getNextPosts(next)}
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
            className="py-1 px-2 text-sm border font-thin text-primary-700 rounded-md shadow-md"
          >
            {!posts_fetching ? "load more" : "loading more..."}
          </motion.button>
        </div>
      )}
      {!posts_fetching && error && (
        <h1 className="text-center  text-red-600" onClick={() => clearError()}>
          {error}
        </h1>
      )}

      {slug && (
        <PostItemDetal postSlug={slug} handleClose={handlePostDetailClose} />
      )}
    </motion.div>
  );
}

export default React.memo(Posts);
