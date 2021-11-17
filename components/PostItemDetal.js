import React from "react";
import { usePost } from "../hooks/useAllPosts";
import { useFramer } from "../hooks/useframer";
import Backdrop from "./Backdrop";
import ImageGallery from "./ImageGallery";
import Video from "./Video";

function PostItemDetal({ postSlug, handleClose }) {
  const { motion, dropInVariants } = useFramer();
  const { data, isFetching, error } = usePost(postSlug);

  return (
    <Backdrop handleClose={handleClose}>
      {isFetching && <h1 className="animate-pulse">Fetching data...</h1>}
      {!isFetching && data && (
        <motion.div
          variants={dropInVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-10 bottom-10 left-10 md:left-20 right-10 md:right-20 bg-white drop-shadow-lg shadow-lg rounded-md p-4 overflow-x-auto"
        >
          <img
            src={data.post?.post_feature_image}
            alt={data.post?.post_header}
            className=" w-full mb-5 md:w-3/4 md:mt-5 filter drop-shadow-md md:drop-shadow-lg md:rounded-md mx-auto"
          />

          <h4 className="mb-5 text-lg font-semibold ">
            {data.post?.post_header}
          </h4>
          <p className="mb-3">{data.post?.post_detail}</p>

          <ImageGallery images={data.post?.post_images} />
          {data.post?.videos.map((src, i) => (
            <div key={i} className="mb-4">
              <Video src={src} />
            </div>
          ))}
        </motion.div>
      )}
    </Backdrop>
  );
}

export default PostItemDetal;
