import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Slide3({ opacity, gsapRef }) {
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
      className="fader__slide absolute top-0 h-full w-full overflow-x-clip"
      style={{ opacity: opacity }}
      ref={main}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between">
        <div className="max-w-[450px]">
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
        <div className="flex gap-[40px]">
          <div className="flex min-w-[187px] flex-col gap-[20px]">
            <div className="flex h-full flex-col items-center justify-between rounded-[40px] bg-gradient-to-b from-[#FFCDB7] to-[#FFEEE7] py-[32px]">
              <p className="hosp-p">Lorem ipsum</p>
              <p className="text-[48px] font-light leading-[1]">40%</p>
            </div>
            <div className="flex h-full flex-col items-center justify-between rounded-[40px] bg-gradient-to-b from-[#C8EFA0] to-[#EAF4E7] py-[32px]">
              <p className="hosp-p">Lorem ipsum</p>
              <p className="text-[48px] font-light leading-[1]">120%</p>
            </div>
            <div className="flex h-full flex-col items-center justify-between rounded-[40px] bg-gradient-to-b from-[#FFCDB7] to-[#FFEEE7] py-[32px]">
              <p className="hosp-p">Lorem ipsum</p>
              <p className="text-[48px] font-light leading-[1]">250%</p>
            </div>
          </div>
          <div className="relative basis-full">
            <Image
              src="/images/hospitality/graph.svg"
              alt="ROAS graph"
              width={577}
              height={505}
            />
            <div className="imageCover absolute bottom-[43px] right-0 h-full w-0 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
