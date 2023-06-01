import Image from "next/image";
import styles from "../../styles/section-css/outsourcing/Hero.module.css";

function Hero() {
  return (
    <section className={styles.Hero}>
      <Image
        src="/images/home/hero-element2.svg"
        width={747}
        height={943}
        alt="Part of distributed logo"
        className={styles.background1}
      />
      <div className={styles.video}>
        <video
          src="/images/outsourcing/outsourcing.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className={styles.content + " container"}>
        <h1>One team for all.</h1>
        <p className={styles.subheading}>
          With our vast pool of resources, we guarantee to find the right team
          to fit around your needs.
        </p>
      </div>
    </section>
  );
}

export default Hero;
