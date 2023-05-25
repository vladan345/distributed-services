import { useRouter } from "next/router";
import "@/styles/globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Here you can add paths where you want to use Header that is initialy transparent then fades to filled background (white)
  const urls = ["/", "/projects/rikas", "/contact"];
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>

      <Header isTransparent={urls.includes(router.asPath)} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
