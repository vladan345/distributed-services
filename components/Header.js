import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/component-css/Header.module.css";

function Header() {
  const router = useRouter();

  return (
    <header className={styles.Header}>
      <Link href="/">
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
        <span>/</span>
        <Link
          className={router.pathname == "/projects" ? "active" : ""}
          href="/projects"
        >
          Projects
        </Link>
        <span>/</span>
        <Link
          className={router.pathname == "/partners" ? "active" : ""}
          href="/partners"
        >
          Partners
        </Link>
        <span>/</span>
        <Link
          className={router.pathname == "/about" ? "active" : ""}
          href="/about"
        >
          About
        </Link>
        <span>/</span>
        <Link
          className={router.pathname == "/contact" ? "active" : ""}
          href="/contact"
        >
          Contact
        </Link>
      </nav>

      <div className={styles.cta}>
        <Link className="button-outline" href="#">
          Book a meeting
        </Link>
      </div>
    </header>
  );
}

export default Header;
