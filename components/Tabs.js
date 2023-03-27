import { useState } from "react";
import styles from "../styles/component-css/Tabs.module.css";
import TabServices from "./TabServices";
import TabPhases from "./TabPhases";

function Tabs({ content, type }) {
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
      {type === "service" && (
        <TabServices content={content} selectedItem={selectedItem} />
      )}
      {type === "phases" && (
        <TabPhases content={content} selectedItem={selectedItem} />
      )}
    </div>
  );
}

export default Tabs;
