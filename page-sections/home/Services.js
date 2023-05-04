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
        });
      };

      let currentSection;
      let currentImage;
      let sections = gsap.utils.toArray("section");
      let imageSections = gsap.utils.toArray(".imageSlide");
      currentSection = sections[0];
      currentImage = imageSections[0];

      let initialImages = imageSections[0].querySelectorAll("img");
      let interval = 1000;
      initialImages.forEach((image, index) => {
        setTimeout(function () {
          randomX(image);
        }, index * interval);
      });

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
          tl.to(currentSection, { autoAlpha: 0, y: 100, duration: 0.5 });
          tl.to(newSection, { autoAlpha: 1, y: 0, duration: 0.5 });

          var tl = gsap.timeline();
          for (let i = currentImageSet.length - 1; i >= 0; i--) {
            tl.to(currentImageSet[i], { autoAlpha: 0, x: 100, duration: 0.5 });
          }

          newImageSet.forEach((image, index) => {
            setTimeout(function () {
              randomX(image);
            }, index * interval);
          });
          newImageSet.forEach((image) => {
            tl.to(image, { autoAlpha: 1, x: 0, duration: 0.5 });
          });

          currentSection = newSection;
          currentImage = newImages;
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
                      <Link href={service.link}>View Project</Link>
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
            <div className={styles.imageWrap}>
              <div
                className={`${styles.imageSlide} imageSlide ${styles.first}`}
              >
                <Image
                  src="/images/home/services/service1-desktop.webp"
                  alt="Web design desktop mockup"
                  width={847}
                  height={782}
                />
                <Image
                  src="/images/home/services/service1-laptop.webp"
                  alt="Web design laptop mockup"
                  width={1027}
                  height={638}
                  style={{ bottom: 0 }}
                />
                <Image
                  src="/images/home/services/service1-phone.webp"
                  alt="Web design laptop mockup"
                  width={444}
                  height={478}
                  style={{ bottom: 0 }}
                />
              </div>
              <div className={`${styles.imageSlide} imageSlide`}>
                <Image
                  src="/images/home/services/dev-laptop-1.webp"
                  alt="Web design desktop mockup"
                  width={962}
                  height={1041}
                />
                <Image
                  src="/images/home/services/kafa-1.webp"
                  alt="Web design desktop mockup"
                  width={388}
                  height={374}
                  style={{ right: "35%" }}
                />
              </div>
              <div className={`${styles.imageSlide} imageSlide`}>
                <Image
                  src="/images/home/services/marketing-phone-1.webp"
                  alt="Web design desktop mockup"
                  width={952}
                  height={1066}
                  style={{ bottom: "-20%", right: "-25%" }}
                />
                <Image
                  src="/images/home/services/point-1.webp"
                  alt="Web design desktop mockup"
                  width={1079}
                  height={706}
                  style={{ bottom: "-70%" }}
                />
              </div>
              <div className={`${styles.imageSlide} imageSlide`}>
                <Image
                  src="/images/home/services/vizitke-1.webp"
                  alt="Web design desktop mockup"
                  width={506}
                  height={331}
                  style={{ bottom: "35%", right: "20%" }}
                />
                <Image
                  src="/images/home/services/can.webp"
                  alt="Web design desktop mockup"
                  width={624}
                  height={569}
                  style={{ bottom: "35%" }}
                />
                <Image
                  src="/images/home/services/brandbook-1.webp"
                  alt="Web design desktop mockup"
                  width={1102}
                  height={915}
                  style={{ bottom: "-10%", right: "-10%" }}
                />
              </div>
              <div className={`${styles.imageSlide} imageSlide`}>
                <Image
                  src="/images/home/services/zemlja.webp"
                  alt="Web design desktop mockup"
                  width={800}
                  height={750}
                />
                <Image
                  src="/images/home/services/moon-1.webp"
                  alt="Web design desktop mockup"
                  width={137}
                  height={145}
                  style={{ bottom: "75%", right: "5%" }}
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
