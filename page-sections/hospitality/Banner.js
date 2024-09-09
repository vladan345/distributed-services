import Image from "next/image";

export default function Banner() {
  return (
    <section className="flex flex-col items-center pb-[120px] md:pb-[60px]">
      <div className="flex w-full flex-col items-center bg-gradient-to-b from-[#f6f8f7] to-[#fff] px-[20px] pt-[80px] md:pt-[40px]">
        <h2 className="hosp-h1 max-w-[944px] text-center">
          We are managing your favourite place in Dubai
        </h2>
        <p className="hosp-p mb-[80px] mt-[40px] max-w-[700px] text-center md:mb-[40px]">
          Lorem ipsum dolores Stay Ahead in the Hospitality Industry Outsource
          Dev, Advertising, Social Media, and Branding Services
        </p>
      </div>
      <div className="flex h-[693px] w-full gap-[20px] px-[20px] md:h-auto md:flex-col">
        <div className="relative w-2/3 overflow-hidden rounded-[40px] sm:h-[188px] md:h-[300px] md:w-full">
          <Image
            src="/images/hospitality/banner1.png"
            alt="Banner Hospitality"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-1/3 overflow-hidden rounded-[40px] sm:h-[427px] md:h-[600px] md:w-full">
          <Image
            src="/images/hospitality/banner2.png"
            alt="Banner Hospitality"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
