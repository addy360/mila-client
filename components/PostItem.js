import React from "react";
import Image from "next/image";

function PostItem() {
  return (
    <div class="border hover:shadow-xl rounded overflow-hidden">
      <div class="h-[250px] md:h-[150px] bg-transparent overflow-hidden relative">
        {/* <img
          src="https://millardayo.com/wp-content/uploads/2021/11/32-660x400.jpg"
          class="w-full "
          alt=""
        /> */}
        <Image
          layout="fill"
          src="https://millardayo.com/wp-content/uploads/2021/11/32-660x400.jpg"
          class=" "
          alt="image"
        />
      </div>
      <div class="h-1/2 p-4">
        <p class="font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          harum obcaecati, nisi ...
          <a
            href="#"
            class="text-primary-600 hover:text-primary-900 transition-all"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline text-primary-600 animate-pulse"
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
        {/* <div class="mt-5 flex items-center pr-2">
          <img
            src="/assets/bg.svg"
            class="h-12 w-12 rounded-full shadow-md"
            alt=""
          />
          <div class="ml-2">
            <p class="text-sm font-light">Jane Doe</p>
            <small class="text-primary-800 text-xs font-thin">
              5th June, 2021
            </small>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PostItem;
