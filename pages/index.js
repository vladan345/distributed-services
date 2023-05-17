import Head from "next/head";
import Hero from "@/components/Hero";
import Who from "@/page-sections/home/Who";
import Services from "@/page-sections/home/Services";
import Approach from "@/page-sections/home/Approach";
import Team from "@/page-sections/home/Team";
import Projects from "@/page-sections/home/Projects";
import Rikas from "@/page-sections/home/Rikas";
import London from "@/page-sections/home/London";
import GetInTouch from "@/components/GetInTouch";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <>
      <Head>
        <title>Distributed Services</title>
        <meta name="description" content="Design. Develop. Distribute." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactLenis root options={{ duration: 1.2 }}>
        <main>
          <Hero />
          <Who />
          <Services />
          <Approach />
          <Team />
          <Projects />
          <London />
          <Rikas />
          <GetInTouch />
        </main>
      </ReactLenis>
    </>
  );
}
