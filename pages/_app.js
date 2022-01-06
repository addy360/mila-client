import "tailwindcss/tailwind.css";
import "react-image-lightbox/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Mila client is a web client clean minimalistic 🏄 user interface for Millard Ayo
            blog. It is built from the love 💓 of the blog of course which is
            keeping lazy people 🙊🙊🙊 up to date with the current news👊."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-oswald">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
