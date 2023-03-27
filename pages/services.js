import Head from "next/head";
import Hero from "@/components/Hero";
import Services from "@/page-sections/services/Services";
import Nodes from "@/page-sections/services/Nodes";
import { ReactLenis } from "@studio-freight/react-lenis";
import Phases from "@/page-sections/services/Phases";

export default function Home() {
  return (
    <>
      <Head>
        <title>Services | DS</title>
        <meta name="description" content="Design. Develop. Distribute." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactLenis root options={{ duration: 1.2 }}>
        <main>
          <Hero
            title="Our Services<br/>at a glance"
            description="Anyone can find an offshore or nearshore vendor to build software, but not everyone can create global partnerships that work."
            video="/images/distributed_services_hero.mp4"
            centeredBold="At a fraction of the time and cost it would normally take, Distributed Services sets you up with the best fitting resources and provides an experienced management team, that form a natural extension to your existing in-house team."
          />
          <Services />
          <Nodes />
          <Phases />
        </main>
      </ReactLenis>
    </>
  );
}
