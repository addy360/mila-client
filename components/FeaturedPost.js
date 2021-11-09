import React from "react";

function FeaturedPost({ featuredPost, handlePostDetail }) {
  return (
    <div className="lg:col-span-4 md:col-span-2 md:h-72">
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
      "
      >
        <div className="bg-green-900 overflow-hidden flex-1">
          <img
            src={featuredPost?.thumbnail}
            className="bg-cover h-auto w-full"
            alt=""
          />
        </div>
        <div className="flex-1 p-6">
          <span
            className="
                    bg-secondary-100
                    text-secondary-800
                    px-6
                    py-1
                    rounded-3xl
                    border-secondary-800
                "
          >
            featured
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
                    w-1/3
                    pr-2"
          >
            <div className="ml-2">
              <small className="text-yellow-800 text-xs font-thin">
                5th June, 2021
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
