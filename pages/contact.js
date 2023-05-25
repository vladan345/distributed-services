import Hero from "@/page-sections/contact/Hero";
import styles from "@/styles/Contact.module.css";
import Link from "next/link";

function contact() {
  return (
    <div className={styles.Contact}>
      <Hero />
      <div className="container">
        <div className={styles.mapWrap}>
          <div className={styles.textBox}>
            <h2>DS London Office</h2>
            <p className={styles.address}>
              20 Alcester Crescent, E59PX London, UK
            </p>
            <Link href="tel:+44 7837 513593">+44 7837 513593</Link>
            <Link href="info@distributedservices.tech">
              info@distributedservices.tech
            </Link>
          </div>
          <iframe
            src="https://snazzymaps.com/embed/493969"
            width="100%"
            height="480px"
            style={{ border: "none" }}
          ></iframe>
        </div>
        <div className={styles.mapWrap}>
          <iframe
            src="https://snazzymaps.com/embed/493971"
            width="100%"
            height="480px"
            style={{ border: "none" }}
          ></iframe>
          <div className={styles.textBox}>
            <h2>DS Dubai Office</h2>
            <p className={styles.address}>
              Dubai Silicon Oasis DDP Building A1, Dubai, UAE
            </p>
            <Link href="tel:+44 7837 513593">+44 7837 513593</Link>
            <Link href="info@distributedservices.tech">
              info@distributedservices.tech
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
