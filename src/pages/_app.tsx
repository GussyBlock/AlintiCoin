import type { AppProps } from "next/app";
import { BurgerJS } from "../components/BurgerJS/BurgerJS";
import "/src/styles.scss";
import { Footer } from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ minWidth: "295px" }}>
      <BurgerJS />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
