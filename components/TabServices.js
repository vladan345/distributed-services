import styles from "../styles/component-css/Tabs.module.css";

function TabServices({ content, selectedItem }) {
  return (
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
  );
}

export default TabServices;
