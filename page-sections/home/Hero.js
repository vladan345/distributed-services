import Image from "next/image";
import styles from "../../styles/section-css/home/Hero.module.css";

function Hero() {
  return (
    <section className={styles.Hero}>
      <Image
        src="/images/home/hero-element1.svg"
        width={988}
        height={943}
        alt="Part of distributed logo"
        className={styles.background1}
      />
      <Image
        src="/images/home/hero-element2.png"
        width={753}
        height={936}
        alt="Part of distributed logo"
        className={styles.background2}
      />
      <div className={styles.content + " container"}>
        <h1>
          <span>Design</span>
          <span> Develop</span>
          <span> Distribute</span>
        </h1>
        <div className={styles.inlineText}>
          <p>
            With our vast pool of resources, we guarantee to find the right team
            to fit around your needs.
          </p>
          <a href="#" className="button">
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
