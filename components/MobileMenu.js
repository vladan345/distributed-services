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
          className={router.pathname == "/outsourcing" ? "active" : ""}
          href="/outsourcing"
          onClick={toggleMenu}
        >
          Outsourcing
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
          target="_blank"
          href="https://calendly.com/distributedservices"
          onClick={toggleMenu}
        >
          Book a meeting
        </Link>
      </nav>
      <div className={styles.socials}>
        <p>Follow us</p>
        <div className={styles.icons}>
          <a
            target="_blank"
            href="https://www.instagram.com/distributedservices/"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram-blue.svg"
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
              src="/linkedin-blue.svg"
              alt="Linkedin icon"
              width={26}
              height={26}
            />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@distributedservices"
            rel="noopener noreferrer"
          >
            <Image
              src="/tiktok-blue.svg"
              alt="Tiktok icon"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default MobileMenu;
