import Image from "next/image";
import Link from "next/link";

import styles from "../styles/component-css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.rowForm}>
          <p>
            Sit vulputate in pellentesque libero dui in in euismod. Maecenas
            urna velit adipiscing lorem eleifend nec feugiat.
          </p>
          <div className={styles.form}>
            <form>
              <div className={styles.email}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className={styles.rowNav}>
          <div className={styles.logo}>
            <Link href="#">
              <Image
                src="/footer-logo.svg"
                alt="footer logo"
                width={240}
                height={72}
              />
            </Link>
            <p>Copyright © 2023 DISTRIBUTED SERVICES</p>
          </div>

          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">Partners</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>

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
    </footer>
  );
}

export default Footer;
