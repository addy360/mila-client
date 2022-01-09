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
    posts_loading,
    error,
    clearError,
    slug,
    clearSlug,
  } = usePostContext();

  const meAscii = `

 █████╗ ██████╗ ██████╗ ██╗   ██╗██████╗  ██████╗  ██████╗ 
██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝╚════██╗██╔════╝ ██╔═████╗
███████║██║  ██║██║  ██║ ╚████╔╝  █████╔╝███████╗ ██║██╔██║
██╔══██║██║  ██║██║  ██║  ╚██╔╝   ╚═══██╗██╔═══██╗████╔╝██║
██║  ██║██████╔╝██████╔╝   ██║   ██████╔╝╚██████╔╝╚██████╔╝
╚═╝  ╚═╝╚═════╝ ╚═════╝    ╚═╝   ╚═════╝  ╚═════╝  ╚═════╝ 
  `;

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
      {posts.length === 0 && (
        <pre className="text-center text-transparent bg-gradient-to-br from-prisec via-black to-secondary bg-clip-text animate-pulse px-6 scale-75 overflow-x-hidden md:scale-100">
          {meAscii}
        </pre>
      )}

      {posts.length > 0 && (
        <div className="grid place-content-center">
          <motion.button
            disabled={posts_loading}
            onClick={() => getNextPosts(next)}
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
            className="py-1 px-2 text-sm border font-thin text-primary-700 rounded-md shadow-md"
          >
            {!posts_loading ? "load more" : "loading more..."}
          </motion.button>
        </div>
      )}
      {!posts_loading && error && (
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
