import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Slide1({ opacity, gsapRef }) {
  const main = useRef();
  useGSAP(
    () => {
      gsapRef.current = gsap
        .timeline({ paused: true })
        .from(".waterGreen", {
          duration: 1,
          autoAlpha: 0,
          top: "+=100px",
          left: "+=100px",
        })
        .from(
          ".waterYellow",
          {
            duration: 1,
            autoAlpha: 0,
            bottom: "+=100px",
            right: "+=100px",
          },
          "<",
        );
    },
    { scope: main },
  );
  return (
    <div
      ref={main}
      className="fader__slide absolute top-0 h-full w-full overflow-x-clip"
      style={{ opacity: opacity }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between">
        <div className="max-w-[450px]">
          <h2 className="hosp-h2 text-pine-green">Stress-Free Experience</h2>
          <p className="hosp-h3 my-[40px] text-pine-green">
            From A to Z, we manage website development, digital marketing, and
            more, so you can focus on delivering exceptional dining experiences.
          </p>
          <p className="hosp-p text-black">
            Diam vel pretium id sit porta sit rutrum. Facilisis aliquet integer
            ac sit. Volutpat elit lorem quis.
          </p>
        </div>

        <div className="relative translate-x-[20%] translate-y-[10%]">
          <Image
            src="/images/hospitality/water-green.png"
            alt="Decorative object"
            width={508}
            height={482}
            className="waterGreen absolute left-[-30%] top-[-10%]"
          />
          <Image
            src="/images/hospitality/water-yellow.png"
            alt="Decorative object"
            width={508}
            height={482}
            className="waterYellow absolute bottom-0 right-0"
          />
          <Image
            src="/images/hospitality/brownie.png"
            alt="Brownie plate"
            width={770}
            height={844}
            className="relative"
          />
        </div>
      </div>
    </div>
  );
}
