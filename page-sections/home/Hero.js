import { useRef } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/home/Hero.module.css";
import Link from "next/link";

function Hero() {
  const hero = useRef(null);
  const handleScroll = () => {
    let heroHeight = hero.current;
    let html = document.querySelector("html");
    html.style.scrollBehavior = "smooth";
    window.scrollTo(0, heroHeight.offsetHeight);
    setTimeout(() => {
      html.style.scrollBehavior = "auto";
    }, 500);
  };
  return (
    <section className={`${styles.Hero} homeHero`} ref={hero}>
      <Image
        src="/images/home/hero-element2.svg"
        width={550}
        height={694}
        alt="Part of distributed logo"
        className={styles.background1}
      />
      <div className={styles.video}>
        <video
          src="/images/distributed_services_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      <div className={styles.content + " container"}>
        <span className={styles.tag}>Distributed services</span>
        <h1>Where creativity meets results.</h1>
        <button className="button button-outline-white" onClick={handleScroll}>
          Learn more{" "}
          <Image
            src="/arrow-black-down.svg"
            width={29}
            height={35}
            alt="arrow down white"
          />
        </button>
      </div>
    </section>
  );
}

export default Hero;
