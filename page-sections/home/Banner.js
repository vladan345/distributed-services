import { useRef, useEffect } from "react";
import styles from "../../styles/section-css/home/Banner.module.css";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".slider", {
        scrollTrigger: {
          trigger: ".slider",
          scrub: true,
        },
        x: "-15%",
      });
    }, main.current);

    return () => ctx.revert();
  }, []);
  return (
    <section className={styles.Banner} ref={main}>
      <div className={`${styles.parallax} slider`}>
        <Image
          width={2600}
          height={1360}
          src="/images/home/Dubai.jpg"
          alt="Dubai background"
        />
      </div>
      <div className="container">
        <span>Now distributing in Dubai!</span>
        <div className={styles.textRow}>
          <p>
            Orci fermentum id sed sed ipsum pellentesque arcu mi imperdiet. Amet
            rhoncus nam sit tortor urna faucibus urna amet. Iaculis sit elit
            mauris purus lobortis.
          </p>
          <Link href="#" className={styles.readMore}>
            <h2>Read more</h2>
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

export default Banner;
