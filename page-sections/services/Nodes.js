import Image from "next/image";
import styles from "../../styles/section-css/services/Nodes.module.css";

function Nodes() {
  return (
    <div className={styles.Nodes}>
      <div className={`${styles.wrap} container`}>
        <div className={styles.top}>
          <h2>Your Handpicked Team is Customised to Suit Your Needs</h2>
          <p>
            Every one of our clients is unique, and so it is important to
            assemble a unique team to fit around our client&apos;s vision, and
            to deliver the best possible outcome.
          </p>
          <p>
            Each newly assembled team is handpicked by us, and will address our
            client&apos;s needs.
          </p>
          <Image
            className={styles.graph}
            src="/images/services/graf-temp.svg"
            alt="Service graph"
            width={1339}
            height={941}
          />
        </div>
        <div className={styles.bottom}>
          <h4>
            You can count on us to be your one-stop-shop for all the talent you
            need.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Nodes;
