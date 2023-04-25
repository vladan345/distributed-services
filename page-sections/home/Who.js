import Image from "next/image";
import styles from "../../styles/section-css/home/Who.module.css";

function Who() {
  return (
    <section className={styles.Who}>
      <div className="container">
        <span className={`${styles.tag} tag-large`}>Who are we?</span>
        <h2 className={styles.tagline}>
          Create a brand from scratch, enhance your existing product and
          everything in between!
        </h2>
        <p className={styles.description}>
          Distributed Services is a team of digital professionals who create
          magic together, covering all digital services distributed to provide
          our clients with the complete digital package.
        </p>

        <div className={styles.explore}>
          <span>EXPLORE</span>
          <Image
            src="/arrow-blue-down.svg"
            alt="arrow blue down"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}

export default Who;
