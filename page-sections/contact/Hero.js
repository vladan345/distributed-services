import Image from "next/image";
import styles from "../../styles/section-css/contact/Hero.module.css";
import Link from "next/link";

function Hero() {
  return (
    <section className={styles.Hero}>
      <Image
        src="/images/contact/hero-element-contact.svg"
        width={747}
        height={943}
        alt="Part of distributed logo"
        className={styles.background1}
      />
      <div className={styles.video}>
        <video src="/images/contact/contact.mp4" autoPlay loop muted></video>
      </div>

      <div className={styles.content + " container"}>
        <h1>Do you have any questions about our work?</h1>
        <form className={styles.form}>
          <input
            className={styles.inputBox}
            type="text"
            name="name"
            id="name"
            placeholder="Your name*"
          />
          <input
            className={styles.inputBox}
            type="text"
            name="company"
            id="company"
            placeholder="Your company name*"
          />
          <input
            className={styles.inputBox}
            type="email"
            name="email"
            id="email"
            placeholder="Your e-mail*"
          />
          <input
            className={styles.inputBox}
            type="text"
            name="country"
            id="country"
            placeholder="Country"
          />
          <input
            className={styles.inputBox}
            type="number"
            name="budget"
            id="budget"
            placeholder="Your budget"
          />
          <textarea
            placeholder="Comments or Questions"
            className={styles.textarea}
            name="comment"
            id="comment"
            rows="4"
          ></textarea>
          <button className={styles.submitBtn} type="submit">
            Send
            <Image
              src="/arrow-black-right.svg"
              alt="arrow icon"
              width={35}
              height={29}
            />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
