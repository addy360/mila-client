import React from "react";
import Head from "next/head";
import { usePost } from "../hooks/useAllPosts";

function details() {
  const res = usePost();
  console.log(`res`, res);
  return (
    <>
      <Head>
        <title>Detailed page</title>
      </Head>
      <div>
        <h4>Detailed page</h4>
      </div>
    </>
  );
}

export default details;
