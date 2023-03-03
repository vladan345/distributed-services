import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/section-css/home/Services.module.css";

import Accordion from "@/components/Accordion";

import { services } from "@/lib/homeServices";

function Services() {
  return (
    <section className={styles.Services}>
      <h3>SERVICES</h3>
      <div className={styles.row}>
        <Image
          src="/images/home/home1.webp"
          alt="Service images"
          width={720}
          height={817}
          layout="responsive"
        />
        <Accordion content={services} />
      </div>
    </section>
  );
}

export default Services;
