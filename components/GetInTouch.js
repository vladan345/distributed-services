import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/component-css/GetInTouch.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GetInTouch({ mode }) {
  const main = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".container", {
        scrollTrigger: {
          start: "top 50%",
          end: "bottom top",
          trigger: ".trigger",
          toggleClass: styles.active,
          once: true,
        },
      });
    }, main.current);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Link className={`${styles.GetInTouch} `} ref={main} href="#">
      <div className="container trigger">
        <div className={`${styles.textWrap} `}>
          <h2>Get in touch!</h2>
        </div>
        <div className={`${styles.arrowContainer} arrowContainer`}>
          <Image
            src="/images/arrow-white-right-big.svg"
            alt="arrow icon"
            width={416}
            height={338}
          />
        </div>
      </div>
    </Link>
  );
}

export default GetInTouch;