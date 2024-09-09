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
    <section>
      <h2 className="hosp-h1 my-[120px] text-center md:my-[60px] md:px-[20px]">
        Meta ads for the restaurants
      </h2>
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
          <div className="keen-slider__slide rounded-[32px] drop-shadow-2xl">
            <video
              key={index}
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
