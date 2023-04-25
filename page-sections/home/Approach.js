import Image from "next/image";
import styles from "../../styles/section-css/home/Approach.module.css";

function Approach() {
  return (
    <section className={styles.Approach}>
      <div className="container">
        <span className={`${styles.tag} tag-large`}>Our Approach</span>
        <h2 className={styles.tagline}>
          Our approach is based on customized solutions that make a real impact.
        </h2>
        <p className={styles.description}>
          We believe that creativity, data, and innovation are the keys to
          unlocking your digital potential.
        </p>

        <div className={styles.explore}>
          <span>See how we do it</span>
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

export default Approach;
