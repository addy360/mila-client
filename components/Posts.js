import React, { useEffect, useState } from "react";
import { usePaginatedPosts } from "../hooks/useAllPosts";
import FeaturedPost from "./FeaturedPost";
import PostItem from "./PostItem";
import PostItemDetal from "./PostItemDetal";

function Posts({ fetchNext, setFetchNext }) {
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
    <>
      {paginatedPosts.posts.length > 0 && (
        <div className="mb-10">
          <h1 className=" text-prisec-600 font-thin text-3xl text-center my-4">
            Latest Posts
          </h1>
          <div className="grid gap-16 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
            <FeaturedPost
              featuredPost={featuredPost}
              handlePostDetail={handlePostDetail}
            />

            {paginatedPosts.posts.map((post, i) => (
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
        <span className=" mb-4 py-2 px-4 border rounded font-light text-center inline-block mx-auto ">
          fetching data...
        </span>
      )}
      {!paginatedPosts.isFetching && paginatedPosts.error && (
        <h1>Failed to load data</h1>
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
