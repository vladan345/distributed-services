import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Slide4({ opacity, gsapRef, pointerEvents }) {
  const main = useRef();
  useGSAP(
    () => {
      if (window.innerWidth < 800) {
        gsapRef.current = gsap.timeline({ paused: true }).from(".mockupM", {
          duration: 1,
          autoAlpha: 0,
          stagger: -0.2,
        });
      } else {
        gsapRef.current = gsap
          .timeline({ paused: true })
          .from(".imageRow", {
            right: -100,
            duration: 1,
            autoAlpha: 0,
          })
          .to(
            ".mockup",
            {
              marginLeft: -80,
              duration: 1,
            },
            "<",
          );
      }
    },
    { scope: main },
  );
  return (
    <section
      className="fader__slide absolute top-0 h-full w-full px-[20px]"
      style={{
        opacity: opacity,
        pointerEvents: pointerEvents ? "auto" : "none",
      }}
      ref={main}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between md:flex-col md:justify-start md:gap-[40px]">
        <div
          className="max-w-[450px] lg:max-w-[400px]"
          style={{ transform: `translateX(${(1 - opacity) * -50}px)` }}
        >
          <h2 className="hosp-h2 text-pine-green">
            Transform Your Restaurant's Success
          </h2>
          <p className="hosp-h3 my-[40px] text-pine-green">
            Let us create a masterpiece that brings customers to your table.
          </p>
          <Link
            className={`hosp-h3 flex max-w-[280px] items-center justify-between rounded-full bg-accent p-[20px] !text-black transition duration-300 hover:bg-pine-green`}
            target="_blank"
            href="https://calendly.com/distributedservices"
          >
            Contact us today
            <Image
              src="/images/hospitality/carret-right.svg"
              alt="Carret icon"
              width={5}
              height={11}
            />
          </Link>
        </div>
        <div className="hidden max-w-[400px] md:block">
          <div className="relative z-[1] flex justify-center">
            <Image
              src="/images/hospitality/mockup1.png"
              alt="Brownie plate"
              width={368}
              height={478}
              className="mockupM relative z-[1] mr-[-80px]"
            />
            <Image
              src="/images/hospitality/mockup2.png"
              alt="Brownie plate"
              width={368}
              height={478}
              className="mockupM"
            />
          </div>
          <Image
            src="/images/hospitality/mockup3M.png"
            alt="Brownie plate"
            width={360}
            height={248}
            className="mockupM mt-[-60px]"
          />
        </div>
      </div>
      <div className="imageRow absolute right-0 top-[40%] flex -translate-y-1/2 flex-row-reverse lg:top-[50%] md:hidden">
        <Image
          src="/images/hospitality/mockup3.png"
          alt="Brownie plate"
          width={568}
          height={510}
          className="mockup ml-[-300px] object-contain 2xl:max-w-[420px] xl:max-w-[250px] md:ml-0"
        />
        <Image
          src="/images/hospitality/mockup2.png"
          alt="Brownie plate"
          width={368}
          height={478}
          className="mockup ml-[-300px] translate-y-[80px] object-contain 2xl:max-w-[300px] xl:max-w-[180px] md:ml-0"
        />
        <Image
          src="/images/hospitality/mockup1.png"
          alt="Brownie plate"
          width={368}
          height={478}
          className="translate-y-[160px] object-contain 2xl:max-w-[300px] xl:max-w-[180px] md:ml-0"
        />
      </div>
    </section>
  );
}
