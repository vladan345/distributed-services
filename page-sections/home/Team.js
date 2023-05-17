import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/home/Team.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Team() {
  const main = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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
      let currentSection;
      let currentImage;
      let sections = gsap.utils.toArray("section");
      let imageSections = gsap.utils.toArray(".imageSlide");
      currentSection = sections[0];
      currentImage = imageSections[0];
      const sectionPos = main.current.getBoundingClientRect();

      gsap.set(".trigger", { height: sections.length * 200 + "vh" });

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
            tl.to(image, {
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
              overwrite: true,
            });
          });

          currentSection = newSection;
          currentImage = newImages;
        }
      }
    }, main.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.Team} ref={main}>
      <div className={`${styles.progressbar} progressbar`}></div>
      <div className="trigger">
        <div className={styles.sticky}>
          <section className={`${styles.slide} ${styles.first} slide`}>
            <div className="container">
              <div className={styles.textBox}>
                <h3>Dedicated team</h3>
                <p>
                  Only a well-assembled team of digital professionals can make
                  the dream work. Work with a dedicated team who works
                  tirelessly to understand your business needs and goals.
                </p>

                <p>
                  With diverse backgrounds and set of skills, from strategists
                  to designers and content creators, we&apos;re committed to
                  helping you achieve your marketing objectives.
                </p>
              </div>
            </div>
          </section>
          <section className={`${styles.slide} slide`}>
            <div className="container">
              <div className={styles.textBox}>
                <h3>Full package</h3>
                <p>
                  We understand that marketing can be overwhelming, which is why
                  we offer a comprehensive all-in-one service that includes web
                  design and development, branding, social media management, and
                  more.
                </p>

                <p>
                  Our all-in-one service ensures that all aspects of your
                  marketing efforts are cohesive and aligned with your brand
                  identity. With our diverse skill set and expertise, we can
                  provide you with the support you need to take your marketing
                  efforts to the next level.
                </p>
              </div>
            </div>
          </section>
          <section className={`${styles.slide} slide`}>
            <div className="container">
              <div className={styles.textBox}>
                <h3>Custom solutions</h3>
                <p>
                  No two businesses are the same, which is why we offer full
                  customization for all our marketing services. We work closely
                  with you to understand your unique needs and goals, and tailor
                  our services accordingly.
                </p>

                <p>
                  Whether you need a complete rebranding, a new website, or
                  social media management, we&apos;re here to help you achieve
                  your marketing objectives. With our full customization, you
                  can be sure that all solutions are personalized to your
                  business with the results you&apos;re looking for.
                </p>
              </div>
            </div>
          </section>

          <div className={styles.imageWrap}>
            <div className={styles.imageCircle}>
              <div
                className={`${styles.imageSlide} ${styles.firstImage} imageSlide`}
              >
                <Image
                  src="/images/home/team/4.png"
                  alt="Dedicated team"
                  width={546}
                  height={950}
                  style={{ left: "25%" }}
                />
                <Image
                  src="/images/home/team/3.png"
                  alt="Dedicated team"
                  width={473}
                  height={950}
                  style={{ left: "130px" }}
                />
                <Image
                  src="/images/home/team/1.png"
                  alt="Dedicated team"
                  width={390}
                  height={950}
                  style={{ top: "48%" }}
                />
                <Image
                  src="/images/home/team/2.png"
                  alt="Dedicated team"
                  width={748}
                  height={950}
                  style={{ right: 0 }}
                />
              </div>
              <div className={`${styles.imageSlide} imageSlide`}>
                <Image
                  src="/images/home/team/Paket.png"
                  alt="Full package"
                  width={765}
                  height={590}
                  style={{ right: "15%" }}
                />
              </div>
              <div className={`${styles.imageSlide} imageSlide`}>
                <Image
                  src="/images/home/team/Wireframe.svg"
                  alt="Custom solutions"
                  width={880}
                  height={670}
                  style={{ left: "0" }}
                />
                <Image
                  src="/images/home/team/Ruka-olovka.png"
                  alt="Custom solutions"
                  width={671}
                  height={950}
                  style={{ right: "23%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
