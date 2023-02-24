import Link from "next/link";
import Image from "next/image";
import styles from "../styles/component-css/Header.module.css";

function Header() {
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
        <Link href="/services">Services</Link>
        <span>/</span>
        <Link href="/projects">Projects</Link>
        <span>/</span>
        <Link href="/partners">Partners</Link>
        <span>/</span>
        <Link href="/about">About</Link>
        <span>/</span>
        <Link href="/contact">Contact</Link>
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
