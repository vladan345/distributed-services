import Image from "next/image";
import styles from "../../styles/section-css/services/Hero.module.css";
import Link from "next/link";

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
          src="/images/distributed_services_hero.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className={styles.content + " container"}>
        <h1>Our Services at a glance.</h1>
        <p className={styles.subheading}>
          Anyone can find an offshore or nearshore vendor to build software, but
          not everyone can create global partnerships that work.
        </p>
      </div>
    </section>
  );
}

export default Hero;
