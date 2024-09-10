"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useRef } from "react";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";

export default function Slider() {
  const [opacities, setOpacities] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const gsapRefSlide1 = useRef(null);
  const gsapRefSlide2 = useRef(null);
  const gsapRefSlide3 = useRef(null);
  const gsapRefSlide4 = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: 4,
    slideChanged(slider) {
      const newSlide = slider.track.details.rel;

      // Reset all animations first
      [gsapRefSlide1, gsapRefSlide2, gsapRefSlide3, gsapRefSlide4].forEach(
        (ref, idx) => {
          if (ref.current && idx !== newSlide) {
            ref.current.restart().pause(); // Reset and pause the timeline when slide is not active
          }
        },
      );

      switch (slider.track.details.rel) {
        case 0:
          gsapRefSlide1.current?.play();
          break;
        case 1:
          gsapRefSlide2.current?.play();
          break;
        case 2:
          gsapRefSlide3.current?.play();
          break;
        case 3:
          gsapRefSlide4.current?.play();
          break;
        default:
          break;
      }

      setCurrentSlide(slider.track.details.rel);
    },
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion,
      );
      setOpacities(new_opacities);
    },
  });
  return (
    <>
      <div
        id="work"
        ref={sliderRef}
        className="fader relative h-[1030px] overflow-hidden md:h-[940px]"
      >
        <Slide1
          pointerEvents={currentSlide == 0}
          opacity={opacities[0]}
          gsapRef={gsapRefSlide1}
        />
        <Slide2
          pointerEvents={currentSlide == 1}
          opacity={opacities[1]}
          gsapRef={gsapRefSlide2}
        />
        <Slide3
          pointerEvents={currentSlide == 2}
          opacity={opacities[2]}
          gsapRef={gsapRefSlide3}
        />
        <Slide4
          pointerEvents={currentSlide == 3}
          opacity={opacities[3]}
          gsapRef={gsapRefSlide4}
        />
        {instanceRef.current && (
          <div className="absolute bottom-[120px] left-1/2 flex -translate-x-1/2 gap-[12px] md:bottom-[60px]">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`h-[12px] rounded-[6px] transition-all duration-500 ${
                    currentSlide === idx
                      ? "w-[36px] bg-pine-green"
                      : "w-[12px] bg-light-grey"
                  }`}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
