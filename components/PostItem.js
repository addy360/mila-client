import React from "react";
import Image from "next/image";

function PostItem({ post }) {
  return (
    <div className="border hover:shadow-xl rounded overflow-hidden">
      <div className="h-[250px] md:h-[150px] bg-transparent overflow-hidden relative">
        {/* <img
          src="https://millardayo.com/wp-content/uploads/2021/11/32-660x400.jpg"
          className="w-full "
          alt=""
        /> */}
        <Image layout="fill" src={post.thumbnail} className=" " alt="image" />
      </div>
      <div className="h-1/2 p-4">
        <p className="font-light">
          {post.post_title}
          <a
            href="#"
            className="text-primary-600 hover:text-primary-900 transition-all"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline text-primary-600 animate-pulse"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </p>
        {/* <div className="mt-5 flex items-center pr-2">
          <img
            src="/assets/bg.svg"
            className="h-12 w-12 rounded-full shadow-md"
            alt=""
          />
          <div className="ml-2">
            <p className="text-sm font-light">Jane Doe</p>
            <small className="text-primary-800 text-xs font-thin">
              5th June, 2021
            </small>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PostItem;
