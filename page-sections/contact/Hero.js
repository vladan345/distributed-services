import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "../../styles/section-css/contact/Hero.module.css";
import { sendContactForm } from "@/lib/api";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { collectServices } from "@/lib/projects";
function Hero() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [allServices, setServices] = useState([]);
  const [active, setActive] = useState(false);
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    services: [],
    budget: "",
    comment: "",
  });

  useEffect(() => {
    setServices(collectServices());
  }, []);

  const handleChange = (e) => {
    if (e.target.type != "radio") {
      setValues((prevState) => {
        return {
          ...prevState,
          [e.target.id]: e.target.value,
        };
      });
    } else {
      setValues((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    }
    return { values, handleChange };
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setValues({
        ...values,
        services: [...values.services, e.target.name],
      });
    } else {
      setValues({
        ...values,
        services: values.services.filter((value) => value !== e.target.name),
      });
    }
  };

  const removeTag = (e) => {
    let tag = e.currentTarget;

    tag = tag.querySelector(".tagValue span");

    let tagText = tag.innerHTML;
    let tagId = tagText.split(" ").join("-");
    setValues({
      ...values,
      services: values.services.filter((value) => value != tagId),
    });
    let checkbox = document.getElementById(tagId);
    checkbox.checked = false;
  };

  const handleDrop = (e) => {
    let target = e.target;
    if (
      target.tagName == "DIV" ||
      (target.tagName == "IMG" && !target.classList.contains("closeIcon"))
    ) {
      setActive(!active);
    }
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
        <h1>Work with us.</h1>
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
          <div className={styles.selectWrap} onClick={handleDrop} id="dropWrap">
            <div className={styles.tagWrap}>
              <div className={styles.tags}>
                {values.services.length != 0
                  ? values.services.map((service, index) => {
                      return (
                        <span
                          key={index}
                          className={`${styles.serviceTag} tagValue`}
                          onClick={removeTag}
                        >
                          <span>{service.split("-").join(" ")}</span>
                          <Image
                            src="/images/contact/close-service.svg"
                            alt="close icon"
                            width={9}
                            height={10}
                            className="closeIcon"
                          />
                        </span>
                      );
                    })
                  : "Services"}
              </div>
              <Image
                className={`${active ? styles.activeImage : ""}`}
                src="/arrow-black-down.svg"
                width={18}
                height={22}
                alt="arrow down white"
              />
            </div>

            <div
              className={`${styles.dropdown} ${active ? styles.active : ""}`}
            >
              {allServices &&
                allServices.map((service, index) => (
                  <label htmlFor={service} key={index}>
                    <input
                      type="checkbox"
                      name={service}
                      id={service}
                      onChange={handleCheckbox}
                    />
                    <span> {service.split("-").join(" ")}</span>
                  </label>
                ))}
            </div>
          </div>
          <div className={styles.budgetWrap}>
            <p className={styles.budgetHeading}>Your budget</p>
            <div className={styles.budgetList}>
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="$1K - $10K"
                  onChange={handleChange}
                />
                <span>$1K - $10K</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="$10K - $50K"
                  onChange={handleChange}
                />
                <span>$10K - $50K</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="$50K - $100K"
                  onChange={handleChange}
                />
                <span>$50K - $100K</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="budget"
                  value="$100K+"
                  onChange={handleChange}
                />
                <span>$100K+</span>
              </label>
            </div>
          </div>

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
            Submit Form
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
