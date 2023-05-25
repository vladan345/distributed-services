import { useState } from "react";
import styles from "@/styles/section-css/services/Accordion.module.css";

function Accordion() {
  const [tabActive, setTabActive] = useState(0);
  const content = [
    {
      title: "Webiste Design",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "#",
    },
    {
      title: "Website Development",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "#",
    },
    {
      title: "Digital Marketing",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "#",
    },
    {
      title: "Branding",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "#",
    },
    {
      title: "Outsourcing",
      content:
        "As our client, your ultimate goal is a great product, delivered on time and on budget. Our goal is to ensure you achieve this by ensuring your product will be developed by the best talent in the region, handpicked by us, to suit your needs.",
      link: "#",
    },
  ];

  const handleTab = (index) => {
    setTabActive(index);
  };

  return (
    <div className={styles.Accordion}>
      <div className="container">
        <p className={styles.tag}>Services</p>
        {content &&
          content.map((tab, index) => {
            return (
              <div
                key={index}
                onClick={() => handleTab(index)}
                className={`${styles.tab} ${
                  index === tabActive ? styles.activeTab : ""
                }`}
              >
                <span className={styles.number}>0{index + 1}</span>
                <h2 className={styles.title}>{tab.title}</h2>
                <p className={styles.description}>{tab.content}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Accordion;
