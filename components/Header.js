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

  const toggleMenu = (e) => {
    const logo = e.currentTarget;
    logo.id == "logo" ? setActive(false) : setActive(!isActive);
  };

  return (
    <header
      className={`${styles.Header} ${
        isTransparent ? styles.HeaderTran : styles.HeaderFill
      } header ${scrolled ? styles.scrollActive : ""}`}
    >
      <div className="container">
        <Link
          href="/"
          className={styles.logoLink}
          id="logo"
          onClick={toggleMenu}
        >
          <Image
            src={
              scrolled || !isTransparent || isActive
                ? "/logo-positive.svg"
                : "/logo.svg"
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
            className={router.pathname == "/outsourcing" ? "active" : ""}
            href="/outsourcing"
          >
            Outsourcing
          </Link>

          <Link
            className={router.pathname == "/contact" ? "active" : ""}
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <div className={styles.cta}>
          <Link
            className="button-outline-white"
            target="_blank"
            href="https://calendly.com/distributedservices"
          >
            Book a meeting
          </Link>
        </div>
        <div
          className={`${styles.ham} ${isActive ? styles.active : null}`}
          onClick={toggleMenu}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </div>
      <MobileMenu isActive={isActive} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
