import Image from "next/image";
import styles from "../styles/component-css/Hero.module.css";

function Hero({ title, description, video, centeredBold, centeredReg }) {
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
        <video src={video} autoPlay loop muted></video>
      </div>

      <div className={styles.content + " container"}>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div>
          <p>{description}</p>
        </div>
      </div>

      <div className={styles.centered}>
        <div className="container">
          <div className={styles.textWrap}>
            {centeredBold ? <h4>{centeredBold}</h4> : null}
            {centeredReg ? <p>{centeredReg}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
