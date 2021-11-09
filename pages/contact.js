import Head from "next/head";
import React from "react";
import FormField from "../components/Form/FormField";
import Nav from "../components/Nav";

function contact() {
  return (
    <>
      <Head>
        <title>contact page</title>
      </Head>
      <div className="h-screen flex flex-col  ">
        <Nav />
        <div className="flex-1 grid place-content-center">
          <div className="md:w-[500px] w-[400px] border mx-auto shadow-lg py-6 md:px-10 rounded ">
            <h4 className="text-center text-2xl my-5">Let's talk 🤗!</h4>
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
                disabled
                className="py-2 px-6 bg-prisec-900 hover:bg-secondary-900 hover:text-prisec-50 text-primary-100 transition-all outline-none shadow-lg rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
