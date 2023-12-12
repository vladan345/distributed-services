import Hero from "@/page-sections/contact/Hero";
import styles from "@/styles/Contact.module.css";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { ReactLenis } from "@studio-freight/react-lenis";

function contact() {
  return (
    <>
      <Head>
        <title>Distributed Services | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Do you have any questions about our work?"
        />
        <meta
          name="twitter:description"
          content="Do you have any questions about our work?"
        />

        <meta name="title" content="Distributed Services | Contact" />
        <meta name="twitter:title" content="Distributed Services | Contact" />

        <meta
          property="og:url"
          content="https://distributedservices.tech/contact"
        />
        <meta
          property="twitter:url"
          content="https://distributedservices.tech/contact"
        />
        <meta property="twitter:domain" content="distributedservices.tech" />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:image"
          content="https://distributedservices.tech/images/featured/contact.jpg"
        />
        <meta
          name="twitter:image"
          content="https://distributedservices.tech/images/featured/contact.jpg"
        />
      </Head>
      <Script
        async
        src="https://www.google.com/recaptcha/api.js?render=6Lc8Tn0mAAAAAO7BUUYZ51CF_aw_uUCcsz71I8Sm"
      />

      <ReactLenis root options={{ duration: 1.2 }}>
        <div className={styles.Contact}>
          <Hero />
          <div className="container">
            <div className={styles.mapWrap}>
              <div className={styles.textBox}>
                <h2>DS London Office</h2>
                <p className={styles.address}>
                  20 Alcester Crescent, E59PX London, UK
                </p>
                <Link href="tel:+971506340569">+971 50 634 0569</Link>
                <Link href="info@distributedservices.tech">
                  info@distributedservices.tech
                </Link>
              </div>
              <iframe
                src="https://snazzymaps.com/embed/493969"
                width="100%"
                height="480px"
                style={{ border: "none" }}
              ></iframe>
            </div>
            <div className={styles.mapWrap}>
              <iframe
                src="https://snazzymaps.com/embed/493971"
                width="100%"
                height="480px"
                style={{ border: "none" }}
              ></iframe>
              <div className={styles.textBox}>
                <h2>DS Dubai Office</h2>
                <p className={styles.address}>
                  Dubai Silicon Oasis DDP Building A1, Dubai, UAE
                </p>
                <Link href="tel:+971506340569">+971 50 634 0569</Link>
                <Link href="info@distributedservices.tech">
                  info@distributedservices.tech
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
}

export default contact;
