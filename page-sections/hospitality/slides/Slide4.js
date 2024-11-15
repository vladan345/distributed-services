import Image from "next/image";

export default function Slide4({ opacity, pointerEvents }) {
  return (
    <section
      className="fader__slide absolute top-0 h-full w-full px-[20px]"
      style={{
        opacity: opacity,
        pointerEvents: pointerEvents ? "auto" : "none",
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between gap-[60px] px-[25px] md:h-auto md:flex-col-reverse md:gap-[50px] md:px-[0]">
        <div
          className="max-w-[570px] lg:w-1/2 md:w-full"
          style={{ transform: `translateX(${(1 - opacity) * -50}px)` }}
        >
          <h2 className="hosp-h2 text-pine-green md:text-[32px]">
            Stop the Money Burn
          </h2>
          <p className="hosp-h3 mt-[40px] text-pine-green">
            Restaurants with big marketing budgets often burn through cash on
            paid ads with zero results. The truth is, without the right
            strategy, even the biggest spend can lead to nothing but
            frustration. With our experience and proven portfolio, we ensure
            every ad dollar is working to bring customers through your doors.
          </p>
        </div>
        <div
          className="relative lg:w-1/2 md:w-auto"
          style={{ transform: `translateX(${(1 - opacity) * 50}px)` }}
        >
          <Image
            src="/images/hospitality/4.jpg"
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
