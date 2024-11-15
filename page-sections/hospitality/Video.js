"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
export default function Video() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      number: 4,
      perView: 1.2,
      spacing: 20,
    },
    loop: false,
  });
  return (
    <section className="pt-[160px] md:pt-[60px]">
      <video
        src="/images/hospitality/desktop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full md:hidden"
      ></video>

      <div
        ref={sliderRef}
        className="keen-slider !hidden pb-[80px] pl-[20px] md:!flex"
      >
        {[...Array(4).keys()].map((index) => (
          <div
            key={index}
            className="keen-slider__slide rounded-[32px] drop-shadow-2xl"
          >
            <video
              src={`/images/hospitality/mobile${index + 1}.mp4`}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            ></video>
          </div>
        ))}
      </div>
    </section>
  );
}
