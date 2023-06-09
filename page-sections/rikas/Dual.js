import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/section-css/rikas/Dual.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Dual() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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
    }, main.current);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
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
                integer turpis vulputate integer at vitae in quis. Nisi gravida
                cursus et mattis. Ac pulvinar sodales adipiscing nec elit nibh.
              </p>
            </div>
            <Link
              className={`${styles.cta} ${styles.white}`}
              href="https://madeleineetmarcel.com/"
            >
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
            <Link
              className={`${styles.cta} ${styles.white}`}
              href="https://lacantine.ae/events/gohan"
            >
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

export default Dual;
