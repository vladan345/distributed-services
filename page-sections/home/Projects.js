import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/section-css/home/Projects.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".background",
        {
          scrollTrigger: {
            trigger: ".background",
            scrub: true,
          },
          y: -200,
        },
        {
          scrollTrigger: {
            trigger: ".background",
            scrub: true,
          },
          y: 200,
        }
      );
      gsap.to(".left-image", {
        scrollTrigger: {
          trigger: ".left-image",
          scrub: true,
          start: "top bottom",
        },
        y: "60%",
      });
      gsap.to(".left-image", {
        scrollTrigger: {
          trigger: ".left-image",
          scrub: true,
          start: "top bottom",
        },
        y: "60%",
      });
      gsap.fromTo(
        ".right-image",
        {
          scrollTrigger: {
            trigger: ".right-image",
            scrub: true,
          },
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: ".right-image",
            scrub: true,
          },
          y: -200,
        }
      );
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Projects}>
      <h3>PROJECTS</h3>
      <div className={styles.featured} ref={main}>
        <div className={`${styles.bg} background`}>
          <Image fill src="/images/home/sand_bgr.jpg" alt="sand background" />
        </div>
        <h4>Featured project</h4>
        <h1>
          Rikas
          <br />
          Hospitality Group
        </h1>

        <div className={styles.row}>
          <div className={styles.col}>
            <div className="left-image">
              <Image
                src="/images/home/home-rikas1.webp"
                alt="Beach image rikas group"
                width={640}
                height={520}
              />
            </div>
          </div>
          <div className={styles.col}>
            <Image
              src="/images/home/home-rikas2.webp"
              alt="Beach image rikas group"
              width={400}
              height={520}
            />
            <Image
              src="/images/home/rikas-logo.svg"
              alt="Beach image rikas group"
              width={146}
              height={220}
            />
          </div>
          <div className={styles.col}>
            <div className="right-image">
              <p>
                Vestibulum sagittis porttitor proin eleifend vitae. Tincidunt
                odio in dictum eu leo sapien.
              </p>
              <Image
                src="/images/home/home-rikas3.webp"
                alt="Beach image rikas group"
                width={600}
                height={680}
              />
            </div>
          </div>
        </div>
        <div className={styles.cta}>
          <Link href="/projects/rikas" className={styles.readMore}>
            <h2>Projects</h2>
            <Image
              src="/images/home/white-arrow-right.svg"
              alt="read more"
              width={170}
              height={140}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
