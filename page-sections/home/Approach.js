import Image from "next/image";
import styles from "../../styles/section-css/home/Approach.module.css";
import Lottie from "lottie-react";
import scratchBlue from "@/public/scratch-blue.json";
import scratchGreen from "@/public/scratch-green.json";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Approach() {
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
    <section className={styles.Approach}>
      <div className="container">
        <span className={`${styles.tag} tag-large`}>Our Approach</span>
        <h2 className={styles.tagline}>
          Our approach is based on customized solutions that make a real{" "}
          <span className={styles.scratchWrap}>
            <Lottie
              animationData={scratchBlue}
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
            src="/arrow-blue-down.svg"
            alt="arrow blue down"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}

export default Approach;
