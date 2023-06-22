import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import styles from "../../styles/section-css/home/Projects.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 801px)", () => {
        gsap.to(".left", {
          scrollTrigger: {
            trigger: ".projects",
            scrub: true,
          },
          y: -50,
        });
        gsap.from(".right", {
          scrollTrigger: {
            trigger: ".projects",
            scrub: true,
          },
          y: -50,
        });
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Projects} ref={main} id="projects">
      <div className="tag-large">Our work</div>
      <h2>Projects</h2>
      <div className={`${styles.projectWrap} projects`}>
        <div className={styles.grid}>
          <div className={`${styles.col} left`}>
            <ProjectCard
              title={projects[0].title}
              link={projects[0].link}
              projectImage={projects[0].projectImage}
              services={projects[0].services}
            />
            <ProjectCard
              title={projects[2].title}
              link={projects[2].link}
              projectImage={projects[2].projectImage}
              services={projects[2].services}
            />
          </div>
          <div className={`${styles.col} right`}>
            <ProjectCard
              title={projects[1].title}
              link={projects[1].link}
              projectImage={projects[1].projectImage}
              services={projects[1].services}
            />
            <ProjectCard
              title={projects[3].title}
              link={projects[3].link}
              projectImage={projects[3].projectImage}
              services={projects[3].services}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
