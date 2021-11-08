import React from "react";
import FeaturedPost from "./FeaturedPost";
import PostItem from "./PostItem";

function Posts() {
  return (
    <>
      <h1 class=" text-prisec-600 font-thin text-3xl text-center my-4">
        Latest Posts
      </h1>
      <div class="grid gap-16 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        <FeaturedPost />

        {Array(10)
          .fill(2)
          .map((_, i) => (
            <PostItem key={i} />
          ))}
      </div>
    </>
  );
}

export default Posts;
