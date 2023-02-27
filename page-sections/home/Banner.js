import styles from "../../styles/section-css/home/Banner.module.css";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

function Banner() {
  return (
    <section className={styles.Banner}>
      <Parallax translateX={[0, -15]} className={styles.parallax}>
        <Image
          width={2600}
          height={1360}
          src="/images/home/Dubai.jpg"
          alt="Dubai background"
        />
      </Parallax>
      <div className="container">
        <span>Now distributing in Dubai!</span>
        <div className={styles.textRow}>
          <p>
            Orci fermentum id sed sed ipsum pellentesque arcu mi imperdiet. Amet
            rhoncus nam sit tortor urna faucibus urna amet. Iaculis sit elit
            mauris purus lobortis.
          </p>
          <Link href="#" className={styles.readMore}>
            <h2>Read more</h2>
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

export default Banner;
