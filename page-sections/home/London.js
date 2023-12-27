import { useEffect, useRef } from "react";
import styles from "../../styles/section-css/home/London.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function London() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".panel");
      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".trigger",
          pin: true,
          scrub: true,
          end: window.innerWidth < 1240 ? "+=1000" : "+=6000",
        },
      });

      gsap.to(".cities", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top left",
          scrub: true,
          end: window.innerWidth < 1240 ? "+=1000" : "+=6000",
        },
      });
      gsap.set(".gradient", {
        background:
          "radial-gradient(circle at 33% 50%, #aae8fc, #62c9ea 19%, #3e4cc5 54%, #0f0bcd 72%)",
      });
      gsap.to(".gradient", {
        background:
          "radial-gradient(circle at 67% 50%, #f49d8e, #ea6281 19%, #9c53c7 54%, #700eab 72%)",
        ease: "none",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top left",
          scrub: true,
          end: window.innerWidth < 1240 ? "+=1000" : "+=6000",
        },
      });
      sections.forEach((section) => {
        let text = section.querySelectorAll(".anim");

        gsap.from(text, {
          y: -130,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left 50%",
          },
        });
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.London} ref={main} id="london">
      <div className={`${styles.trigger} trigger`}>
        <div className={`${styles.panel} panel`}>
          <div className={`${styles.container} container`}>
            <h2 className={`${styles.bigText} anim`}>
              We had our start in London
            </h2>
          </div>
        </div>
        <div className={`${styles.panel} panel`}>
          <div className={`${styles.container} container`}>
            <h2 className={`${styles.bigText} anim`}>
              Now distributing in Dubai!
            </h2>
          </div>
        </div>
        <Image
          src="/images/home/DS_Gradovi.png"
          alt="London and Dubai"
          width={3933}
          height={1080}
          className={`${styles.cityDesktop} cities`}
        />
        <Image
          src="/images/home/DS_Gradovi_m.png"
          alt="London and Dubai"
          width={1600}
          height={567}
          className={`${styles.cityMobile} cities`}
        />
        <Image
          src="/images/home/DS_Gradovi_ms.png"
          alt="London and Dubai"
          width={1000}
          height={500}
          className={`${styles.cityMobileSmall} cities`}
        />
        <div className={`${styles.gradient} gradient`}></div>
      </div>
    </section>
  );
}

export default London;
