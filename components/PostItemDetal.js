import React from "react";
import { usePost } from "../hooks/useAllPosts";
import Backdrop from "./Backdrop";
import Video from "./Video";

function PostItemDetal({ postSlug, handleClose }) {
  const { data, isFetching, error } = usePost(postSlug);

  return (
    <Backdrop handleClose={handleClose}>
      {isFetching && <h1>Fetching data...</h1>}
      {!isFetching && data && (
        <div className="absolute top-10 bottom-10 left-10 right-10 bg-white shadow-lg rounded-md p-4 overflow-x-auto">
          <img
            src={data.post?.post_feature_image}
            alt={data.post?.post_header}
            className=" w-full mb-5 md:w-3/4 md:mt-5 md:shadow md:rounded-md mx-auto"
          />

          <h4 className="mb-5 text-lg font-semibold ">
            {data.post?.post_header}
          </h4>
          <p className="mb-3">{data.post?.post_detail}</p>
          <div className="flex flex-wrap gap-4 mb-4">
            {data.post?.post_images.map((src, i) => (
              <img src={src} className="h-32 w-auto" />
            ))}
          </div>
          {data.post?.videos.map((src, i) => (
            <div key={i} className="mb-4">
              <Video src={src} />
            </div>
          ))}
        </div>
      )}
    </Backdrop>
  );
}

export default PostItemDetal;
