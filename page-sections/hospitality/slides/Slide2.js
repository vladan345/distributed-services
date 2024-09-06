import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function Slide2({ opacity, gsapRef }) {
  const main = useRef();
  useGSAP(
    () => {
      gsapRef.current = gsap.timeline({ paused: true });
    },
    { scope: main },
  );
  return (
    <div
      className="fader__slide absolute top-0 h-full w-full"
      style={{ opacity: opacity }}
      ref={main}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between">
        <div className="max-w-[450px]">
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
      </div>
    </div>
  );
}
