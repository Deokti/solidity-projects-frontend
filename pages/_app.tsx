import "macro-css";
import "../styles/globals.scss";
import "../theme/index.css";
import "@fontsource/roboto";
import type { AppProps } from "next/app";
import { Layout } from "../layout";
import "../services/EthereumService";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
