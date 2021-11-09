import "tailwindcss/tailwind.css";
import "react-image-lightbox/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
