import { useRef, useEffect, useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import styles from "../../styles/section-css/home/Rikas.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Rikas() {
  const [restaurant, setRestaurant] = useState("lacantine");
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
          y: 100,
        }
      );
      gsap.to(".left-image", {
        scrollTrigger: {
          trigger: ".left-image",
          scrub: true,
          start: "top bottom",
        },
        y: "200px",
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
          y: -100,
        }
      );
    }, main.current);
    return () => {
      ctx.revert();
    };
  }, []);

  const handleSelect = (e) => {
    setRestaurant(e.target.value);
  };
  return (
    <section className={styles.Rikas}>
      <div className={styles.featured} ref={main}>
        <div className={`${styles.bg} background`}>
          <NextImage
            fill
            src="/images/home/sand_bgr.jpg"
            alt="sand background"
          />
        </div>
        <h4>Trusted partner</h4>
        <h2>
          Rikas
          <br />
          Hospitality Group
        </h2>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.col}>
              <div className="left-image">
                <div className={styles.radioSelect}>
                  <label
                    className={
                      restaurant === "lacantine" ? styles.active : null
                    }
                  >
                    <input
                      onChange={handleSelect}
                      type="radio"
                      name="restaurant"
                      value="lacantine"
                      checked={restaurant === "lacantine"}
                    />
                    <span className={styles.checkmark}></span>
                    La Cantine du Faubourg
                  </label>
                  <label
                    className={restaurant === "tagomago" ? styles.active : null}
                  >
                    <input
                      onChange={handleSelect}
                      type="radio"
                      name="restaurant"
                      value="tagomago"
                    />
                    <span className={styles.checkmark}></span>
                    Tagomago
                  </label>
                  <label
                    className={restaurant === "twiggy" ? styles.active : null}
                  >
                    <input
                      onChange={handleSelect}
                      type="radio"
                      name="restaurant"
                      value="twiggy"
                    />
                    <span className={styles.checkmark}></span>
                    Twiggy
                  </label>
                </div>
                <NextImage
                  src={`/images/home/${restaurant}1.webp`}
                  alt="Beach image rikas group"
                  width={440}
                  height={560}
                />
              </div>
            </div>
            <div className={styles.col}>
              <NextImage
                src={`/images/home/${restaurant}2.webp`}
                alt="Beach image rikas group"
                width={440}
                height={560}
              />
              <NextImage
                src="/images/home/rikas-logo.svg"
                alt="Beach image rikas group"
                width={146}
                height={220}
              />
              <Link className={styles.projectBtn} href="#">
                View Project
                <NextImage
                  src="/arrow-black-right.svg"
                  width={29}
                  height={35}
                  alt="arrow down white"
                />
              </Link>
            </div>
            <div className={styles.col}>
              <div className="right-image">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Semper praesent
                  scelerisque blandit sed morbi feugiat pellentesque.
                  <br /> <br />
                  Fames ac diam quis et adipiscing orci vitae. Aliquam elit
                  pellentesque diam faucibus.
                </p>
                <NextImage
                  src={`/images/home/${restaurant}3.webp`}
                  alt="Beach image rikas group"
                  width={440}
                  height={560}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rikas;
