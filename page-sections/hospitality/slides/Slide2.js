import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function Slide2({ opacity, gsapRef, pointerEvents }) {
  const main = useRef();
  useGSAP(
    () => {
      gsapRef.current = gsap
        .timeline({ paused: true })
        .from(".symbol", {
          duration: 1,
          autoAlpha: 0,
          left: "+=100px",
        })
        .from(
          ".leaf",
          {
            duration: 1,
            autoAlpha: 0,
            rotate: 10,
          },
          "<",
        );
    },
    { scope: main },
  );
  return (
    <section
      className="fader__slide absolute top-0 h-full w-full overflow-x-clip px-[20px] md:h-auto"
      style={{
        opacity: opacity,
        pointerEvents: pointerEvents ? "auto" : "none",
      }}
      ref={main}
    >
      <Image
        src="/images/hospitality/leaf.png"
        width={733}
        height={636}
        alt="Decorative object"
        className="leaf absolute right-0 top-[5%] origin-bottom-right 2xl:top-0 2xl:max-w-[600px] lg:top-[10%] lg:max-w-[400px] md:bottom-0 md:top-auto sm:bottom-[10%] sm:max-w-[300px]"
      />
      <div className="relative mx-auto flex h-full w-full max-w-[1480px] items-center justify-between lg:gap-[40px] md:flex-col md:gap-[130px]">
        <div
          className="relative z-[1] max-w-[450px] lg:max-w-[400px]"
          style={{ transform: `translateX(${(1 - opacity) * -50}px)` }}
        >
          <h2 className="hosp-h2 text-pine-green">
            Artful, Reservation-Boosting Websites
          </h2>
          <p className="hosp-h3 my-[40px] text-pine-green">
            Our designs are not just visually stunning—they drive reservations
            and reflect the unique essence of your restaurant.
          </p>
          <p className="hosp-p text-black">
            Volutpat elit lorem quis id aliquet diam accumsan a. Egestas nunc
            ridiculus senectus congue.
          </p>
        </div>
        <div className="relative 2xl:max-w-[600px] 1xl:max-w-[500px]">
          <Image
            src="/images/hospitality/symbol.svg"
            width={420}
            height={420}
            alt="Decorative object"
            className="symbol absolute left-0 top-0 -translate-x-[70%] 2xl:max-w-[300px] 1xl:max-w-[280px] lg:hidden"
          />
          <Image
            src="/images/hospitality/laptop.png"
            width={805}
            height={463}
            alt="Laptop"
            className="relative 2xl:-translate-x-[10%] md:translate-x-0"
          />
        </div>
      </div>
    </section>
  );
}
