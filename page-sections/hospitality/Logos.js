import Image from "next/image";

export default function Logos() {
  return (
    <section
      id="clients"
      className="relative pb-[120px] pt-[120px] md:pb-[60px] md:pt-[60px]"
    >
      <Image
        src="/images/hospitality/logo-bg.png"
        fill
        alt="Decorative background"
        className="z-[-1] object-cover object-bottom"
      />
      <h2 className="hosp-h2 mb-[46px] text-center md:!text-[20px]">
        Trusted by other brands like yours
      </h2>
      <div className="container">
        <div className="grid grid-cols-4 gap-x-[40px] md:grid-cols-2">
          {[...Array(8).keys()].map((index) => {
            return (
              <Image
                key={index}
                src={`/images/hospitality/logo${index + 1}.svg`}
                alt="Restaurant logo"
                width={310}
                height={155}
                className="md:place-self-center"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
