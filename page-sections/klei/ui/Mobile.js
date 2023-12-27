import { useRef, useEffect } from "react";
import styles from "./styles/Mobile.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Mobile() {
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".middlePhone", {
        margin: `0 ${window.innerWidth <= 900 ? "-120px" : "-140px"}`,
        duration: 1,
        scrollTrigger: {
          trigger: ".container",
          start: "center bottom",
        },
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <section className={styles.Mobile} ref={main}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/single-project/klei/mobile1.webp"
              alt="Mobile Screen Klei"
              width={400}
              height={775}
            />
            <Image
              src="/images/single-project/klei/mobile2.webp"
              alt="Mobile Screen Klei"
              width={360}
              height={696}
              className="middlePhone"
            />
            <Image
              src="/images/single-project/klei/mobile3.webp"
              alt="Mobile Screen Klei"
              width={320}
              height={620}
            />
          </div>
          <p>
            Leveraging cutting-edge design principles and employing a
            mobile-first strategy, we seamlessly adapted the website&apos;s
            layout, navigation, and functionality to cater to the unique demands
            of mobile users. <br />
            <br />
            The result is a visually engaging and intuitively navigable mobile
            version that not only mirrors the desktop experience but also
            enhances accessibility, providing our client with a competitive edge
            in reaching and engaging their target audience on any device.
          </p>
        </div>
      </div>
    </section>
  );
}
