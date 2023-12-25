import { useEffect, useRef } from "react";

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import styles from "../../styles/section-css/services/Projects.module.css";

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
    <section className={styles.Projects} ref={main}>
      <div className="tag-large">Our work</div>
      <h2>Our Latest Projects</h2>
      <div className={`${styles.projectWrap} projects`}>
        <div className={styles.grid}>
          <div className={`${styles.col} left`}>
            <ProjectCard
              title={projects[4].title}
              link={projects[4].link}
              projectImage={projects[4].projectImage}
              services={projects[4].services}
            />
          </div>
          <div className={`${styles.col} right`}>
            <ProjectCard
              title={projects[5].title}
              link={projects[5].link}
              projectImage={projects[5].projectImage}
              services={projects[5].services}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
