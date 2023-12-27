"use client";
import { useRef, useEffect } from "react";
import styles from "./styles/Hands.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hands() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".leftHand", {
        y: `-${window.innerWidth / 4}px`,
        scrollTrigger: {
          trigger: ".handsWrap",
          scrub: true,
          start: "-300px bottom",
        },
      });
      gsap.to(".rightHand", {
        y: `${window.innerWidth / 4}px`,
        scrollTrigger: {
          trigger: ".handsWrap",
          scrub: true,
          start: "-300px bottom",
        },
      });
      gsap.to(".blob", {
        rotate: 120,
        scrollTrigger: {
          trigger: ".handsWrap",
          scrub: true,
          start: "-300px bottom",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <section className={styles.Hands} ref={main}>
      <div className={`${styles.wrapper} handsWrap`}>
        <Image
          src="/images/single-project/klei/ruka2.webp"
          width={286}
          height={811}
          alt="Left hand Klei"
          className={`${styles.rightHand} rightHand`}
        />
        <div className={`${styles.blobWrap}`}>
          <Image
            src="/images/single-project/klei/blob.svg"
            width={868}
            height={829}
            alt="Klei"
            className={`${styles.blob} blob`}
          />
          <Image
            src="/images/single-project/klei/text.svg"
            width={481}
            height={131}
            alt="A movement, not a brand."
            className={styles.text}
          />
        </div>
        <Image
          src="/images/single-project/klei/ruka1.webp"
          width={535}
          height={934}
          alt="Left hand Klei"
          className={`${styles.leftHand} leftHand`}
        />
      </div>
    </section>
  );
}
