import Lottie from "lottie-react";
import lottie from "@/public/404-logo.json";
import styles from "@/styles/section-css/404.module.css";
import Link from "next/link";
import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";

function ForOFor() {
  return (
    <>
      <div className={styles.FourOFour}>
        <div className={styles.fourWrap}>
          <span className={styles.four}>4</span>
          <Lottie
            animationData={lottie}
            loop={false}
            className={styles.lottie}
          />
          <span className={styles.four}>4</span>
        </div>
        <h1 className={styles.heading}>Page not found.</h1>
        <Link href="/" className={styles.link}>
          Return to homepage{" "}
          <Image
            src="/arrow-blue-right.svg"
            width={35}
            height={29}
            alt="arrow icon"
          />
        </Link>
      </div>
      <GetInTouch darkMode={true} />
    </>
  );
}

export default ForOFor;
