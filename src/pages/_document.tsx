import { Html, Head, Main, NextScript } from "next/document";
import { clsx } from "clsx";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Simplifying note sharing between teachers and students"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body
        className={clsx(
          "font-inter",
          "bg-[#FBFBFB]",
          process.env.DEV == "true" && "debug-screens"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
