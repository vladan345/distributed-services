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
          Time is your most valuable resource.
        </p>
        <p className={styles.subheading}>
          Redirect your focus towards your core competencies while we handle the
          rest- from digital marketing and all things creative to elaborate web
          development solutions. Enhance your productivity with our
          cost-effective and efficient outsourcing solutions.
        </p>
      </div>
    </section>
  );
}

export default Hero;
