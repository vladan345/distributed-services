import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/section-css/rikas/RestaurantRows.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function RestaurantRows({ content }) {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let rows = gsap.utils.toArray(".trigger");
      rows.forEach((row) => {
        let image = row.querySelector(".restaurantImage");
        var tl = gsap.timeline();
        var tl2 = gsap.timeline();

        gsap.set(image, {
          y: -300,
        });
        gsap.to(image, {
          y: 0,
          scrollTrigger: {
            trigger: row,
            scrub: true,
          },
        });
        gsap.to(row, {
          duration: 1,
          width: "calc(50% - 60px)",
          ease: "power1.inOut",
          scrollTrigger: {
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse restart reverse",
            trigger: row,
          },
        });
      });

      gsap.set(".dualImage", {
        y: -300,
      });
      gsap.to(".dualImage", {
        y: 0,
        scrollTrigger: {
          trigger: ".dualTrigger",
          scrub: true,
        },
      });
      gsap.to(".dualTrigger", {
        duration: 1,
        width: "100%",
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top center",
          end: "bottom center",
          once: true,
          trigger: ".dualTrigger",
        },
      });

      gsap.to(".circleImage", {
        duration: 2,
        rotate: 180,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top bottom",
          once: true,
          trigger: ".circleTrigger",
        },
      });
      gsap.to(".sandBackground", {
        y: 100,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top bottom",
          scrub: true,
          trigger: ".circleTrigger",
        },
      });
    }, main.current);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      {content &&
        content.map((restaurant, index) => {
          return (
            <div
              className={`${styles.row} ${
                restaurant.imageOnLeft ? styles.right : styles.left
              }`}
              key={index}
              id={restaurant.id}
            >
              <div className={`${styles.imageWrap} trigger`}>
                <Image
                  src={restaurant.image}
                  alt="La cantine restaurant"
                  height={1060}
                  width={900}
                  className="restaurantImage !h-[120%] max-w-none"
                />
              </div>
              <div className="container">
                <div className={styles.rowWrap}>
                  <div className={styles.textBox}>
                    <h2 className={styles.title}>{restaurant.title}</h2>
                    <p className={styles.description}>
                      {restaurant.description}
                    </p>
                    <Link className={styles.cta} href={restaurant.link}>
                      Go to website
                      <Image
                        src="/arrow-black-right.svg"
                        width={29}
                        height={35}
                        alt="arrow down white"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default RestaurantRows;
