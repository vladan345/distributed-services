import Image from "next/image";

export default function Slide3({ opacity, pointerEvents }) {
  return (
    <section
      className="fader__slide absolute top-0 h-full w-full overflow-x-clip px-[20px]"
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
            Great Food Deserves a Full House
          </h2>
          <p className="hosp-h3 mt-[40px] text-pine-green">
            You've invested in your interiors, menu, and dining experience - but
            without a strong online presence, tables remain unfilled. We fix
            that by creating visibility that drives bookings and revenue. Your
            audience is online, and it's time your brand is too. Don't wait for
            customers to find you—let's make sure you're front and centre.
          </p>
        </div>
        <div
          className="relative lg:w-1/2 md:w-auto"
          style={{ transform: `translateX(${(1 - opacity) * 50}px)` }}
        >
          <Image
            src="/images/hospitality/3.jpg"
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
