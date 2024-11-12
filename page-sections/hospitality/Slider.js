"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useRef } from "react";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";

export default function Slider() {
  const [opacities, setOpacities] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: 5,
      slideChanged(slider) {
        // Reset all animations first

        setCurrentSlide(slider.track.details.rel);
      },
      loop: true,
      defaultAnimation: {
        duration: 1000,
      },
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion,
        );
        setOpacities(new_opacities);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );
  return (
    <>
      <div className="flex flex-col items-center gap-[32px]">
        <h2 className="hosp-h1 text-center">Pain Points & Solution</h2>
        <p className="hosp-h3 max-w-[840px] text-center">
          Let us worry about bringing in more customers, while you focus on
          doing what you do best Turning Every Dollar into Dining Guests -
          4x-20x ROAS That Proves It Works!
        </p>
      </div>
      <div
        id="work"
        ref={sliderRef}
        className="fader relative h-[700px] overflow-hidden md:h-[940px]"
      >
        <Slide1 pointerEvents={currentSlide == 0} opacity={opacities[0]} />
        <Slide2 pointerEvents={currentSlide == 1} opacity={opacities[1]} />
        <Slide3 pointerEvents={currentSlide == 2} opacity={opacities[2]} />
        <Slide4 pointerEvents={currentSlide == 3} opacity={opacities[3]} />
        <Slide5 pointerEvents={currentSlide == 4} opacity={opacities[4]} />
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
