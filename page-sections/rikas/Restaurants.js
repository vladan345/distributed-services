import { useRef, useEffect } from "react";
import styles from "../../styles/section-css/rikas/Restaurants.module.css";
import Image from "next/image";
import Link from "next/link";
import { restaurants1, restaurants2 } from "@/lib/rikasRestaurants";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Restaurants() {
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
    }, main.current);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.Restaurants} ref={main}>
      {restaurants1 &&
        restaurants1.map((restaurant, index) => {
          return (
            <div
              className={`${styles.row} ${
                restaurant.imageOnLeft ? styles.right : styles.left
              }`}
              key={index}
            >
              <div className={`${styles.imageWrap} trigger`}>
                <Image
                  src={restaurant.image}
                  alt="La cantine restaurant"
                  height={1060}
                  width={900}
                  className="restaurantImage"
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
      <div className={styles.intersection}>
        <div className="container">
          <h2>
            Feugiat euismod mattis gravida mi aliquet cursus. Vulputate lacinia
            pharetra eu morbi risus. Sed sem fames leo est vel. Vitae mi nunc
            ultricies auctor ac vel non hac eu.
          </h2>
          <div className={`${styles.dualCircle} dualTrigger`}>
            {/* <div className={`${styles.halfLeft}`}> */}
            <Image
              src="/images/single-project/rikas/marcel.webp"
              alt="Marcel restaurant"
              width={900}
              height={1060}
              className="dualImage"
            />
            {/* </div> */}
            {/* <div className={`${styles.halfRight}`}> */}
            <Image
              src="/images/single-project/rikas/gohan.webp"
              alt="Gohan restaurant"
              width={900}
              height={1060}
              className="dualImage"
            />
            {/* </div> */}
          </div>
          <div className={styles.restaurantText}>
            <div className={styles.dualText}>
              <div>
                <h2>Madeleine et Marcel</h2>
                <p>
                  Volutpat dictumst risus nisl adipiscing non. Penatibus commodo
                  vel eget neque consectetur morbi odio facilisis. Congue rutrum
                  integer turpis vulputate integer at vitae in quis. Nisi
                  gravida cursus et mattis. Ac pulvinar sodales adipiscing nec
                  elit nibh.
                </p>
              </div>
              <Link className={`${styles.cta} ${styles.white}`} href="#">
                Go to website
                <Image
                  src="/arrow-black-right.svg"
                  width={29}
                  height={35}
                  alt="arrow down white"
                />
              </Link>
            </div>
            <div className={styles.dualText}>
              <div>
                <h2>Gohan</h2>
                <p>
                  Nibh elementum dui imperdiet mauris nunc ac non nibh cras.
                  Fermentum quis lacinia odio ipsum. Viverra maecenas vulputate
                  sed morbi risus. Vitae dapibus faucibus in et adipiscing ac
                  odio nibh. Massa pellentesque vitae dolor eu. Pulvinar
                  tristique pretium semper pellentesque a.
                </p>
              </div>
              <Link className={`${styles.cta} ${styles.white}`} href="#">
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

      {restaurants2 &&
        restaurants2.map((restaurant, index) => {
          return (
            <div
              className={`${styles.row} ${
                restaurant.imageOnLeft ? styles.right : styles.left
              }`}
              key={index}
            >
              <div className={`${styles.imageWrap} trigger`}>
                <Image
                  src={restaurant.image}
                  alt="La cantine restaurant"
                  height={1060}
                  width={900}
                  className="restaurantImage"
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

      <div className={styles.circle}>
        <Image
          src="/images/single-project/rikas/rikas-circle.png"
          alt="tagomago and gohan restaurants"
          width={1360}
          height={1360}
          className="circleImage"
        />
      </div>
      <div className={`${styles.circleSection} circleTrigger`}>
        <Image
          src="/images/home/sand_bgr.jpg"
          alt="Sand background"
          fill
          sizes="100vw"
        />
        <div className={styles.restaurantText}>
          <div className={styles.dualText}>
            <div>
              <h2>Tagomago</h2>
              <p>
                Volutpat dictumst risus nisl adipiscing non. Penatibus commodo
                vel eget neque consectetur morbi odio facilisis. Congue rutrum
                integer turpis vulputate integer at vitae in quis. Nisi gravida
                cursus et mattis. Ac pulvinar sodales adipiscing nec elit nibh.
              </p>
            </div>
            <Link className={`${styles.cta} ${styles.white}`} href="#">
              Go to website
              <Image
                src="/arrow-black-right.svg"
                width={29}
                height={35}
                alt="arrow down white"
              />
            </Link>
          </div>
          <div className={styles.dualText}>
            <div>
              <h2>Gohan</h2>
              <p>
                Nibh elementum dui imperdiet mauris nunc ac non nibh cras.
                Fermentum quis lacinia odio ipsum. Viverra maecenas vulputate
                sed morbi risus. Vitae dapibus faucibus in et adipiscing ac odio
                nibh. Massa pellentesque vitae dolor eu. Pulvinar tristique
                pretium semper pellentesque a.
              </p>
            </div>
            <Link className={`${styles.cta} ${styles.white}`} href="#">
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
}

export default Restaurants;
