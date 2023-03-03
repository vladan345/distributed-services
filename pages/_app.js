import { useEffect } from "react";
import "@/styles/globals.css";
import { Manrope } from "@next/font/google";
import Lenis from "@studio-freight/lenis";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
    //   console.log({ scroll, limit, velocity, direction, progress });
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
