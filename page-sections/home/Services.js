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
      // const randomX = (el) => {
      //   var tl = gsap.timeline();
      //   tl.set(el, { y: 0 });
      //   tl.to(el, { y: 50, ease: "power1.inOut", duration: 5 });
      //   tl.to(el, {
      //     y: 0,
      //     ease: "power1.inOut",
      //     duration: 5,
      //     onComplete: randomX,
      //     onCompleteParams: [el],
      //     stagger: 0.5,
      //   });
      // };

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
          scrub: true,
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

          scrub: true,
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
            scrub: true,
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
              x: 100,
              duration: 0.5,
              overwrite: true,
            });
          }

          newImageSet.forEach((image) => {
            tl.to(image, { autoAlpha: 1, x: 0, duration: 0.5 });
          });

          currentSection = newSection;
          currentImage = newImages;
        }
      }
      // const floatImages = gsap.utils.toArray(".float");

      // floatImages.forEach((image, index) => {
      //   setTimeout(function () {
      //     randomX(image);
      //   }, index * interval);
      // });
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Services} ref={main}>
      <div className={`${styles.circleWrap} circleWrap`}>
        <div className={`${styles.circle} circle`}></div>
      </div>
      <div className={`${styles.progressbar} progressbar`}></div>
      <div className={styles.headingWrap}>
        <h2>Services</h2>
      </div>

      <div className="trigger">
        <div className={styles.stickyWrap}>
          <div className={`${styles.container} container`}>
            {services &&
              services.map((service, index) => {
                return (
                  <section
                    key={index}
                    className={`${styles.slide} ${
                      index === 0 ? styles.first : ""
                    }`}
                  >
                    <span className={styles.number}>0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <Link href={service.link}>
                      View Project
                      <Image
                        src="/arrow-black-right.svg"
                        width={29}
                        height={35}
                        alt="arrow down white"
                      />
                    </Link>
                  </section>
                );
              })}
          </div>
          <div className={styles.imageWrap}>
            <div className={`${styles.imageSlide} imageSlide ${styles.first}`}>
              <div className={`float ${styles.singleImage} ${styles.desktop}`}>
                <Image
                  src="/images/home/services/service1-desktop.webp"
                  alt="Web design desktop mockup"
                  width={847}
                  height={782}
                />
              </div>
              <div className={`float ${styles.singleImage} ${styles.laptop}`}>
                <Image
                  src="/images/home/services/service1-laptop.webp"
                  alt="Web design laptop mockup"
                  width={1027}
                  height={638}
                  className="float"
                />
              </div>
              <div className={`float ${styles.singleImage} ${styles.phone}`}>
                <Image
                  src="/images/home/services/service1-phone.png"
                  alt="Web design mobile mockup"
                  width={568}
                  height={632}
                  className="float"
                />
              </div>
            </div>
            <div className={`${styles.imageSlide} imageSlide`}>
              <div
                className={`float ${styles.singleImage} ${styles.devLaptop}`}
              >
                <Image
                  src="/images/home/services/dev-laptop.png"
                  alt="Web design desktop mockup"
                  width={1224}
                  height={1245}
                  className="float"
                />
              </div>
              <div className={`float ${styles.singleImage} ${styles.kafa}`}>
                <Image
                  src="/images/home/services/kafa-1.webp"
                  alt="Web design desktop mockup"
                  width={388}
                  height={374}
                  className="float"
                />
              </div>
            </div>
            <div className={`${styles.imageSlide} imageSlide`}>
              <div
                className={`float ${styles.singleImage} ${styles.marketingPhone}`}
              >
                <Image
                  src="/images/home/services/marketing-phone-1.png"
                  alt="Web design desktop mockup"
                  width={1046}
                  height={970}
                  className={`float`}
                />
              </div>
              <div className={`float ${styles.singleImage} ${styles.point}`}>
                <Image
                  src="/images/home/services/point-1.png"
                  alt="Web design desktop mockup"
                  width={925}
                  height={1136}
                  className="float"
                />
              </div>
            </div>
            <div className={`${styles.imageSlide} imageSlide`}>
              <div className={`float ${styles.singleImage} ${styles.vizit}`}>
                <Image
                  src="/images/home/services/vizitke-1.webp"
                  alt="Web design desktop mockup"
                  width={506}
                  height={331}
                  className="float"
                />
              </div>
              <div className={`float ${styles.singleImage} ${styles.can}`}>
                <Image
                  src="/images/home/services/can.webp"
                  alt="Web design desktop mockup"
                  width={624}
                  height={569}
                  className="float"
                />
              </div>
              <div
                className={`float ${styles.singleImage} ${styles.brandbook}`}
              >
                <Image
                  src="/images/home/services/brandbook-1.png"
                  alt="Web design desktop mockup"
                  width={1390}
                  height={995}
                  className="float"
                />
              </div>
            </div>
            <div className={`${styles.imageSlide} imageSlide`}>
              <div className={`float ${styles.singleImage} ${styles.zemlja}`}>
                <Image
                  src="/images/home/services/earth.png"
                  alt="Web design desktop mockup"
                  width={1489}
                  height={1489}
                  className="float"
                />
              </div>
              <div className={`float ${styles.singleImage} ${styles.moon}`}>
                <Image
                  src="/images/home/services/moon-1.webp"
                  alt="Web design desktop mockup"
                  width={137}
                  height={145}
                  className="float"
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
