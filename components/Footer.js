import Image from "next/image";
import Link from "next/link";

import styles from "../styles/component-css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.logo}>
              <Link href="#">
                <Image
                  src="/logo-white.svg"
                  alt="footer logo"
                  width={240}
                  height={72}
                />
              </Link>
            </div>
          </div>
          <div className={styles.col}>
            <p className={styles.footerHeading}>DS London Office</p>
            <p className={styles.info}>
              20 Alcester Crescent, E59PX<br></br> London, UK
            </p>
            <p className={styles.info}>
              +44 7837 513593 info@distributedservices.tech
            </p>
          </div>
          <div className={styles.col}>
            <p className={styles.footerHeading}>DS Dubai Office</p>
            <p className={styles.info}>
              Dubai Silicon Oasis<br></br> DDP Building A1, Dubai, UAE
            </p>
            <p className={styles.info}>
              +971 50 634 0569 info@distributedservices.tech
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.socials}>
              <p>Follow us</p>
              <div className={styles.icons}>
                <Link href="#">
                  <Image
                    src="/facebook-1.svg"
                    alt="facebook icon"
                    width={11}
                    height={22}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/twitter-1.svg"
                    alt="twitter icon"
                    width={28}
                    height={22}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/instagram-1.svg"
                    alt="instagram icon"
                    width={22}
                    height={22}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/youtube-1.svg"
                    alt="youtube icon"
                    width={32}
                    height={22}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.copy}>Copyright © 2023 DISTRIBUTED SERVICES</p>
      </div>
    </footer>
  );
}

export default Footer;
