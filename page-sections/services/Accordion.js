import { useState, useEffect, useRef } from "react";
import styles from "@/styles/section-css/services/Accordion.module.css";
import Link from "next/link";
import Image from "next/image";

function Accordion() {
  const [tabActive, setTabActive] = useState(0);
  const content = [
    {
      title: "Webiste Design",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "/projects/web-design",
    },
    {
      title: "Website Development",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "/projects/web-development",
    },
    {
      title: "Digital Marketing",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "/projects",
    },
    {
      title: "Branding",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "/projects",
    },
    {
      title: "Outsourcing",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "/projects",
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
                <p className={styles.description}>{tab.content}</p>
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
