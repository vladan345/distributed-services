import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/contact/Hero.module.css";
import { sendContactForm } from "@/lib/api";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
function Hero() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    budget: "",
    comment: "",
  });

  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
    return { values, handleChange };
  };

  const handleSumitForm = useCallback(
    (e) => {
      setValues((prev) => ({
        ...prev,
      }));
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        sendContactForm(gReCaptchaToken, values);
      });
    },
    [executeRecaptcha, values]
  );
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
        <form
          className={styles.form}
          onSubmit={handleSumitForm}
          id="contactForm"
        >
          <input
            className={styles.inputBox}
            type="text"
            name="name"
            id="name"
            placeholder="Your name*"
            onChange={handleChange}
            value={values.name}
            required
          />
          <input
            className={styles.inputBox}
            type="text"
            name="company"
            id="company"
            placeholder="Your company name*"
            onChange={handleChange}
            value={values.company}
            required
          />
          <input
            className={styles.inputBox}
            type="email"
            name="email"
            id="email"
            placeholder="Your e-mail*"
            onChange={handleChange}
            value={values.email}
            required
          />
          <input
            className={styles.inputBox}
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            onChange={handleChange}
            value={values.country}
          />
          <input
            className={styles.inputBox}
            type="number"
            name="budget"
            id="budget"
            placeholder="Your budget"
            onChange={handleChange}
            value={values.budget}
          />
          <input type="hidden" name="recaptchaToken" id="recaptchaToken" />
          <textarea
            placeholder="Comments or Questions"
            className={styles.textarea}
            name="comment"
            id="comment"
            rows="4"
            onChange={handleChange}
            value={values.comment}
          ></textarea>
          <button className={styles.submitBtn} type="submit">
            Send
            <Image
              src="/arrow-black-right.svg"
              width={29}
              height={35}
              alt="arrow down white"
            />
          </button>
          {/* Send
            <Image
              src="/arrow-black-right.svg"
              alt="arrow icon"
              width={35}
              height={29}
            />
          </input> */}
        </form>
      </div>
    </section>
  );
}

export default Hero;
