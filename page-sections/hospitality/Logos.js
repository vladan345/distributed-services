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
      className="relative bg-light pb-[120px] pt-[120px] md:pb-[60px] md:pt-[60px]"
    >
      <h2 className="hosp-h2 mb-[46px] text-center md:!text-[20px]">
        Trusted by other brands
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
      <div className="container !mt-[80px] grid min-h-[360px] grid-cols-3 gap-[40px] lg:grid-cols-1">
        <div className="flex flex-col items-center gap-[40px] bg-white px-[20px] py-[40px]">
          <Image
            src="/images/hospitality/xu.svg"
            alt="Xu logo"
            width={70}
            height={84}
          />
          <p className="hosp-h3 text-center">
            XU came to us struggling with low bookings. Within 3 months, we
            increased their table reservations by 150% using targeted Google Ads
            and a refined online strategy.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[40px] bg-white px-[20px] py-[40px]">
          <Image
            src="/images/hospitality/eugene.svg"
            alt="Eugene logo"
            width={292}
            height={84}
          />
          <p className="hosp-h3 text-center">
            Eugene Eugene saw an incremental increase in reservations already in
            the first month working with us.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[40px] bg-white px-[20px] py-[40px]">
          <Image
            src="/images/hospitality/boga.svg"
            alt="Boga logo"
            width={236}
            height={84}
          />
          <p className="hosp-h3 text-center">
            Boga SuperFood, after 3 months we have increased number of…
          </p>
        </div>
      </div>
    </section>
  );
}
