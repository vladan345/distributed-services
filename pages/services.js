import Head from "next/head";
import Hero from "@/page-sections/services/Hero";
import AccordionSection from "@/page-sections/services/Accordion";
import ServicesMobile from "@/page-sections/services/ServicesMobile";
import Provide from "@/page-sections/services/Provide";
import Projects from "@/page-sections/services/Projects";
import GetInTouch from "@/components/GetInTouch";
import { ReactLenis } from "@studio-freight/react-lenis";
function services() {
  return (
    <>
      <Head>
        <title>Distributed Services | Services</title>
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
          <Hero />
          <AccordionSection />
          <ServicesMobile />
          <Provide />
          <Projects />
          <GetInTouch darkMode={true} />
        </ReactLenis>
      </div>
    </>
  );
}

export default services;
