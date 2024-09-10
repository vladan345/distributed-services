import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Slide3({ opacity, gsapRef, pointerEvents }) {
  const main = useRef();
  useGSAP(
    () => {
      gsapRef.current = gsap.timeline({ paused: true }).from(".imageCover", {
        duration: 1.5,
        width: "100%",
      });
    },
    { scope: main },
  );
  return (
    <section
      className="fader__slide absolute top-0 h-full w-full overflow-x-clip px-[20px]"
      style={{
        opacity: opacity,
        pointerEvents: pointerEvents ? "auto" : "none",
      }}
      ref={main}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between gap-[40px] md:flex-col md:justify-start">
        <div
          className="max-w-[450px] lg:max-w-[350px] md:max-w-[400px]"
          style={{ transform: `translateX(${(1 - opacity) * -50}px)` }}
        >
          <h2 className="hosp-h2 text-pine-green">Proven ROAS</h2>
          <p className="hosp-h3 my-[40px] text-pine-green">
            Achieve up to 20x return on Meta and Google Ads with our data-driven
            strategies.
          </p>
          <p className="hosp-p text-black">
            Diam vel pretium id sit porta sit rutrum. Facilisis aliquet integer
            ac sit. Volutpat elit lorem quis.
          </p>
        </div>
        <div className="flex gap-[40px] xl:flex-col md:items-center">
          <div className="flex min-w-[187px] flex-col gap-[20px] xl:flex-row md:w-full md:gap-[10px]">
            <div className="flex h-full flex-col items-center justify-between rounded-[40px] bg-gradient-to-b from-[#FFCDB7] to-[#FFEEE7] py-[32px] xl:w-1/3 xl:gap-[10px] md:rounded-[30px] md:py-[15px]">
              <p className="hosp-p sm:!text-[14px]">Lorem ipsum</p>
              <p className="text-[48px] font-light leading-[1] xl:text-[38px] sm:text-[30px]">
                40%
              </p>
            </div>
            <div className="flex h-full flex-col items-center justify-between rounded-[40px] bg-gradient-to-b from-[#C8EFA0] to-[#EAF4E7] py-[32px] xl:w-1/3 xl:gap-[10px] md:rounded-[30px] md:py-[15px]">
              <p className="hosp-p sm:!text-[14px]">Lorem ipsum</p>
              <p className="text-[48px] font-light leading-[1] xl:text-[38px] sm:text-[30px]">
                120%
              </p>
            </div>
            <div className="flex h-full flex-col items-center justify-between rounded-[40px] bg-gradient-to-b from-[#FFCDB7] to-[#FFEEE7] py-[32px] xl:w-1/3 xl:gap-[10px] md:rounded-[30px] md:py-[15px]">
              <p className="hosp-p sm:!text-[14px]">Lorem ipsum</p>
              <p className="text-[48px] font-light leading-[1] xl:text-[38px] sm:text-[30px]">
                250%
              </p>
            </div>
          </div>
          <div className="relative basis-full md:max-w-[400px] md:basis-0">
            <Image
              src="/images/hospitality/graph.svg"
              alt="ROAS graph"
              width={577}
              height={505}
            />
            <div className="imageCover absolute bottom-[43px] right-0 h-full w-0 bg-white md:bottom-[38px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
