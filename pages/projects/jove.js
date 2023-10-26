import Head from "next/head";
import ProjectHero from "@/components/ProjectHero";
import { ReactLenis } from "@studio-freight/react-lenis";

import Name from "@/page-sections/jove/Name";
import Logo from "@/page-sections/jove/Logo";
import Scheme from "@/page-sections/jove/Scheme";
import Web from "@/page-sections/jove/Web";
import Negative from "@/page-sections/jove/Negative";
import Packaging from "@/page-sections/jove/Packaging";

import Results from "@/components/Results";

function Rikas() {
  const projectInfo = {
    title: "Jove Truffle Products",
    banner: "/images/single-project/jove/jove-hero.webp",
    services: [
      "Naming",
      "Logo Design",
      "Branding",
      "Packaging",
      "Web design",
      "Web development",
    ],
    description:
      "High-quality truffle products were ready – now they needed a proper identity. This included a logo, an original brand name (with an available domain) and a complete brand book. All of these, however, needed to be tied with a unique story that would set the brand apart from its competitors. <br /><br />During our brainstorming sessions, we singled out several traits that the brand needed to embody: premium quality, reliability and an elaborate, convincing back story. That is how Jove came to be with new imagery, product label and website design.",
    projectLink: "https://jove.ae/",
    logo: {
      src: "/images/single-project/jove/jove-logo.svg",
      width: 195,
      height: 295,
    },
    results: [
      "Packaging that speaks for the product with a sleek and elegant design.",
      "Our forecast: we're looking at a complete hit on the shelves.",
    ],
  };
  return (
    <>
      <Head>
        <title>Projects | Rikas Hospitality Group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="High-quality truffle products were ready - now they needed a proper identity. This included a logo, an original brand name (with an available domain) and a complete brand book."
        />
        <meta
          name="twitter:description"
          content="High-quality truffle products were ready - now they needed a proper identity. This included a logo, an original brand name (with an available domain) and a complete brand book."
        />

        <meta
          name="title"
          content="Projects | Jove Truffle Products
"
        />
        <meta
          name="twitter:title"
          content="Projects | Jove Truffle Products
"
        />

        <meta
          property="og:url"
          content="https://distributedservices.tech/projects/jove"
        />
        <meta
          property="twitter:url"
          content="https://distributedservices.tech/projects/jove"
        />
        <meta property="twitter:domain" content="distributedservices.tech" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:image"
          content="https://distributedservices.tech/images/single-project/jove/jove-hero.webp"
        />
        <meta
          name="twitter:image"
          content="https://distributedservices.tech/images/single-project/jove/jove-hero.webp"
        />
      </Head>
      <div>
        <ReactLenis root options={{ duration: 1.2 }}>
          <ProjectHero content={projectInfo} whiteTheme={true} />
          <Name />
          <Logo />
          <Negative />
          <Web />
          <Packaging />
          <Scheme />
          <Results content={projectInfo} />
        </ReactLenis>
      </div>
    </>
  );
}

export default Rikas;
