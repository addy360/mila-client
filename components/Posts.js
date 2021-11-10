import React, { useEffect, useState } from "react";
import { usePaginatedPosts } from "../hooks/useAllPosts";
import { useFramer } from "../hooks/useframer";
import FeaturedPost from "./FeaturedPost";
import PostItem from "./PostItem";
import PostItemDetal from "./PostItemDetal";

function Posts({ fetchNext, setFetchNext }) {
  const { motion, dropInVariants, fadeVariants } = useFramer();
  const paginatedPosts = usePaginatedPosts();
  const [postSlug, setPostSlug] = useState(null);

  const featuredPost = paginatedPosts.posts[0];
  const handlePostDetail = (slug) => {
    setPostSlug(slug);
  };

  const handleFetchNext = () => {
    paginatedPosts.queryData(paginatedPosts.nextUrl);
    setFetchNext(false);
  };

  useEffect(() => {
    if (fetchNext) {
      handleFetchNext();
    }
  }, [fetchNext]);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeVariants}>
      {paginatedPosts.posts.length > 0 && (
        <div className="mb-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={dropInVariants}
            className=" text-prisec-600 font-thin text-3xl text-center my-4"
          >
            Latest Posts
          </motion.h1>
          <div className="grid gap-16 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
            <FeaturedPost
              featuredPost={featuredPost}
              handlePostDetail={handlePostDetail}
            />

            {paginatedPosts.posts.slice(1).map((post, i) => (
              <PostItem
                post={post}
                key={i}
                handlePostDetail={handlePostDetail}
              />
            ))}
          </div>
        </div>
      )}
      {paginatedPosts.isFetching && (
        <p className=" mb-4 py-2 px-4 border rounded text-primary-800 font-light text-center  mx-auto ">
          fetching data...
        </p>
      )}

      {paginatedPosts.posts.length > 0 && !paginatedPosts.isFetching && (
        <div className="grid place-content-center">
          <motion.button
            onClick={() => handleFetchNext()}
            initial="hidden"
            animate="visible"
            variants={fadeVariants}
            className="py-1 px-2 text-sm border font-thin text-primary-700 rounded-md shadow-md"
          >
            Load more
          </motion.button>
        </div>
      )}
      {!paginatedPosts.isFetching && paginatedPosts.error && (
        <h1 className="text-center text-prisec-900">Failed to load data</h1>
      )}

      {postSlug && (
        <PostItemDetal
          postSlug={postSlug}
          handleClose={() => setPostSlug(null)}
        />
      )}
    </motion.div>
  );
}

export default Posts;
