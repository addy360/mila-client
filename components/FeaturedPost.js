import React from "react";

function FeaturedPost() {
  return (
    <div class="lg:col-span-4 md:col-span-2 md:h-72">
      <div
        class="
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
        <div class="bg-green-900 overflow-hidden flex-1">
          <img src="/assets/bg.svg" class="bg-cover h-auto w-full" alt="" />
        </div>
        <div class="flex-1 p-6">
          <span
            class="
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
          <a
            href="#"
            class="
                        my-3
                        block
                        text-primary-800
                        hover:text-primary-900
                        transition-all
                    "
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            voluptates.
          </a>

          <p class="font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            perferendis labore fugit aspernatur consectetur, deleniti, alias,
            reprehenderit voluptatem repellat laborum repellendus sed ullam odio
            natus ipsa inventore optio eaque at.
          </p>
          <div
            class="mt-5
                    flex
                    items-center
                    w-1/3
                    pr-2"
          >
            <div class="ml-2">
              <small class="text-yellow-800 text-xs font-thin">
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
