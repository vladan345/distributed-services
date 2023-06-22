import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/home/Who.module.css";

import Lottie from "lottie-react";
import circle from "@/public/circle.json";
import scratch from "@/public/scratch.json";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Who() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".explore", {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".trigger",
          start: "50% bottom",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 0.6],
        type: "seek",
        frames: [0, 40],
      },
    ],
  };
  const interactivity2 = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 0.6],
        type: "seek",
        frames: [0, 45],
      },
    ],
  };

  return (
    <section className={styles.Who} ref={main} id="who">
      <div id="circleTrigger" className={`${styles.trigger} trigger`}>
        <div className={`${styles.sticky} container`}>
          <span className={`${styles.tag} tag-large`}>Who are we?</span>
          <h2 className={styles.tagline}>
            Create a brand from{" "}
            <span className={styles.scratchWrap}>
              <Lottie
                animationData={scratch}
                interactivity={interactivity2}
                className={styles.scratch}
              />
              scratch
            </span>
            ,{" "}
            <span className={styles.circleWrap}>
              <Lottie
                animationData={circle}
                interactivity={interactivity}
                className={styles.circle}
              />
              enhance
            </span>{" "}
            your existing product and everything in between!
          </h2>
          <p className={styles.description}>
            Distributed Services is a team of digital professionals who create
            magic together, covering all digital services distributed to provide
            our clients with the complete digital package.
          </p>

          <div className={`${styles.explore} explore`}>
            <span>EXPLORE</span>
            <Image
              src="/arrow-blue-down.svg"
              alt="arrow blue down"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who;
