import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/home/Services.module.css";

import { services } from "@/lib/homeServices";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let currentSection;
      let sections = gsap.utils.toArray("section");
      let imageSections = gsap.utils.toArray(".imageWrap");

      currentSection = sections[0];
      const sectionPos = main.current.getBoundingClientRect();

      gsap.set(".trigger", { height: sections.length * 200 + "vh" });
      gsap.to(".progressbar", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          toggleActions: "restart none reverse none",
        },
        width: "100vw",
      });
      gsap.to(".circle", {
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "bottom bottom",

          scrub: 1,
          toggleActions: "restart none reverse none",
        },
        backgroundPosition: "0% 0",
      });
      sections.forEach((section, i) => {
        var tl = gsap.timeline({
          scrollTrigger: {
            start: () => (i - 0.5) * innerHeight * 2 + sectionPos.top,
            end: () => (i + 0.5) * innerHeight * 2 + sectionPos.top,
            scrub: true,
            onToggle: (self) => {
              return self.isActive && setSection(section);
            },
          },
        });
      });

      function setSection(newSection) {
        if (newSection !== currentSection) {
          var tl = gsap.timeline();
          tl.to(currentSection, { autoAlpha: 0, y: 100, duration: 0.5 });
          tl.to(newSection, { autoAlpha: 1, y: 0, duration: 0.5 });

          var tl = gsap.timeline();
          tl.to(imageSections[sections.indexOf(currentSection)], {
            autoAlpha: 0,
            left: "70%",
            duration: 0.5,
            ease: "power",
          });
          tl.to(imageSections[sections.indexOf(newSection)], {
            left: "50%",
            autoAlpha: 1,
            duration: 0.5,
            ease: "power",
          });
          currentSection = newSection;
        }
      }
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Services} ref={main}>
      <div className={`${styles.circle} circle`}></div>
      <div className={`${styles.progressbar} progressbar`}></div>
      <div className={styles.headingWrap}>
        <h2>Services</h2>
      </div>

      <div className="container">
        <div className="trigger">
          <div className={styles.stickyWrap}>
            {services &&
              services.map((service, index) => {
                if (index === 0) {
                  return (
                    <section
                      key={index}
                      className={`${styles.slide} ${styles.first}`}
                    >
                      <span className={styles.number}>0{index + 1}</span>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <a href={service.link}>View Project</a>
                    </section>
                  );
                } else {
                  return (
                    <section className={styles.slide} key={index}>
                      <span className={styles.number}>0{index + 1}</span>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <a href={service.link}>View Project</a>
                    </section>
                  );
                }
              })}
            <div className={styles.imageSlide}>
              <div className={`${styles.imageWrap} imageWrap ${styles.first}`}>
                <Image
                  src="/images/home/service1-desktop.webp"
                  alt="Web design desktop mockup"
                  width={847}
                  height={782}
                />
                <Image
                  src="/images/home/service1-laptop.webp"
                  alt="Web design laptop mockup"
                  width={1027}
                  height={638}
                  style={{ bottom: 0 }}
                />
                <Image
                  src="/images/home/service1-phone.webp"
                  alt="Web design laptop mockup"
                  width={444}
                  height={478}
                  style={{ bottom: 0 }}
                />
              </div>
              <div className={`${styles.imageWrap} imageWrap`}>
                <Image
                  src="/images/home/service1-desktop.webp"
                  alt="Web design desktop mockup"
                  width={847}
                  height={782}
                />
              </div>
              <div className={`${styles.imageWrap} imageWrap`}>
                <Image
                  src="/images/home/service1-desktop.webp"
                  alt="Web design desktop mockup"
                  width={847}
                  height={782}
                />
              </div>
              <div className={`${styles.imageWrap} imageWrap`}>
                <Image
                  src="/images/home/service1-desktop.webp"
                  alt="Web design desktop mockup"
                  width={847}
                  height={782}
                />
              </div>
              <div className={`${styles.imageWrap} imageWrap`}>
                <Image
                  src="/images/home/service1-desktop.webp"
                  alt="Web design desktop mockup"
                  width={847}
                  height={782}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
