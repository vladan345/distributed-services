import { useRef, useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/section-css/home/RikasM.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RikasM() {
  const [restaurant, setRestaurant] = useState("lacantine");
  const main = useRef(null);

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    console.log(emblaApi);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".background",
        {
          scrollTrigger: {
            trigger: ".background",
            scrub: true,
          },
          y: -300,
        },
        {
          scrollTrigger: {
            trigger: ".background",
            scrub: true,
          },
          y: 50,
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
    <section className={styles.RikasM}>
      <div className={styles.featured} ref={main}>
        <div className={`${styles.bg} background`}>
          <Image fill src="/images/home/sand_bgr.jpg" alt="sand background" />
        </div>
        <div className={styles.container}>
          <h4>Trusted partner</h4>
          <h2>
            Rikas
            <br />
            Hospitality Group
          </h2>
          <Image
            src="/images/home/rikas-logo.svg"
            alt="Beach image rikas group"
            width={146}
            height={220}
            className={styles.rikasLogo}
          />
          <div className={styles.radioSelect}>
            <label
              className={restaurant === "lacantine" ? styles.active : null}
            >
              <input
                onChange={handleSelect}
                type="radio"
                name="restaurant"
                value="lacantine"
                checked={restaurant === "lacantine"}
              />
              La Cantine du Faubourg
            </label>
            <label className={restaurant === "tagomago" ? styles.active : null}>
              <input
                onChange={handleSelect}
                type="radio"
                name="restaurant"
                value="tagomago"
              />
              Tagomago
            </label>
            <label className={restaurant === "twiggy" ? styles.active : null}>
              <input
                onChange={handleSelect}
                type="radio"
                name="restaurant"
                value="twiggy"
              />
              Twiggy
            </label>
          </div>

          <div className={styles.restaurantCOntent}>
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.embla__container}>
                <div className={styles.embla__slide}>
                  <Image
                    src={`/images/home/${restaurant}1.webp`}
                    alt="Beach image rikas group"
                    width={440}
                    height={560}
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src={`/images/home/${restaurant}2.webp`}
                    alt="Beach image rikas group"
                    width={440}
                    height={560}
                  />
                </div>
                <div className={styles.embla__slide}>
                  <Image
                    src={`/images/home/${restaurant}3.webp`}
                    alt="Beach image rikas group"
                    width={440}
                    height={560}
                  />
                </div>
              </div>
              <button className={styles.embla__prev} onClick={scrollPrev}>
                Prev
              </button>
              <button className={styles.embla__next} onClick={scrollNext}>
                Next
              </button>
            </div>
          </div>

          <Link className={styles.projectBtn} href="#">
            View Project
            <Image
              src="/arrow-black-right.svg"
              width={29}
              height={35}
              alt="arrow down white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RikasM;
