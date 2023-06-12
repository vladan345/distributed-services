import { ReactLenis } from "@studio-freight/react-lenis";
import Head from "next/head";
import Hero from "@/page-sections/outsourcing/Hero";
import Nodes from "@/page-sections/outsourcing/Nodes";
import Phases from "@/page-sections/outsourcing/Phases";
import GetInTouch from "@/components/GetInTouch";
function outsourcing() {
  return (
    <>
      <Head>
        <title>Distributed Services | Outsourcing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="With our vast pool of resources, we guarantee to find the right team to fit around your needs."
        />
        <meta
          name="twitter:description"
          content="With our vast pool of resources, we guarantee to find the right team to fit around your needs."
        />

        <meta name="title" content="Distributed Services | Outsourcing" />
        <meta
          name="twitter:title"
          content="Distributed Services | Outsourcing"
        />

        <meta
          property="og:url"
          content="https://distributedservices.tech/outsourcing"
        />
        <meta
          property="twitter:url"
          content="https://distributedservices.tech/outsourcing"
        />
        <meta property="twitter:domain" content="distributedservices.tech" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:image"
          content="https://distributedservices.tech/images/featured/outsourcing.jpg"
        />
        <meta
          name="twitter:image"
          content="https://distributedservices.tech/images/featured/outsourcing.jpg"
        />
      </Head>
      <div>
        <ReactLenis root options={{ duration: 1.2 }}>
          <Hero />
          <Nodes />
          <Phases />
          <GetInTouch darkMode={true} />
        </ReactLenis>
      </div>
    </>
  );
}

export default outsourcing;
