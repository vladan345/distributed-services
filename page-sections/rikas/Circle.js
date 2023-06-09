import { useRef, useEffect } from "react";
import styles from "../../styles/section-css/rikas/Circle.module.css";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Circle() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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
        <div className={styles.circleM}>
          <Image
            src="/images/single-project/rikas/rikas-circle-mobile.png"
            alt="tagomago and gohan restaurants"
            width={1360}
            height={1360}
            className="circleImage"
          />
        </div>
        <Image
          src="/images/home/sand_bgr.jpg"
          alt="Sand background"
          width={1920}
          height={2878}
          className={`sandBackground ${styles.sandBackground}`}
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
            <Link
              className={`${styles.cta} ${styles.white}`}
              href="https://tagomago.ae/"
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
              <h2>Chez Wam</h2>
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
              href="https://chezwam.ae"
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
    </>
  );
}

export default Circle;
