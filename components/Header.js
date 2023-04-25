import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/component-css/Header.module.css";

function Header() {
  const router = useRouter();

  return (
    <header className={styles.Header}>
      <div className="container">
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.svg"
            width={240}
            height={72}
            alt="distributed services logo"
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
      </div>
    </header>
  );
}

export default Header;
