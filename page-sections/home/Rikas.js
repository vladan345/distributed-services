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
      "Stunning design and website development websites for the restaurant's newly opened locations in Dubai and Mykonos, followed by strategic lead conversion campaigns!",
      "That's how we supported La Cantine du Faubourg's brand expansion in the global culinary landscape.",
    ],
    tagomago: [
      "We had the privilege to complete a website development project for Tagomago, a renowned restaurant in the RIKAS family.",
      "Our team ensured seamless integration of the design elements while optimizing the website for intuitive navigation and optimal user experience.",
    ],
    twiggy: [
      "Our talented team created a visually captivating website that truly captured Twiggy's unique essence.",
      "By targeting the right audience and driving customer conversions, we managed to effectively enhance Twiggy's online presence, attract qualified leads, and ultimately contribute to their continued success in the competitive restaurant industry.",
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
            sizes="100vw"
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
              <Link className={styles.projectBtn} href="/projects/rikas">
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
