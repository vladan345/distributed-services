import Image from "next/image";
import Link from "next/link";

export default function Slide4({ opacity }) {
  return (
    <div
      className="fader__slide absolute top-0 h-full w-full"
      style={{ opacity: opacity }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between bg-blue-200">
        <div className="max-w-[450px]">
          <h2 className="hosp-h2 text-pine-green">
            Transform Your Restaurant's Success
          </h2>
          <p className="hosp-h3 my-[40px] text-pine-green">
            Let us create a masterpiece that brings customers to your table.
          </p>
          <Link
            className={`hosp-h3 flex max-w-[280px] items-center justify-between rounded-full bg-accent p-[20px] !text-black`}
            href="#"
          >
            Contact us today
            <Image
              src="/images/hospitality/carret-right.svg"
              alt="Carret icon"
              width={5}
              height={11}
            />
          </Link>
        </div>

        <div>
          <Image
            src="/images/hospitality/brownie.png"
            alt="Brownie plate"
            width={770}
            height={844}
            className="translate-x-[20%] translate-y-[10%]"
          />
        </div>
      </div>
    </div>
  );
}
