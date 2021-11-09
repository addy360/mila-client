import Head from "next/head";
import React from "react";
import Nav from "../components/Nav";

function about() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <Nav />
      <div className="container mx-auto pt-10">
        <h4 className="text-secondary-900 font-thin text-center text-8xl mb-5">
          About
          <span className="text-primary-800 font-normal ">
            Ablo <span className="animate-ping">💥</span>
          </span>
        </h4>
        <div className="md:w-3/4 p-4 mx-auto text-justify font-mono">
          <p>
            <span className="text-prisec-900 text-3xl font-oswald ">
              Ablo💥
            </span>
            is a web client clean minimalistic 🏄 user interface for Millard Ayo
            blog. It is built from the love 💓 of the blog of course which is
            keeping lazy people 🙊🙊🙊 up to date with the current news👊.
            <span className="text-prisec-900 animate-pulse ml-5">
              🤸F.E.P 🤫
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default about;
