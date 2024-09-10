"use client";
import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Who() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.from(".content", {
        autoAlpha: 0,
        duration: 0.7,
        y: 50,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 70%",
        },
      });
    },
    { scope: main },
  );

  return (
    <section ref={main} id="about" className="bg-accent px-[20px] py-[80px]">
      <div className="trigger flex flex-col items-center">
        <h2 className="hosp-h1 content">Who are we?</h2>
        <p className="content hosp-p my-[60px] max-w-[700px] text-center">
          Integer vel amet amet non sit quisque. Elementum ut scelerisque purus
          sed. Etiam viverra condimentum sed semper neque augue egestas.
          Elementum vulputate integer faucibus sit ullamcorper lobortis
          vestibulum quam quis. Ut viverra vitae tortor semper massa urna nulla.
          Leo ut laoreet pulvinar aliquam eget donec facilisis imperdiet.
          Ultrices amet enim lacus tortor adipiscing scelerisque sed. Quam
          iaculis sollicitudin odio aliquet duis viverra metus at. Tellus purus
          mattis at mollis praesent. Curabitur commodo arcu.
        </p>
        <div className="flex gap-[20px] md:flex-col md:items-center">
          <Link
            href="/projects"
            className="hosp-h3 flex w-[220px] items-center justify-between rounded-full bg-white p-[20px] !text-black transition duration-300 hover:invert"
          >
            View Projects{" "}
            <Image
              src="/images/hospitality/carret-right.svg"
              alt="Carret icon"
              width={5}
              height={11}
            />
          </Link>
          <Link
            target="_blank"
            href="https://calendly.com/distributedservices"
            className="hosp-h3 flex w-[220px] items-center justify-between rounded-full p-[20px] !text-black underline md:justify-center"
          >
            Book a meeting
          </Link>
        </div>
      </div>
    </section>
  );
}
