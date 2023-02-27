import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/section-css/home/Services.module.css";

function Services() {
  return (
    <section className={styles.Services}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.textBox}>
            <h2>Web Development</h2>
            <p>
              Sit bibendum diam tellus congue. Nisi quis urna at erat mattis.
              Adipiscing hac at suspendisse adipiscing pretium ac fames et. Nisi
              faucibus sit libero vulputate at faucibus varius.
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
        <div className={styles.imageWrap}>
          <Image src="/images/home/home1.webp" fill alt="Web developer" />
        </div>
      </div>

      <div className="container">
        <div className={styles.boxedRow}>
          <Image
            src="/images/home/home2.webp"
            alt="digital marketing"
            width={640}
            height={760}
          />
          <div className={styles.textBox}>
            <h2>Digital Marketing</h2>
            <p>
              Condimentum tincidunt mi porttitor quis ac egestas condimentum.
              Enim viverra rhoncus donec accumsan sagittis lacinia. Lacus
              scelerisque tortor massa ultrices eget.
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
        <div className={styles.boxedRow}>
          <div className={styles.textBox}>
            <h2>Outsourcing</h2>
            <p>
              Sit bibendum diam tellus congue. Nisi quis urna at erat mattis.
              Adipiscing hac at suspendisse adipiscing pretium ac fames et. Nisi
              faucibus sit libero vulputate at faucibus varius.
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
          <Image
            src="/images/home/home3.webp"
            alt="digital marketing"
            width={640}
            height={760}
          />
        </div>
      </div>

      <div className={styles.row + " " + styles.reverse}>
        <div className={styles.imageWrap}>
          <Image src="/images/home/home4.webp" fill alt="Web developer" />
        </div>
        <div className={styles.col}>
          <div className={styles.textBox}>
            <h2>VR Expiriences</h2>
            <p>
              Condimentum tincidunt mi porttitor quis ac egestas condimentum.
              Enim viverra rhoncus donec accumsan sagittis lacinia. Lacus
              scelerisque tortor massa ultrices eget.
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
      </div>
    </section>
  );
}

export default Services;
