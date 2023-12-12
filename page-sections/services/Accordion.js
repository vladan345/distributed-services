import { useState, useEffect, useRef } from "react";
import styles from "@/styles/section-css/services/Accordion.module.css";
import Link from "next/link";
import Image from "next/image";

function Accordion() {
  const [tabActive, setTabActive] = useState(0);
  const content = [
    {
      title: "Website Design",

      content:
        "Brand identity meets optimized user experience that generates organic (re)visits. <br /><br />Transform your vision into a visually stunning and user-friendly website that not only captures your brand essence but also ensures an exceptional online experience for your visitors. Prepare for take-off!",
      link: "/projects/web-design",
    },
    {
      title: "Website Development",

      content:
        "From a single line of code to a fully-functioning, traffic-filled website. <br><br> Elevate your online presence with our expert website development services, tailored to captivate your audience and drive business growth.",
      link: "/projects/web-development",
    },
    {
      title: "Digital Marketing",

      content:
        "Grow your online presence and connect with your audience in meaningful ways. <br><br> Harness the power of data-driven strategies to boost your online reach, engage your target audience, and achieve unparalleled success.",
      link: "/projects/digital-marketing",
    },
    {
      title: "Branding & Visual Identity",

      content:
        "Craft a distinctive and memorable brand identity, leaving a lasting impression on your target audience. <br><br> See your brand come to life and stand above the crowd with a fully customizable solutions.",
      link: "/projects/branding",
    },
    {
      title: "Outsourcing",

      content:
        "Unparalleled talent without the inconvenience of hiring and managing a team. <br><br> Streamline your operations and focus on core tasks while we handle the rest, providing cost-effective outsourcing solutions to optimize your business efficiency.",
      link: "/projects/outsourcing",
    },
  ];
  const wrapper = useRef(null);

  const handleTab = (index, wrapper) => {
    setTabActive(index);
    const images = wrapper.current.querySelectorAll("img");
    images.forEach((image) => {
      image.classList.remove("imageActive");
    });
    images[index].classList.add("imageActive");
  };

  return (
    <div className={styles.Accordion}>
      <div className={styles.tabImageWrap} ref={wrapper}>
        <Image
          src="/images/services/accordion/laptop-desktop.webp"
          alt="Web design"
          width={933}
          height={783}
          className={`${styles.accordionImage} imageActive`}
        />
        <Image
          src="/images/services/accordion/dev-laptop-desktop.webp"
          alt="Web development"
          width={733}
          height={664}
          className={`${styles.accordionImage}`}
        />
        <Image
          src="/images/services/accordion/phone-desktop.webp"
          alt="Digital marketing"
          width={747}
          height={670}
          className={`${styles.accordionImage}`}
        />
        <Image
          src="/images/services/accordion/brandbook-desktop.webp"
          alt="Branding"
          width={743}
          height={754}
          className={`${styles.accordionImage}`}
        />
        <Image
          src="/images/services/accordion/planet-desktop.webp"
          alt="Outsourcing"
          width={1107}
          height={704}
          className={`${styles.accordionImage}`}
        />
      </div>
      <div className={`${styles.container} container`}>
        <p className={styles.tag}>Services</p>
        {content &&
          content.map((tab, index) => {
            return (
              <div
                key={index}
                onClick={() => handleTab(index, wrapper)}
                className={`${styles.tab} ${
                  index === tabActive ? styles.activeTab : ""
                }`}
              >
                <span className={styles.number}>0{index + 1}</span>
                <h2 className={styles.title}>{tab.title}</h2>
                <p
                  dangerouslySetInnerHTML={{ __html: tab.content }}
                  className={styles.description}
                />
                <Link
                  className={`button button-outline-blue ${styles.link}`}
                  href={tab.link}
                >
                  View projects
                  <Image
                    src="/arrow-black-right.svg"
                    width={35}
                    height={29}
                    alt="arrow down white"
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Accordion;
