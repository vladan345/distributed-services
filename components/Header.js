import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import styles from "../styles/component-css/Header.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header({ isTransparent }) {
  const router = useRouter();
  const [icon, setIcon] = useState(false);
  const [isActive, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.to(".header", {
      scrollTrigger: {
        trigger: ".header",
        onLeave: () => {
          setScrolled(true);
        },
        onEnterBack: () => {
          setScrolled(false);
        },
      },
    });
  }, []);

  const toggleIcon = () => {
    setIcon(!icon);
    setActive(!isActive);
  };

  return (
    <header
      className={`${styles.Header} ${
        isTransparent ? styles.HeaderTran : styles.HeaderFill
      } header ${scrolled ? styles.scrollActive : ""}`}
    >
      <div className="container">
        <Link href="/" className={styles.logoLink}>
          <Image
            src={
              scrolled || !isTransparent ? "/logo-positive.svg" : "/logo.svg"
            }
            width={240}
            height={72}
            alt="distributed services logo"
            priority
          />
        </Link>

        <nav>
          <Link
            className={router.pathname == "/services" ? "active" : ""}
            href="/services"
          >
            Services
          </Link>

          <Link
            className={router.pathname == "/projects" ? "active" : ""}
            href="/projects"
          >
            Projects
          </Link>

          <Link
            className={router.pathname == "/about" ? "active" : ""}
            href="/about"
          >
            About
          </Link>

          <Link
            className={router.pathname == "/contact" ? "active" : ""}
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <div className={styles.cta}>
          <Link className="button-outline-white" href="#">
            Book a meeting
          </Link>
        </div>
        <div
          className={`${styles.ham} ${icon ? styles.active : null}`}
          onClick={toggleIcon}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
      <MobileMenu isActive={isActive} />
    </header>
  );
}

export default Header;
