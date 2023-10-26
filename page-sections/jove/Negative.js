import { useEffect, useRef } from "react";
import styles from "@/styles/section-css/jove/Negative.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Negative() {
  const main = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".logo", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".logo",
          start: "top center",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Negative} ref={main}>
      <div className="container">
        <div className={styles.imageWrap}>
          <Image
            src="/images/single-project/jove/logo1.svg"
            alt="logo variant 1"
            width={600}
            height={418}
            className="logo"
          />
          <Image
            src="/images/single-project/jove/logo2.svg"
            alt="logo variant 2"
            width={700}
            height={418}
            className="logo"
          />
          <Image
            src="/images/single-project/jove/logo3.svg"
            alt="logo variant 3"
            width={600}
            height={418}
            className="logo"
          />
          <Image
            src="/images/single-project/jove/logo4.svg"
            alt="logo variant 4"
            width={700}
            height={418}
            className="logo"
          />
        </div>
        <div className={styles.text}>
          <h2>Color choices</h2>
          <div className={styles.row}>
            <p>
              The color palette followed the story through muted, earthy tones,
              together with a contrasted combination of black and gold used in
              the product label and as a clear indicator of premium quality.
            </p>
            <div className={styles.colors}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Negative;
