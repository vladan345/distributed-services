import Head from "next/head";
import Hero from "@/components/Hero";
import Services from "@/page-sections/home/Services";
import Projects from "@/page-sections/home/Projects";
import Banner from "@/page-sections/home/Banner";
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
          <Hero
            title="<span>Design</span><span> Develop</span><span> Distribute</span>"
            description="With our vast pool of resources, we guarantee to find the right team
          to fit around your needs."
            video="/images/distributed_services_hero.mp4"
            centeredBold="A distributed workforce offering perfect-fit solutions for all your development needs"
            centeredReg="We help your company reduce risk with software development outsourcing through a continuum of consultative services and the most curated network of certified software development teams ever assembled in the region."
          />
          <Services />
          <Projects />
          <Banner />
        </main>
      </ReactLenis>
    </>
  );
}
