"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const services = [
    {
      tags: ["Web design", "Dev", "Back-end"],
      title: "Web&Dev",
      description:
        "Placerat est sapien sem maecenas quis enim. Bibendum vel id vehicula arcu gravida quam in luctus arcu. Mauris nec suspendisse in.",
      link: "#",
      icon: "symbol1.svg",
    },
    {
      tags: ["Web design", "Dev", "Back-end"],
      title: "Digital Marketing",
      description:
        "Placerat est sapien sem maecenas quis enim. Bibendum vel id vehicula arcu gravida quam in luctus arcu. Mauris nec suspendisse in.",
      link: "#",
      icon: "symbol2.svg",
    },
    {
      tags: ["Web design", "Dev", "Back-end"],
      title: "Full-Cycle Project Dev",
      description:
        "Placerat est sapien sem maecenas quis enim. Bibendum vel id vehicula arcu gravida quam in luctus arcu. Mauris nec suspendisse in.",
      link: "#",
      icon: "symbol3.svg",
    },
    {
      tags: ["Meta", "LinkedIn"],
      title: "Social Media",
      description:
        "Placerat est sapien sem maecenas quis enim. Bibendum vel id vehicula arcu gravida quam in luctus arcu. Mauris nec suspendisse in.",
      link: "#",
      icon: "symbol4.svg",
    },
    {
      tags: ["Web design", "Dev", "Back-end"],
      title: "Distributed Teams",
      description:
        "Placerat est sapien sem maecenas quis enim. Bibendum vel id vehicula arcu gravida quam in luctus arcu. Mauris nec suspendisse in.",
      link: "#",
      icon: "symbol5.svg",
    },
  ];
  return (
    <section className="*: mx-auto mt-[90px] w-full max-w-[1920px] px-[20px] md:mt-[70px]">
      <div className="relative h-[calc(100vh-100px)] w-full overflow-hidden rounded-[40px]">
        <Image
          src="/images/hospitality/hero.png"
          alt="Hero temp"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <h1 className="hosp-h1 absolute left-1/2 top-1/2 w-full max-w-[950px] -translate-x-1/2 -translate-y-1/2 text-center text-white">
          Stay Ahead in the Hospitality Industry
        </h1>
      </div>

      <div className="mx-auto my-[120px] flex h-[450px] max-w-[1690px] items-stretch justify-center gap-[40px] md:my-[60px] 2xl:gap-[20px] 1xl:h-auto 1xl:max-w-[640px] 1xl:flex-col 1xl:items-center">
        {services.map((service, index) => (
          <ServiceCard
            id={index}
            isActive={index == activeSlide}
            key={index}
            service={service}
            setActiveSlide={setActiveSlide}
          />
        ))}
      </div>
    </section>
  );
}

const ServiceCard = ({ service, isActive, id, setActiveSlide }) => {
  return (
    <div
      onClick={() => setActiveSlide(id)}
      className={`flex flex-col justify-between rounded-[40px] bg-pine-green p-[20px] transition-all duration-500 1xl:h-full ${isActive ? "w-[450px] cursor-auto 1xl:max-h-[1000px] 1xl:w-full" : "w-[210px] cursor-pointer 1xl:max-h-[200px] 1xl:w-full"} relative overflow-hidden`}
    >
      <img
        src={`/images/hospitality/${service.icon}`}
        alt="Decorative background"
        className={`absolute ${isActive ? "left-3/4" : "left-1/2 1xl:left-3/4"} top-1/2 z-[0] max-w-none -translate-x-1/2 -translate-y-1/2 transition-all duration-500`}
      />
      <div className="topBar relative">
        <div className="relative flex items-center justify-end 1xl:justify-between">
          <div
            className={`absolute left-0 top-1/2 flex min-w-[300px] -translate-y-1/2 justify-start gap-[12px] transition duration-500 1xl:static 1xl:min-w-0 1xl:-translate-y-0 1xl:flex-wrap 1xl:gap-y-[10px] ${isActive ? "opacity-100" : "opacity-0"}`}
          >
            {service.tags.map((tag) => (
              <div
                className="hosp-h4 rounded-full border border-pistacio px-[10px] text-pistacio"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
          <Image
            src="/images/hospitality/arrow-right.svg"
            alt="Arrow icon"
            width={40}
            height={40}
            className={`transition duration-500 1xl:min-w-[40px] 1xl:rotate-90 ${isActive && "rotate-180 1xl:-rotate-90"}`}
          />
        </div>
        <h2 className="hosp-h2 mt-[40px] min-h-[76px] max-w-[200px] text-white 1xl:mb-[20px] 1xl:mt-[10px]">
          {service.title}
        </h2>
      </div>

      <div className="bottomBar relative">
        <p
          className={`${isActive ? "opacity-100 delay-500" : "opacity-0"} hosp-p absolute bottom-[100px] min-w-[410px] text-white transition duration-500 1xl:static 1xl:min-w-0`}
        >
          {service.description}
        </p>
        <Link
          className={`${isActive ? "opacity-100" : "opacity-0"} hosp-h3 mt-[40px] flex w-full items-center justify-between rounded-full bg-accent p-[20px] !text-black`}
          href={service.link}
        >
          Learn more
          <Image
            src="/images/hospitality/carret-right.svg"
            alt="Carret icon"
            width={5}
            height={11}
          />
        </Link>
      </div>
    </div>
  );
};
