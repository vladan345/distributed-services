"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Hero() {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.to(".reveal", {
        width: 0,
        duration: 2,
        ease: "power2.inOut",
      });
    },
    { scope: main },
  );

  return (
    <section
      ref={main}
      className="max-w-[1920px mx-auto mt-[90px] w-full md:mt-[70px]"
    >
      <div className="relative w-full overflow-hidden">
        <video
          src={`/images/hospitality/hero.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover md:hidden"
        ></video>
        <video
          src={`/images/hospitality/hero-mobile.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="hidden h-full w-full object-cover md:block"
        ></video>
        <div className="absolute left-0 top-0 h-full w-full bg-[rgba(0,0,0,0.2)]"></div>
        <div className="absolute left-1/2 top-1/2 flex w-full max-w-[1350px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white">
          <h1 className="hosp-h1 w-full text-center !font-bold">
            Unlock Consistent Revenue Growth with Proven Online Strategies.
          </h1>
          <p className="hosp-h2 my-[57px]">
            As passionate foodies with a deep understanding of the evolving F&B
            scene, we help restaurants thrive online with strategic campaigns
            that deliver the revenue you deserve.
          </p>
          <Link
            href="/projects"
            className="hosp-h3 flex w-[320px] items-center justify-between rounded-full bg-accent p-[20px] !text-black transition duration-300 hover:bg-white"
          >
            Get a Free Consultation
            <Image
              src="/images/hospitality/carret-right.svg"
              alt="Carret icon"
              width={5}
              height={11}
            />
          </Link>
        </div>
        <div className="reveal absolute left-0 top-0 h-full w-full bg-white"></div>
        <div className="reveal absolute right-0 top-0 h-full w-full bg-white"></div>
      </div>
    </section>
  );
}
