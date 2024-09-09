import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Slide4({ opacity, gsapRef }) {
  const main = useRef();
  useGSAP(
    () => {
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
            Transform Your Restaurant's Success
          </h2>
          <p className="hosp-h3 my-[40px] text-pine-green">
            Let us create a masterpiece that brings customers to your table.
          </p>
          <Link
            className={`hosp-h3 flex max-w-[280px] items-center justify-between rounded-full bg-accent p-[20px] !text-black`}
            href="#"
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
      </div>
      <div className="imageRow absolute right-0 top-[40%] flex -translate-y-1/2 flex-row-reverse">
        <Image
          src="/images/hospitality/mockup3.png"
          alt="Brownie plate"
          width={568}
          height={510}
          className="mockup ml-[-300px]"
        />
        <Image
          src="/images/hospitality/mockup2.png"
          alt="Brownie plate"
          width={368}
          height={478}
          className="mockup ml-[-300px] translate-y-[80px]"
        />
        <Image
          src="/images/hospitality/mockup1.png"
          alt="Brownie plate"
          width={368}
          height={478}
          className="translate-y-[160px]"
        />
      </div>
    </div>
  );
}
