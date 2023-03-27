import Image from "next/image";

import styles from "../../styles/section-css/home/Services.module.css";

import Accordion from "@/components/Accordion";

import { serviceList } from "@/lib/servicesServices";

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
        />

        <Accordion content={serviceList} />
      </div>
    </section>
  );
}

export default Services;
