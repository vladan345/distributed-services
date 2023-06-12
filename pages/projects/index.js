import { projects } from "@/lib/projects";
import Head from "next/head";
import Slug from "@/page-sections/projects/Slug";
import List from "../../page-sections/projects/List";
import GetInTouch from "@/components/GetInTouch";
import { ReactLenis } from "@studio-freight/react-lenis";
function Projects() {
  return (
    <>
      <Head>
        <title>Distributed Services | Projects</title>
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

        <meta name="title" content="Distributed Services | Projects" />
        <meta name="twitter:title" content="Distributed Services | Projects" />

        <meta
          property="og:url"
          content="https://distributedservices.tech/projects"
        />
        <meta
          property="twitter:url"
          content="https://distributedservices.tech/projects"
        />
        <meta property="twitter:domain" content="distributedservices.tech" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:image"
          content="https://square43.com/images/Home.png"
        />
        <meta
          name="twitter:image"
          content="https://square43.com/images/Home.png"
        />
      </Head>
      <div className="Projects">
        <ReactLenis root options={{ duration: 1.2 }}>
          <Slug />
          <p>
            Egestas neque eu rhoncus et. Et amet scelerisque et dui massa nibh
            montes. Donec tincidunt nunc sit vel at nisl elit dis eget sed.
          </p>
          <List projects={projects} />
          <GetInTouch darkMode={true} />
        </ReactLenis>
      </div>
    </>
  );
}

export default Projects;
