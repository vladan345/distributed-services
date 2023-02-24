import Head from "next/head";
import Hero from "@/page-sections/home/Hero";
import Marquee from "@/page-sections/home/Marquee";
import Services from "@/page-sections/home/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Distributed Services</title>
        <meta name="description" content="Design. Develop. Distribute." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Marquee />
        <Services />
      </main>
    </>
  );
}
