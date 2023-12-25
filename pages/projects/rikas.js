import Head from "next/head";
import ProjectHero from "@/components/ProjectHero";
import { restaurants1, restaurants2, dual } from "@/lib/rikasRestaurants";
import RestaurantRows from "@/page-sections/rikas/RestaurantRows";
import RestaurantRowsMobile from "@/page-sections/rikas/RestaurantRowsMobile";
import Dual from "@/page-sections/rikas/Dual";
import DualMobile from "@/page-sections/rikas/DualMobile";
import Circle from "@/page-sections/rikas/Circle";
import Results from "@/components/Results";
import { ReactLenis } from "@studio-freight/react-lenis";

function Rikas() {
  const projectInfo = {
    title: "Rikas Hospitality Group",
    banner: "/images/single-project/rikas/rikas-hero.webp",
    services: [
      "Web design",
      "Digital marketing",
      "Web development",
      "Google Analytics",
      "Web maintenance",
    ],
    description:
      "RIKAS Hospitality Group is a Dubai-based collection of award-winning restaurants and cafes, which has a rapidly growing portfolio of dining establishments. We had the pleasure of providing RIKAS Group with comprehensive marketing solutions.<br /><br /> Our team embarked on an exciting journey by designing and developing captivating websites for several prestigious restaurants in the RIKAS family. We ensure that these websites remain up-to-date with regular maintenance, guaranteeing a seamless user experience. Leveraging our expertise in performance marketing, we implemented targeted strategies to maximize online visibility with Google Ads and similar tools, ultimately driving increased customer conversions. Growth and success of our valued client in the highly competitive hospitality industry is our biggest reward!",
    projectLink: "https://rikasgroup.com",
    logo: {
      src: "/images/home/rikas-logo.svg",
      width: 195,
      height: 295,
    },
    results: [
      "Elevated online presence and showcase of each restaurant's unique concept.",
      "Increased online traffic, higher customer conversions, and continued success in the competitive digital landscape.",
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
          content="Anyone can find an offshore or nearshore vendor to build software, but not everyone can create global partnerships that work."
        />
        <meta
          name="twitter:description"
          content="Anyone can find an offshore or nearshore vendor to build software, but not everyone can create global partnerships that work."
        />

        <meta
          name="title"
          content="Projects | Rikas Hospitality Group
"
        />
        <meta
          name="twitter:title"
          content="Projects | Rikas Hospitality Group
"
        />

        <meta
          property="og:url"
          content="https://distributedservices.tech/projects/rikas"
        />
        <meta
          property="twitter:url"
          content="https://distributedservices.tech/projects/rikas"
        />
        <meta property="twitter:domain" content="distributedservices.tech" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:image"
          content="https://distributedservices.tech/images/featured/rikas.jpg"
        />
        <meta
          name="twitter:image"
          content="https://distributedservices.tech/images/featured/rikas.jpg"
        />
      </Head>
      <div>
        <ReactLenis root options={{ duration: 1.2 }}>
          <ProjectHero content={projectInfo} />
          <RestaurantRowsMobile content={restaurants1} />
          <RestaurantRows content={restaurants1} />

          <Dual content={dual} />
          <DualMobile content={dual} />
          <RestaurantRows content={restaurants2} />
          <RestaurantRowsMobile content={restaurants2} />
          <Circle />
          <Results content={projectInfo} />
        </ReactLenis>
      </div>
    </>
  );
}

export default Rikas;
