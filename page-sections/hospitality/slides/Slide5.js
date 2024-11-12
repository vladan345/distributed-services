import Image from "next/image";

export default function Slide5({ opacity, pointerEvents }) {
  return (
    <section
      className="fader__slide absolute top-0 h-full w-full px-[20px]"
      style={{
        opacity: opacity,
        pointerEvents: pointerEvents ? "auto" : "none",
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between px-[25px] md:flex-col md:justify-start md:gap-[40px]">
        <div
          className="max-w-[570px] lg:max-w-[400px]"
          style={{ transform: `translateX(${(1 - opacity) * -50}px)` }}
        >
          <h2 className="hosp-h2 text-pine-green">From Kitchen to Clicks</h2>
          <p className="hosp-h3 mt-[40px] text-pine-green">
            We take care of everything - from building a stunning,
            high-converting website to managing your entire digital marketing
            strategy. Your website is the foundation of your online presence,
            and without it, even the best dining experience goes unnoticed. We
            create websites that not only capture your restaurant's unique vibe
            but also drive bookings and revenue. Plus, we handle all your
            marketing needs, so you can focus on delivering exceptional dining
            experiences while we bring the customers to your door.
          </p>
        </div>
        <div
          className="relative"
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
