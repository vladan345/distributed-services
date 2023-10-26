import { useEffect, useRef } from "react";
import styles from "@/styles/section-css/jove/Packaging.module.css";
import Image from "next/image";

function Packaging() {
  return (
    <div className={styles.Packaging}>
      <div className="container trigger">
        <div className={styles.rowWrap}>
          <div className={styles.textBox}>
            <h2>Packaging</h2>
            <p>Premium look. Exceptional products.</p>
            <p>
              Our choice of the label&apos;s color palette adds to the luxurious
              look and feel. Thanks to the elegant dark shade of the label
              paired with golden lettering, buyers can rest assured that the
              product inside the packaging is of unparalleled quality.
            </p>
          </div>
          <Image
            src="/images/single-project/jove/jars.webp"
            alt="truffle jar"
            width={802}
            height={640}
          />
        </div>
      </div>
    </div>
  );
}

export default Packaging;
