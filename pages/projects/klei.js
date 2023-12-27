import Head from "next/head";
import Logo from "@/page-sections/klei/ui/Logo";
import Laptop from "@/page-sections/klei/ui/Laptop";
import Mobile from "@/page-sections/klei/ui/Mobile";
import Flowers from "@/page-sections/klei/ui/Flowers";
import Hands from "@/page-sections/klei/ui/Hands";
import ProjectHero from "@/components/ProjectHero";
import { ReactLenis } from "@studio-freight/react-lenis";
import Results from "@/components/Results";

export default function Klei() {
  const projectInfo = {
    title: "Klei Works",
    banner: "/images/single-project/klei/klei-hero.webp",
    services: [
      "Naming",
      "Logo Design",
      "Branding",
      "Web design",
      "Web development",
    ],
    description:
      "Minimalism. Sophisticated tone of voice.<br /> Earthy color-scheme. <br /><br /> These were the pillars of our brand vision. Soon, our studio created an eye-catching brand which clearly focuses on the artistic and timeless value of each pottery product. <br /><br /> This simplicity is reflected in the outline of the website, with large and unimpeded sections where the message and visuals take center stage.",
    projectLink: "https://klei-works.com/",
    logo: {
      src: "/images/single-project/klei/klei-logo.svg",
      width: 320,
      height: 320,
    },
    results: [
      "One-of-a-kind brand identity",
      "Seamlessly developed website with eye-catching imagery",
    ],
  };
  return (
    <>
      <Head>
        <title>Projects | Klei Works</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Seamlessly developed website with eye-catching imagery"
        />
        <meta
          name="twitter:description"
          content="Seamlessly developed website with eye-catching imagery"
        />

        <meta
          name="title"
          content="Projects | Klei Works
"
        />
        <meta
          name="twitter:title"
          content="Projects | Klei Works
"
        />

        <meta
          property="og:url"
          content="https://distributedservices.tech/projects/klei"
        />
        <meta
          property="twitter:url"
          content="https://distributedservices.tech/projects/klei"
        />
        <meta property="twitter:domain" content="distributedservices.tech" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:image"
          content="https://distributedservices.tech/images/single-project/klei/klei-hero.webp"
        />
        <meta
          name="twitter:image"
          content="https://distributedservices.tech/images/single-project/klei/klei-hero.webp"
        />
      </Head>
      <div>
        <ReactLenis root options={{ duration: 1.2 }}>
          <ProjectHero content={projectInfo} whiteTheme={true} />
          <Logo />
          <Laptop />
          <Mobile />
          <Flowers />
          <Hands />
          <Results content={projectInfo} />
        </ReactLenis>
      </div>
    </>
  );
}
