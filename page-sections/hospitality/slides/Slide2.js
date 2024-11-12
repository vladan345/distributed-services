import Image from "next/image";
export default function Slide2({ opacity, pointerEvents }) {
  return (
    <section
      className="fader__slide absolute top-0 h-full w-full overflow-x-clip px-[20px] md:h-auto"
      style={{
        opacity: opacity,
        pointerEvents: pointerEvents ? "auto" : "none",
      }}
    >
      <div className="relative mx-auto flex h-full w-full max-w-[1480px] items-center justify-between px-[25px] lg:gap-[40px] md:flex-col md:gap-[130px]">
        <div
          className="relative z-[1] max-w-[570px] lg:max-w-[400px]"
          style={{ transform: `translateX(${(1 - opacity) * -50}px)` }}
        >
          <h2 className="hosp-h2 text-pine-green">
            Digital Marketing is a form of Art - And We're the Masters of
            Turning Clicks into Customers!
          </h2>
          <p className="hosp-p mt-[40px] text-pine-green">
            Digital marketing is more than just numbers and ads—it's an art
            form. It requires a deep understanding of your audience, the right
            creative approach, and flawless execution. It all begins with a
            well-designed, user-friendly website that captures attention and
            converts visitors. From there, our tailored digital marketing
            strategy works its magic, guiding potential customers to your brand.
            It's a carefully crafted journey that, when done right, leads to
            measurable results. Like any art, it requires skill, creativity, and
            a master plan to turn clicks into customers.
          </p>
        </div>
        <div
          className="relative"
          style={{ transform: `translateX(${(1 - opacity) * 50}px)` }}
        >
          <Image
            src="/images/hospitality/2.jpg"
            alt="Decorative object"
            width={577}
            height={440}
            className="rounded-[12px]"
          />
        </div>
      </div>
    </section>
  );
}
