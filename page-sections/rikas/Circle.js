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
          end: "top top",
          trigger: ".circleTrigger",
          toggleActions: "play none reverse none",
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
                We had the privilege to complete a website development project
                for Tagomago, a renowned restaurant in the RIKAS family. With
                their existing design as our foundation, we meticulously crafted
                and developed a fully functional website that showcased the
                essence of Tagomago&apos;s brand, perfectly reflecting their
                unique identity and culinary excellence. Our team ensured
                seamless integration of the design elements while optimizing the
                website for intuitive navigation and optimal user experience.
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
                A full package for an esteemed Dubai restaurant! Chez Wam
                received a comprehensive suite of services tailored to their
                needs: a visually appealing and user-friendly website, top-tier
                performance marketing strategy using Google Ads and a dedicated
                team for regular maintenance and updates!
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
