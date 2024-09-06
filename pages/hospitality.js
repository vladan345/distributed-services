import Head from "next/head";
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from "@/page-sections/hospitality/Header";
import Hero from "@/page-sections/hospitality/Hero";
import Who from "@/page-sections/hospitality/Who";
import Slider from "@/page-sections/hospitality/Slider";

export default function hospitality() {
  return (
    <>
      <Head>
        <title>Distributed Services | Hospitality</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Anyone can find an offshore or nearshore vendor to build software, but not everyone can create global partnerships that work."
        />
        <meta
          name="twitter:description"
          content="Anyone can find an offshore or nearshore vendor to build software, but not everyone can create global partnerships that work."
        />

        <meta name="title" content="Distributed Services | Services" />
        <meta name="twitter:title" content="Distributed Services | Services" />

        <meta
          property="og:url"
          content="https://distributedservices.tech/services"
        />
        <meta
          property="twitter:url"
          content="https://distributedservices.tech/services"
        />
        <meta property="twitter:domain" content="distributedservices.tech" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:image"
          content="https://distributedservices.tech/images/featured/services.jpg"
        />
        <meta
          name="twitter:image"
          content="https://distributedservices.tech/images/featured/services.jpg"
        />
      </Head>
      <div>
        <ReactLenis root options={{ duration: 1.2 }}>
          <Header />
          <Hero />
          <Who />
          <Slider />
        </ReactLenis>
      </div>
    </>
  );
}
