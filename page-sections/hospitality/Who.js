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
        <h2 className="hosp-h1 content mb-[60px]">Who are we?</h2>
        <p className="content hosp-p mb-[20px] max-w-[800px] text-center">
          Welcome to DS Hospitality, a passionate team of foodies and digital
          marketing experts. Born in the vibrant heart of London and now
          expanded across the Middle East, we've helped some of the most
          prestigious brands in the hospitality sector amplify their digital
          presence and tap into untapped revenue streams.
        </p>
        <p className="content hosp-p max-w-[800px] text-center">
          Whether it's creating a digital presence that gets people talking, or
          crafting campaigns that fill seats, we know what works. From standout
          websites and apps to smart digital strategies, everything we do is
          built around one goal: making your brand irresistible. You've been
          searching for an agency that gets your business. Let's talk.
        </p>
        <Link
          href="/projects"
          className="hosp-h3 mt-[60px] flex w-[220px] items-center justify-between rounded-full bg-white p-[20px] !text-black transition duration-300 hover:invert"
        >
          Chat With Us
          <Image
            src="/images/hospitality/carret-right.svg"
            alt="Carret icon"
            width={5}
            height={11}
          />
        </Link>
      </div>
    </section>
  );
}
