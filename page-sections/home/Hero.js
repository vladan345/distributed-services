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
      <div className={styles.video}>
        <video
          src="/images/distributed_services_hero.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className={styles.content + " container"}>
        <h1>
          <span>Design</span>
          <span> Develop</span>
          <span> Distribute</span>
        </h1>
        <div>
          <p>
            With our vast pool of resources, we guarantee to find the right team
            to fit around your needs.
          </p>
        </div>
      </div>

      <div className={styles.centered}>
        <div className="container">
          <div className={styles.textWrap}>
            <h4>
              A distributed workforce offering perfect-fit solutions for all
              your development needs
            </h4>
            <p>
              We help your company reduce risk with software development
              outsourcing through a continuum of consultative services and the
              most curated network of certified software development teams ever
              assembled in the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
