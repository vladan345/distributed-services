import styles from "../../styles/section-css/home/Marquee.module.css";
import { Parallax } from "react-scroll-parallax";
import localFont from "@next/font/local";

function Marquee() {
  return (
    <section className={styles.Marquee}>
      <div className="container">
        <div className={styles.textWrap}>
          <h4>
            A distributed workforce offering perfect-fit solutions for all your
            development needs
          </h4>
          <p>
            We help your company reduce risk with software development
            outsourcing through a continuum of consultative services and the
            most curated network of certified software development teams ever
            assembled in the region.
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Parallax translateX={[0, -20]}>
          <span>SERVICES/SERVICES/</span>
          <span>SERVICES/SERVICES/</span>
        </Parallax>
      </div>
    </section>
  );
}

export default Marquee;
