import Head from "next/head";
import GlobalStyles from "@/styles/globalStyles";
import Theme from "@/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
