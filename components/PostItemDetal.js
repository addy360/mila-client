import React, { useEffect } from "react";
import { usePostContext } from "../hooks/useContext";
import { useFramer } from "../hooks/useframer";
import Backdrop from "./Backdrop";
import ImageGallery from "./ImageGallery";
import Video from "./Video";
const { motion, dropInVariants } = useFramer();

function PostItemDetal({ postSlug, handleClose }) {
  const { getPost, post_loading, post, error } = usePostContext();

  useEffect(() => getPost(postSlug), []);

  return (
    <Backdrop handleClose={handleClose}>
      <motion.div
        variants={dropInVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-10 bottom-10 left-10 md:left-20 right-10 md:right-20 bg-white drop-shadow-lg shadow-lg rounded-md p-4 overflow-x-auto"
      >
        {post_loading && (
          <h1 className="animate-pulse text-center">Fetching data...</h1>
        )}
        {error && (
          <h1 className="animate-pulse text-center text-red-600">{error}</h1>
        )}
        {!post_loading && post && (
          <>
            <img
              src={post?.post_feature_image}
              alt={post?.post_header}
              className=" w-full mb-5 md:w-3/4 md:mt-5 filter drop-shadow-md md:drop-shadow-lg md:rounded-md mx-auto"
            />

            <h4 className="mb-5 text-lg font-semibold ">{post?.post_header}</h4>
            <p className="mb-3">{post?.post_detail}</p>

            <ImageGallery images={post?.post_images} />
            {post?.videos.map((src, i) => (
              <div key={i} className="mb-4">
                <Video src={src} />
              </div>
            ))}
          </>
        )}
      </motion.div>
    </Backdrop>
  );
}

export default React.memo(PostItemDetal);
