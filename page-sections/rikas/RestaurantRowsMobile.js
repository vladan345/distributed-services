import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/rikas/RestaurantRowsMobile.module.css";

import { services } from "@/lib/homeServices";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function RestaurantRowsMobile({ content }) {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let currentSection;
      let currentImage;
      let sections = gsap.utils.toArray("section");
      let imageSections = gsap.utils.toArray(".imageSlide");
      console.log(imageSections);
      currentSection = sections[0];
      currentImage = imageSections[0];

      const sectionPos = main.current.getBoundingClientRect();

      gsap.set(".triggerM", {
        height: sections.length * 200 + "vh",
      });

      gsap.to(".progressbar", {
        scrollTrigger: {
          trigger: ".triggerM",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          toggleActions: "restart none reverse none",
        },
        width: "100%",
        ease: "none",
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
        console.log(newImages);
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
      <div className={`${styles.progressbar} progressbar`}></div>

      <div className="triggerM">
        <div className={styles.stickyWrap}>
          <div className={`${styles.container} container`}>
            {content &&
              content.map((restaurant, index) => {
                return (
                  <section
                    key={index}
                    className={`${styles.slide} ${
                      index === 0 ? styles.first : ""
                    }`}
                  >
                    <h3>{restaurant.title}</h3>
                    <p>{restaurant.description}</p>
                    <Link href={restaurant.link}>
                      Go to website
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
            {content &&
              content.map((restaurant, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.imageSlide} ${
                      index === 0 ? styles.first : ""
                    } imageSlide`}
                  >
                    <Image
                      src={restaurant.image}
                      alt="Restaurant"
                      width={900}
                      height={1060}
                      className={`${styles.accordionImage} imageActive`}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantRowsMobile;
