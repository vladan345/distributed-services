import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/component-css/ProjectHero.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProjectHero({ content }) {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".logo", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".banner",
          scrub: true,
          start: "top top",
        },
      });
    }, main.current);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.projectHero}>
      <div
        style={{ backgroundImage: `url(${content.banner})` }}
        className={`${styles.banner} banner`}
      >
        {/* <Image
          src={content.banner}
          alt="Project hero image"
          fill
          sizes="100vw"
          className={styles.background}
        /> */}
        <Image
          className={`${styles.logo} logo`}
          src={content.logo.src}
          alt="Project logo image"
          width={content.logo.width}
          height={content.logo.height}
        />
      </div>
      <div className={styles.info}>
        <div className="container">
          <div className={styles.colWrap}>
            <div className={styles.col}>
              <h1>{content.title}</h1>
              <p className={styles.serviceHeading}>What we&apos;ve done:</p>
              <div className={styles.serviceList}>
                {content.services.map((service) => {
                  return (
                    <Link key={service} href="#" className={styles.service}>
                      <p>{service}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className={styles.col}>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: content.description }}
              />
              <Link className={styles.projectBtn} href="#">
                Go to website
                <Image
                  src="/arrow-black-right.svg"
                  width={29}
                  height={35}
                  alt="arrow down white"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;
