"use client";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Logos() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.from(".logo", {
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
    <section
      ref={main}
      id="clients"
      className="relative pb-[120px] pt-[120px] md:pb-[60px] md:pt-[60px]"
    >
      <Image
        src="/images/hospitality/logo-bg.png"
        fill
        alt="Decorative background"
        className="z-[-1] object-cover object-bottom"
      />
      <h2 className="hosp-h2 mb-[46px] text-center md:!text-[20px]">
        Trusted by other brands like yours
      </h2>
      <div className="trigger container">
        <div className="grid grid-cols-4 gap-x-[40px] md:grid-cols-2">
          {[...Array(8).keys()].map((index) => {
            return (
              <Image
                key={index}
                src={`/images/hospitality/logo${index + 1}.svg`}
                alt="Restaurant logo"
                width={310}
                height={155}
                className="logo md:place-self-center"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
