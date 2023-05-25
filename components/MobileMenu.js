import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/component-css/MobileMenu.module.css";

function MobileMenu({ isActive, toggleMenu }) {
  const router = useRouter();
  let route = router.asPath;

  return (
    <aside
      className={styles.MobileMenu}
      style={
        isActive
          ? { opacity: 1, pointerEvents: "auto" }
          : { opacity: 0, pointerEvents: "none" }
      }
    >
      <Image
        src="/mobile-menu-bg.svg"
        alt="decorative mobile background"
        width={552}
        height={558}
        className={styles.backgroundImage}
      />

      <nav>
        <Link
          className={router.pathname == "/services" ? "active" : ""}
          href="/services"
          onClick={toggleMenu}
        >
          Services
        </Link>

        <Link
          className={router.pathname == "/projects" ? "active" : ""}
          href="/projects"
          onClick={toggleMenu}
        >
          Projects
        </Link>

        <Link
          className={router.pathname == "/about" ? "active" : ""}
          href="/about"
          onClick={toggleMenu}
        >
          About
        </Link>

        <Link
          className={router.pathname == "/contact" ? "active" : ""}
          href="/contact"
          onClick={toggleMenu}
        >
          Contact
        </Link>
        <Link
          className={router.pathname == "/contact" ? "active" : ""}
          href="/contact"
          onClick={toggleMenu}
        >
          Book a meeting
        </Link>
      </nav>
      <div className={styles.socials}>
        <p>Follow us</p>
        <div className={styles.icons}>
          <Link href="#">
            <Image
              src="/facebook-blue.svg"
              alt="facebook icon"
              width={11}
              height={22}
            />
          </Link>
          <Link href="#">
            <Image
              src="/twitter-blue.svg"
              alt="twitter icon"
              width={28}
              height={22}
            />
          </Link>
          <Link href="#">
            <Image
              src="/instagram-blue.svg"
              alt="instagram icon"
              width={22}
              height={22}
            />
          </Link>
          <Link href="#">
            <Image
              src="/youtube-blue.svg"
              alt="youtube icon"
              width={32}
              height={22}
            />
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default MobileMenu;
