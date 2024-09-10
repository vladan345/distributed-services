import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Banner() {
  const main = useRef(null);
  useGSAP(
    () => {
      gsap.to(".reveal", {
        duration: 1.2,
        width: 0,
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
    <section
      ref={main}
      className="flex flex-col items-center pb-[120px] md:pb-[60px]"
    >
      <div className="flex w-full flex-col items-center bg-gradient-to-b from-[#f6f8f7] to-[#fff] px-[20px] pt-[80px] md:pt-[40px]">
        <h2 className="hosp-h1 max-w-[944px] text-center">
          We are managing your favourite place in Dubai
        </h2>
        <p className="hosp-p mb-[80px] mt-[40px] max-w-[700px] text-center md:mb-[40px]">
          Lorem ipsum dolores Stay Ahead in the Hospitality Industry Outsource
          Dev, Advertising, Social Media, and Branding Services
        </p>
      </div>
      <div className="trigger flex h-[693px] w-full gap-[20px] px-[20px] md:h-auto md:flex-col">
        <div className="relative w-2/3 overflow-hidden rounded-[40px] md:h-[300px] md:w-full sm:h-[188px]">
          <div className="reveal absolute left-0 top-0 z-[1] h-full w-full bg-white"></div>
          <Image
            src="/images/hospitality/banner1.png"
            alt="Banner Hospitality"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-1/3 overflow-hidden rounded-[40px] md:h-[600px] md:w-full sm:h-[427px]">
          <div className="reveal absolute right-0 top-0 z-[1] h-full w-full bg-white"></div>
          <Image
            src="/images/hospitality/banner2.png"
            alt="Banner Hospitality"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
