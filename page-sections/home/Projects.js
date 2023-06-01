import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
            scrub: 1,
          },
          y: -50,
        });
        gsap.from(".right", {
          scrollTrigger: {
            trigger: ".projects",
            scrub: 1,
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
      <h2>Projects</h2>
      <div className={`${styles.projectWrap} projects`}>
        <div className={styles.grid}>
          <div className={`${styles.col} left`}>
            <Link className={styles.card} href="#">
              <div className={styles.content}>
                <h4>Project Name</h4>
                <p>WEB DESIGN / WEB DEVELOPMENT</p>
              </div>
              <span className={styles.cardButton} href="#">
                View Project
                <Image
                  src="/arrow-black-right.svg"
                  width={29}
                  height={35}
                  alt="arrow down white"
                />
              </span>
              <Image
                src="/images/home/project1.webp"
                alt="Project background"
                fill
                sizes="100vw"
              />
            </Link>
            <Link className={styles.card} href="#">
              <div>
                <h4>Project Name</h4>
                <p>WEB DESIGN / WEB DEVELOPMENT</p>
              </div>
              <span className={styles.cardButton} href="#">
                View Project
                <Image
                  src="/arrow-black-right.svg"
                  width={29}
                  height={35}
                  alt="arrow down white"
                />
              </span>
              <Image
                src="/images/home/project2.webp"
                alt="Project background"
                fill
                sizes="100vw"
              />
            </Link>
          </div>
          <div className={`${styles.col} right`}>
            <Link className={styles.card} href="#">
              <div>
                <h4>Project Name</h4>
                <p>WEB DESIGN / WEB DEVELOPMENT</p>
              </div>
              <span className={styles.cardButton} href="#">
                View Project
                <Image
                  src="/arrow-black-right.svg"
                  width={29}
                  height={35}
                  alt="arrow down white"
                />
              </span>
              <Image
                src="/images/home/project3.webp"
                alt="Project background"
                fill
                sizes="100vw"
              />
            </Link>
            <Link className={styles.card} href="#">
              <div>
                <h4>Project Name</h4>
                <p>WEB DESIGN / WEB DEVELOPMENT</p>
              </div>
              <span className={styles.cardButton} href="#">
                View Project
                <Image
                  src="/arrow-black-right.svg"
                  width={29}
                  height={35}
                  alt="arrow down white"
                />
              </span>
              <Image
                src="/images/home/project4.webp"
                alt="Project background"
                fill
                sizes="100vw"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
