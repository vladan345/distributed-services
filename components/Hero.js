import Image from "next/image";
import styles from "../styles/component-css/Hero.module.css";
import Link from "next/link";

function Hero() {
  return (
    <section className={styles.Hero}>
      <Image
        src="/images/home/hero-element1.svg"
        width={747}
        height={535}
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
        <span className={styles.tag}>Distributed services</span>
        <h1>Where creativity meets results.</h1>
        <Link className="button button-outline-white" href="#">
          Learn more{" "}
          <Image
            src="/arrow-white-down.svg"
            width={29}
            height={35}
            alt="arrow down white"
          />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
