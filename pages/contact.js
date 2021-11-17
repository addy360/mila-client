import Head from "next/head";
import React, { useEffect, useState } from "react";
import ErrorDisplay from "../components/ErrorDisplay";
import FormField from "../components/Form/FormField";
import Nav from "../components/Nav";
import { useContact } from "../hooks/useAllPosts";
import { useFramer } from "../hooks/useframer";

function contact() {
  const { motion, dropInVariants, fadeVariants } = useFramer();
  const { isFetching, queryData, error, data, setError } = useContact();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (data) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("message", message);

    queryData(null, formData);
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
            <motion.form
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
            >
              {data ? (
                <motion.h4
                  variants={dropInVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center text-3xl my-5"
                >
                  💪 {data.message} 💪
                </motion.h4>
              ) : (
                <motion.h4
                  variants={dropInVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center text-2xl my-5"
                >
                  Let's talk 🤗!
                </motion.h4>
              )}

              <p className="text-center font-thin my-4">🤺 24/7 💬</p>
              <FormField
                title="Your name Sir🧛/Madam🧕"
                name="fullname"
                type="text"
                value={fullname}
                handleOnChange={(e) => setFullname(e.target.value)}
              />
              <FormField
                title="Your E-mail Address📧"
                name="email"
                handleOnChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
              />

              <FormField
                title="Your messages"
                name="message"
                type="text"
                value={message}
                handleOnChange={(e) => setMessage(e.target.value)}
                textarea={true}
              />

              <div className="flex items-end justify-end">
                <button
                  disabled={isFetching}
                  className="py-2 px-6 bg-prisec-900 hover:bg-secondary-900 disabled:bg-secondary-200 hover:text-prisec-50 text-primary-100 transition-all outline-none shadow-lg rounded"
                >
                  {isFetching ? (
                    <motion.span
                      variants={fadeVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      variants={fadeVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      send
                    </motion.span>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
      {error && (
        <ErrorDisplay handleClose={() => setError(null)} error={error} />
      )}
    </>
  );
}

export default contact;
