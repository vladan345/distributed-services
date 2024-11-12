import Image from "next/image";
import Link from "next/link";

export default function Slide1({ opacity, pointerEvents }) {
  return (
    <section
      className="fader__slide absolute top-0 h-full w-full overflow-x-clip px-[20px]"
      style={{
        opacity: opacity,
        pointerEvents: pointerEvents ? "auto" : "none",
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between px-[25px] md:h-auto md:flex-col md:gap-[50px]">
        <div
          className="relative z-[1] max-w-[570px]"
          style={{ transform: `translateX(${(1 - opacity) * -50}px)` }}
        >
          <h2 className="hosp-h2 text-pine-green">
            In a world where your audience lives online, don't miss out on
            valuable customers
          </h2>
          <p className="hosp-h3 mt-[40px] text-pine-green">
            With an average 8x ROAS for our clients, we turn your marketing
            budget into measurable success. Every dollar you invest in digital
            marketing comes back multiplied, filling your restaurant with more
            diners, more bookings, and more revenue. We don't just talk about
            results, we deliver them.
          </p>
          <Link
            className={`hosp-h3 mt-[40px] flex max-w-[320px] items-center justify-between rounded-full bg-accent p-[20px] text-black transition duration-300 hover:bg-pine-green hover:text-white`}
            target="_blank"
            href="https://calendly.com/distributedservices"
          >
            Book a free consultation
            <Image
              src="/images/hospitality/carret-right.svg"
              alt="Carret icon"
              width={5}
              height={11}
            />
          </Link>
        </div>

        <div
          className="relative"
          style={{ transform: `translateX(${(1 - opacity) * 50}px)` }}
        >
          <Image
            src="/images/hospitality/1.jpg"
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
