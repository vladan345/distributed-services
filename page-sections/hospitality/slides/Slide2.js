import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function Slide2({ opacity, gsapRef }) {
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
      className="fader__slide absolute top-0 h-full w-full overflow-x-clip"
      style={{ opacity: opacity }}
      ref={main}
    >
      <Image
        src="/images/hospitality/leaf.png"
        width={733}
        height={636}
        alt="Decorative object"
        className="leaf absolute right-0 top-[5%] origin-bottom-right"
      />
      <div className="relative mx-auto flex h-full w-full max-w-[1480px] items-center justify-between">
        <div className="relative z-[1] max-w-[450px]">
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
        <div className="relative">
          <Image
            src="/images/hospitality/symbol.svg"
            width={420}
            height={420}
            alt="Decorative object"
            className="symbol absolute left-0 top-0 -translate-x-[70%]"
          />
          <Image
            src="/images/hospitality/laptop.png"
            width={805}
            height={463}
            alt="Laptop"
            className="relative"
          />
        </div>
      </div>
    </section>
  );
}
