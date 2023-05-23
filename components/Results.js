import Link from "next/link";
import Image from "next/image";
import styles from "../styles/component-css/Results.module.css";

function Results({ content }) {
  return (
    <div className={styles.Results}>
      <div className="container">
        <h2>RESULTS</h2>
        {content.results &&
          content.results.map((description, index) => {
            return (
              <p key={index} className={styles.description}>
                {description}
              </p>
            );
          })}
        <Link className={`${styles.cta} ${styles.white}`} href="#">
          Go to website
          <Image
            src="/arrow-black-right.svg"
            width={29}
            height={35}
            alt="arrow down white"
          />
        </Link>
      </div>
    </div>
  );
}

export default Results;
