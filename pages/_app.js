import "@/styles/globals.css";
import { Manrope } from "@next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <ParallaxProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </>
  );
}
