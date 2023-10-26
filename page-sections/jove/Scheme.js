import styles from "@/styles/section-css/jove/Scheme.module.css";
import Image from "next/image";
import Link from "next/link";

function Scheme() {
  return (
    <div className={styles.Scheme}>
      <div className="container">
        <Image
          src="/images/single-project/jove/rasklop.webp"
          alt="jar scheme"
          width={908}
          height={704}
          className="tegla"
        />
      </div>
    </div>
  );
}

export default Scheme;
