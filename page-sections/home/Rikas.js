import { useRef, useEffect, useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import styles from "../../styles/section-css/home/Rikas.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Rikas() {
  const textContent = {
    lacantine: [
      "LACANTINE ipsum dolor sit amet consectetur. Semper praesent scelerisque blandit sed morbi feugiat pellentesque.",
      "Fames ac diam quis et adipiscing orci vitae. Aliquam elit pellentesque diam faucibus.",
    ],
    tagomago: [
      "TAGOMAGO ipsum dolor sit amet consectetur. Semper praesent scelerisque blandit sed morbi feugiat pellentesque.",
      "Fames ac diam quis et adipiscing orci vitae. Aliquam elit pellentesque diam faucibus.",
    ],
    twiggy: [
      "TWIGGY ipsum dolor sit amet consectetur. Semper praesent scelerisque blandit sed morbi feugiat pellentesque.",
      "Fames ac diam quis et adipiscing orci vitae. Aliquam elit pellentesque diam faucibus.",
    ],
  };
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
    const images = main.current.querySelectorAll(".restaurantImage");
    images.forEach((image) => {
      image.style.opacity = 0;

      setTimeout(() => {
        image.style.opacity = 1;
        setRestaurant(e.target.value);
      }, 300);
    });
  };
  return (
    <section className={styles.Rikas}>
      <div className={styles.featured} ref={main}>
        <div className={`${styles.bg} background`}>
          <NextImage
            fill
            src="/images/home/sand_bgr.jpg"
            alt="sand background"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  className={`${styles.restaurantImage} restaurantImage`}
                />
              </div>
            </div>
            <div className={styles.col}>
              <NextImage
                src={`/images/home/${restaurant}2.webp`}
                alt="Beach image rikas group"
                width={440}
                height={560}
                className={`${styles.restaurantImage} restaurantImage`}
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
                {textContent[restaurant].map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
                <NextImage
                  src={`/images/home/${restaurant}3.webp`}
                  alt="Beach image rikas group"
                  width={440}
                  height={560}
                  className={`${styles.restaurantImage} restaurantImage`}
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
