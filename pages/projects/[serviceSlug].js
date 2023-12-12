import { useEffect, useState } from "react";
import { collectServices, getProjects } from "@/lib/projects";
import Slug from "@/page-sections/projects/Slug";
import List from "@/page-sections/projects/List";
import GetInTouch from "@/components/GetInTouch";
import Head from "next/head";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRouter } from "next/router";

function Projects({ projects }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Distributed Services | Projects</title>
      </Head>
      <div className="Projects">
        <ReactLenis root options={{ duration: 1.2 }}>
          <Slug />
          <List projects={projects} />
          <GetInTouch darkMode={true} />
        </ReactLenis>
      </div>
    </>
  );
}

export default Projects;

export async function getStaticProps({ params }) {
  const projects = getProjects(params.serviceSlug);
  return {
    props: {
      projects,
    },
  };
}

export async function getStaticPaths() {
  const services = collectServices();
  return {
    paths: services.map((service) => {
      return {
        params: {
          serviceSlug: service,
        },
      };
    }),
    fallback: false,
  };
}
