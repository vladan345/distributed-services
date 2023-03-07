import { useState } from "react";
import styles from "../styles/component-css/Tabs.module.css";

function Tabs({ content }) {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className={styles.Tabs}>
      <div className={styles.titles}>
        {content &&
          content.map((item, index) => {
            return (
              <div key={index} className={styles.title}>
                <span>0{index + 1}</span>
                <h2
                  className={`${selectedItem === index ? styles.selected : ""}`}
                  onMouseOver={() => setSelectedItem(index)}
                >
                  {item.title}
                </h2>
              </div>
            );
          })}
      </div>

      <div className={styles.content}>
        {selectedItem !== null ? (
          <>
            <div className={styles.services}>
              {content[selectedItem].services &&
                content[selectedItem].services.map((service) => (
                  <p key={service}>{service}</p>
                ))}
            </div>
            <p className={styles.description}>
              {content[selectedItem].description}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Tabs;
