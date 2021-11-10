import Head from "next/head";
import React, { useState } from "react";
import ErrorDisplay from "../components/ErrorDisplay";
import FormField from "../components/Form/FormField";
import Nav from "../components/Nav";
import { useContact } from "../hooks/useAllPosts";

function contact() {
  const { isFetching, queryData, error, data, setError } = useContact();
  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();

    queryData(null, { fullname, message, email });
  };
  return (
    <>
      <Head>
        <title>contact page</title>
      </Head>
      <div className="h-screen flex flex-col  ">
        <Nav />
        <div className="flex-1 grid place-content-center">
          <div className="md:w-[500px] w-[400px] border mx-auto shadow-lg py-6 md:px-10 px-5 rounded ">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center text-2xl my-5">Let's talk 🤗!</h4>
              <p className="text-center font-thin my-4">🤺 24/7 💬</p>
              <FormField
                title="Your name Sir🧛/Madam🧕"
                name="fullname"
                type="text"
              />
              <FormField
                title="Your E-mail Address📧"
                name="email"
                type="email"
              />

              <FormField
                title="Your messages"
                name="message"
                type="text"
                textarea={true}
              />

              <div className="flex items-end justify-end">
                <button
                  disabled={isFetching}
                  className="py-2 px-6 bg-prisec-900 hover:bg-secondary-900 disabled:bg-secondary-200 hover:text-prisec-50 text-primary-100 transition-all outline-none shadow-lg rounded"
                >
                  {isFetching ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {error && (
        <ErrorDisplay
          handleClose={() => setError(null)}
          message={JSON.stringify(error.response.data.data.errors, null, 4)}
        />
      )}
    </>
  );
}

export default contact;
