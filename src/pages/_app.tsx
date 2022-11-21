import type { AppProps } from "next/app";
import { Header } from "../components/Header/Header";
import "/src/styles.scss";
import { Footer } from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ minWidth: "295px" }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
