import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import styles from "../../styles/section-css/home/Projects.module.css";

function Projects() {
  return (
    <section>
      <div className={styles.slider}>
        <Parallax translateX={[-20, 0]}>
          <span>PROJECTS/PROJECTS/</span>
          <span>PROJECTS/PROJECTS/</span>
        </Parallax>
      </div>
      <div className={styles.featured}>
        <Parallax className={styles.bg} speed={-30}>
          <Image fill src="/images/home/sand_bgr.jpg" alt="sand background" />
        </Parallax>
        <h4>Featured project</h4>
        <h1>
          Rikas
          <br />
          Hospitality Group
        </h1>

        <div className={styles.row}>
          <div className={styles.col}>
            <Image
              src="/images/home/home-rikas1.webp"
              alt="Beach image rikas group"
              width={640}
              height={520}
            />
          </div>
          <div className={styles.col}>
            <Image
              src="/images/home/home-rikas2.webp"
              alt="Beach image rikas group"
              width={400}
              height={520}
            />
            <Image
              src="/images/home/rikas-logo.svg"
              alt="Beach image rikas group"
              width={146}
              height={220}
            />
          </div>
          <div className={styles.col}>
            <p>
              Vestibulum sagittis porttitor proin eleifend vitae. Tincidunt odio
              in dictum eu leo sapien.
            </p>
            <Image
              src="/images/home/home-rikas3.webp"
              alt="Beach image rikas group"
              width={600}
              height={680}
            />
          </div>
        </div>
        <div className={styles.cta}>
          <Link href="#" className={styles.readMore}>
            <h2>Projects</h2>
            <Image
              src="/images/home/green-arrow-right.svg"
              alt="read more"
              width={170}
              height={140}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
