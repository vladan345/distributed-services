import { useEffect, useState } from "react";
import { collectServices, getProjects } from "@/lib/projects";
import Slug from "@/page-sections/projects/Slug";
import List from "@/page-sections/projects/List";
import GetInTouch from "@/components/GetInTouch";
function Projects({ projects }) {
  return (
    <div className="Projects">
      <Slug />
      <p
        style={{
          fontSize: "48px",
          fontFamily: "Flexa",
          lineHeight: "1.2",
          fontWeight: "500",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        Egestas neque eu rhoncus et. Et amet scelerisque et dui massa nibh
        montes. Donec tincidunt nunc sit vel at nisl elit dis eget sed.
      </p>
      <List projects={projects} />
      <GetInTouch darkMode={true} />
    </div>
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
