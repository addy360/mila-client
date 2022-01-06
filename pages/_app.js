import "tailwindcss/tailwind.css";
import "react-image-lightbox/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Mila client (Ablo) is a web client clean minimalistic 🏄 user interface for Millard Ayo
            blog. It is built from the love 💓 of the blog of course which is
            keeping lazy people 🙊🙊🙊 up to date with the current news👊."
        />
        <meta
          property="og:description"
          content="Mila client (Ablo) is a web client clean minimalistic 🏄 user interface for Millard Ayo
            blog. It is built from the love 💓 of the blog of course which is
            keeping lazy people 🙊🙊🙊 up to date with the current news👊."
        />
        <meta
          name="twitter:description"
          content="Mila client (Ablo) is a web client clean minimalistic 🏄 user interface for Millard Ayo
            blog. It is built from the love 💓 of the blog of course which is
            keeping lazy people 🙊🙊🙊 up to date with the current news👊."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/51880591?v=4?s=400"
        />

        <meta
          name="twitter:image:src"
          content="https://avatars.githubusercontent.com/u/51880591?v=4?s=400"
        />
        <meta name="twitter:site" content="@github" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="addy360 - Overview" />
        <meta
          name="twitter:description"
          content="What for my bio? Programming I guess. addy360 has 49 repositories available. Follow their code on GitHub."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/51880591?v=4?s=400"
        />
        <meta
          property="og:image:alt"
          content="What for my bio? Programming I guess. addy360 has 49 repositories available. Follow their code on GitHub."
        />
        <meta property="og:site_name" content="GitHub" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="addy360 - Overview" />
        <meta property="og:url" content="https://github.com/addy360" />
        <meta
          property="og:description"
          content="What for my bio? Programming I guess. addy360 has 49 repositories available. Follow their code on GitHub."
        />
        <meta property="profile:username" content="addy360" />

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
        <title>Ablo Blog</title>
      </Head>
      <div className="font-oswald">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
