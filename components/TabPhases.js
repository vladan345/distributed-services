import styles from "../styles/component-css/Tabs.module.css";

function TabPhases({ content, selectedItem }) {
  return (
    <div className={styles.content}>
      {selectedItem !== null ? (
        <>
          <p className={styles.description}>
            {content[selectedItem].description}
          </p>
          <p className={styles.heading}>Deliverables</p>
          <ul>
            {content[selectedItem].list &&
              content[selectedItem].list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default TabPhases;
