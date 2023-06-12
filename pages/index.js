import Head from "next/head";
import Hero from "@/page-sections/home/Hero";
import Who from "@/page-sections/home/Who";
import Services from "@/page-sections/home/Services";
import Approach from "@/page-sections/home/Approach";
import Team from "@/page-sections/home/Team";
import Projects from "@/page-sections/home/Projects";
import Rikas from "@/page-sections/home/Rikas";
import RikasM from "@/page-sections/home/RikasM";
import London from "@/page-sections/home/London";
import GetInTouch from "@/components/GetInTouch";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
  return (
    <>
      <Head>
        <title>Distributed Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Design. Develop. Distribute." />
        <meta
          name="twitter:description"
          content="Design. Develop. Distribute."
        />

        <meta name="title" content="Distributed Services" />
        <meta name="twitter:title" content="Distributed Services" />

        <meta property="og:url" content="https://distributedservices.tech" />
        <meta
          property="twitter:url"
          content="https://distributedservices.tech"
        />
        <meta property="twitter:domain" content="distributedservices.tech" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:image"
          content={`https://distributedservices.tech/images/featured/home.jpg`}
        />
        <meta
          name="twitter:image"
          content="https://distributedservices.tech/images/featured/home.jpg"
        />
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
          <RikasM />
          <GetInTouch darkMode={false} />
        </main>
      </ReactLenis>
    </>
  );
}
