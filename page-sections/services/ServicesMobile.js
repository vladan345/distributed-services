import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/services/ServicesMobile.module.css";

import { services } from "@/lib/homeServices";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function ServicesMobile() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const randomX = (el) => {
        var tl = gsap.timeline();
        tl.set(el, { y: 0 });
        tl.to(el, { y: 50, ease: "power1.inOut", duration: 5 });
        tl.to(el, {
          y: 0,
          ease: "power1.inOut",
          duration: 5,
          onComplete: randomX,
          onCompleteParams: [el],
          stagger: 0.5,
        });
      };

      let currentSection;
      let currentImage;
      let sections = gsap.utils.toArray("section");
      let imageSections = gsap.utils.toArray(".imageSlide");
      currentSection = sections[0];
      currentImage = imageSections[0];

      // let initialImages = imageSections[0].querySelectorAll("img");
      let interval = 1000;
      // initialImages.forEach((image, index) => {
      //   setTimeout(function () {
      //     randomX(image);
      //   }, index * interval);
      // });

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
        width: "100%",
        ease: "none",
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
          overwrite: true,
          scrollTrigger: {
            start: () => (i - 0.5) * innerHeight * 2 + sectionPos.top,
            end: () => (i + 0.5) * innerHeight * 2 + sectionPos.top,
            scrub: 1,
            onToggle: (self) => {
              return self.isActive && setSection(section, imageSections[i]);
            },
          },
        });
      });

      function setSection(newSection, newImages) {
        if (newSection !== currentSection) {
          let newImageSet = newImages.querySelectorAll("img");
          let currentImageSet = currentImage.querySelectorAll("img");

          var tl = gsap.timeline();
          tl.to(currentSection, {
            autoAlpha: 0,
            y: 100,
            duration: 0.5,
            overwrite: true,
          });
          tl.to(newSection, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            overwrite: true,
          });

          var tl = gsap.timeline();
          for (let i = currentImageSet.length - 1; i >= 0; i--) {
            tl.to(currentImageSet[i], {
              autoAlpha: 0,
              y: 100,
              duration: 0.5,
              overwrite: true,
            });
          }

          newImageSet.forEach((image) => {
            tl.to(image, { autoAlpha: 1, y: 0, duration: 0.5 });
          });

          currentSection = newSection;
          currentImage = newImages;
        }
      }
      const floatImages = gsap.utils.toArray(".float");
      floatImages.forEach((image, index) => {
        setTimeout(function () {
          randomX(image);
        }, index * interval);
      });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Services} ref={main}>
      <div className={`${styles.circleWrap} circleWrap`}>
        <div className={`${styles.circle} circle`}></div>
      </div>
      <div className={`${styles.progressbar} progressbar`}></div>

      <div className="trigger">
        <div className={styles.stickyWrap}>
          <div className={`${styles.container} container`}>
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
                      <Link href={service.link}>View Project</Link>
                    </section>
                  );
                } else {
                  return (
                    <section className={styles.slide} key={index}>
                      <span className={styles.number}>0{index + 1}</span>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <Link href={service.link}>
                        View Project{" "}
                        <Image
                          src="/arrow-black-right.svg"
                          width={29}
                          height={35}
                          alt="arrow down white"
                        />
                      </Link>
                    </section>
                  );
                }
              })}
          </div>
          <div className={styles.imageWrap}>
            <div className={`${styles.imageSlide} imageSlide ${styles.first}`}>
              <Image
                src="/images/services/accordion/laptop-desktop.webp"
                alt="Web design"
                width={933}
                height={783}
                className={`${styles.accordionImage} imageActive`}
              />
            </div>
            <div className={`${styles.imageSlide} imageSlide`}>
              <Image
                src="/images/services/accordion/dev-laptop-desktop.webp"
                alt="Web development"
                width={733}
                height={664}
                className={`${styles.accordionImage}`}
                style={{ transform: "rotate(90deg)" }}
              />
            </div>
            <div className={`${styles.imageSlide} imageSlide`}>
              <Image
                src="/images/services/accordion/phone-desktop.webp"
                alt="Digital marketing"
                width={747}
                height={670}
                className={`${styles.accordionImage}`}
              />
            </div>
            <div className={`${styles.imageSlide} imageSlide`}>
              <Image
                src="/images/services/accordion/brandbook-desktop.webp"
                alt="Branding"
                width={743}
                height={754}
                className={`${styles.accordionImage}`}
              />
            </div>
            <div className={`${styles.imageSlide} imageSlide`}>
              <Image
                src="/images/services/accordion/planet-desktop.webp"
                alt="Outsourcing"
                width={1107}
                height={704}
                className={`${styles.accordionImage}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesMobile;
