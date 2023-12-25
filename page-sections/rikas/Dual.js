import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/section-css/rikas/Dual.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Dual({ content }) {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".dualImage", {
        y: -300,
      });
      gsap.to(".dualImage", {
        y: 0,
        scrollTrigger: {
          trigger: ".dualTrigger",
          scrub: true,
        },
      });
      gsap.to(".dualTrigger", {
        duration: 1,
        width: "100%",
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top center",
          end: "bottom center",
          once: true,
          trigger: ".dualTrigger",
        },
      });
    }, main.current);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.intersection}>
      <div className="container">
        <h2>
          Growth and success of our valued client in the highly competitive
          hospitality industry is our biggest reward!
        </h2>
        <div className={`${styles.dualCircle} dualTrigger`}>
          {/* <div className={`${styles.halfLeft}`}> */}
          <Image
            src={content[0].image}
            alt={`${content[0].title} restaurant`}
            width={900}
            height={1060}
            className="dualImage"
            id={content[0].id}
          />
          {/* </div> */}
          {/* <div className={`${styles.halfRight}`}> */}
          <Image
            src={content[1].image}
            alt={`${content[1].title} restaurant`}
            width={900}
            height={1060}
            className="dualImage"
            id={content[1].id}
          />
          {/* </div> */}
        </div>
        <div className={styles.restaurantText}>
          <div className={styles.dualText}>
            <div>
              <h2>{content[0].title}</h2>
              <p>{content[0].description}</p>
            </div>
            <Link
              className={`${styles.cta} ${styles.white}`}
              href={content[0].link}
            >
              Go to website
              <Image
                src="/arrow-black-right.svg"
                width={29}
                height={35}
                alt="arrow down white"
              />
            </Link>
          </div>
          <div className={styles.dualText}>
            <div>
              <h2>{content[1].title}</h2>
              <p>{content[1].description}</p>
            </div>
            <Link
              className={`${styles.cta} ${styles.white}`}
              href={content[1].link}
            >
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
  );
}

export default Dual;
