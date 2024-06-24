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
              +971 50 634 0569 info@distributedservices.tech
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
                <a
                  target="_blank"
                  href="https://www.instagram.com/distributedservices/"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagram-1.svg"
                    alt="instagram icon"
                    width={22}
                    height={22}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/distributed-services/"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="Linkedin icon"
                    width={26}
                    height={26}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@distributedservices"
                >
                  <Image
                    src="/tiktok.svg"
                    alt="Tiktok icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
              <a
                href="https://www.google.com/partners/agency?id=4527503534"
                target="_blank"
              >
                <Image
                  width={152}
                  height={145}
                  src="https://www.gstatic.com/partners/badge/images/2023/PartnerBadgeClickable.svg"
                  alt="google partner"
                />
              </a>
            </div>
          </div>
        </div>
        <p className={styles.copy}>Copyright © 2023 DISTRIBUTED SERVICES</p>
      </div>
    </footer>
  );
}

export default Footer;
