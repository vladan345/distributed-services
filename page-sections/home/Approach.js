import { useRef } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/home/Approach.module.css";
import Lottie from "lottie-react";
import scratchGreen from "@/public/scratch-green.json";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Approach() {
  const section = useRef(null);
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

  const handleClick = () => {
    const container = section.current;
    const html = document.querySelector("html");
    html.style.scrollBehavior = "smooth";
    window.scrollTo(0, container.offsetHeight + container.offsetTop);
    setTimeout(() => {
      html.style.scrollBehavior = "auto";
    }, 500);
  };

  return (
    <section ref={section} className={styles.Approach}>
      <div className="container">
        <span className={`${styles.tag} tag-large`}>Our Approach</span>
        <h2 className={styles.tagline}>
          Our approach is based on customized solutions that make a real{" "}
          <span className={styles.scratchWrap}>
            <Lottie
              animationData={scratchGreen}
              interactivity={interactivity2}
              className={styles.scratch}
            />
            impact
          </span>
          .
        </h2>
        <p className={styles.description}>
          We believe that creativity, data, and innovation are the keys to
          unlocking your digital potential.
        </p>

        <div className={styles.explore}>
          <span>See how we do it</span>
          <Image
            src="/arrow-white-down.svg"
            alt="arrow white down"
            width={54}
            height={54}
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
}

export default Approach;
