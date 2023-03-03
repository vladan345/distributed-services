import { useState } from "react";
import styles from "../styles/component-css/AccordionItem.module.css";

import Link from "next/link";
import Image from "next/image";

function Accordion({ content }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className={styles.Accordion}>
      {content &&
        content.map((item, index) => {
          return (
            <div
              key={index}
              className={`${selectedItem === index ? styles.selected : ""} ${
                styles.accordionItem
              }`}
            >
              <h2
                className={styles.title}
                onClick={() => setSelectedItem(index)}
              >
                <span>0{index + 1}</span>
                {item.title}
              </h2>
              <div className={styles.services}>
                {item.services &&
                  item.services.map((service) => (
                    <p key={service}>{service}</p>
                  ))}
              </div>
              <p className={styles.text}>{item.text}</p>
              <Link href={item.link} className={styles.readMore}>
                <h4>Learn more</h4>
                <Image
                  src="/images/home/blue-arrow-right-sm.svg"
                  alt="read more"
                  width={54}
                  height={44}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Accordion;
