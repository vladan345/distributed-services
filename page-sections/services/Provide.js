import { useRef } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/services/Provide.module.css";

function Provide() {
  const section = useRef();
  const handleClick = () => {
    const container = section.current;
    const html = document.querySelector("html");
    html.style.scrollBehavior = "smooth";
    window.scrollTo(0, container.offsetHeight + container.offsetTop);
    setTimeout(() => {
      html.style.scrollBehavior = "auto";
    }, 500);
  };

  return (
    <section className={styles.Provide} ref={section}>
      <div className="container">
        <span className={`${styles.tag} tag-large`}>what we provide</span>
        <p className={styles.description}>
          Distributed Services sets you up with the best fitting resources and
          provides an experienced management team, that form a natural extension
          to your existing in-house team.
        </p>
        <h2 className={styles.tagline}>
          And, at a fraction of the time and cost it would normally take!
        </h2>

        <div className={styles.explore}>
          <span>See our latest work</span>
          <Image
            src="/arrow-white-down.svg"
            alt="arrow blue down"
            width={100}
            height={100}
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
}

export default Provide;
