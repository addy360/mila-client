import React, { useState } from "react";
import { useAllposts } from "../hooks/useAllPosts";
import FeaturedPost from "./FeaturedPost";
import PostItem from "./PostItem";
import PostItemDetal from "./PostItemDetal";

function Posts() {
  const { isFetching, error, data } = useAllposts();
  const [postSlug, setPostSlug] = useState(null);
  const posts = data.posts ? data.posts : [];
  const featuredPost = posts.shift();
  const handlePostDetail = (slug) => {
    setPostSlug(slug);
  };
  return (
    <>
      {isFetching && <h1>fetching data...</h1>}
      {!isFetching && error && <h1>Failed to load data</h1>}
      {!isFetching && (
        <>
          <h1 className=" text-prisec-600 font-thin text-3xl text-center my-4">
            Latest Posts
          </h1>
          <div className="grid gap-16 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
            <FeaturedPost
              featuredPost={featuredPost}
              handlePostDetail={handlePostDetail}
            />

            {posts.map((post, i) => (
              <PostItem
                post={post}
                key={i}
                handlePostDetail={handlePostDetail}
              />
            ))}
          </div>
        </>
      )}
      {postSlug && (
        <PostItemDetal
          postSlug={postSlug}
          handleClose={() => setPostSlug(null)}
        />
      )}
    </>
  );
}

export default Posts;
