import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-accent">
      <div className="container relative z-[1] flex gap-[120px] !py-[120px] md:flex-col md:items-center md:!py-[40px] md:!pb-[240px] lg:gap-[40px]">
        <div className="w-full max-w-[250px] md:w-full lg:w-1/3 lg:max-w-none">
          <h3 className="hosp-h2 mb-[40px] text-pine-green md:text-center">
            DS London Office
          </h3>
          <p className="hosp-p mb-[20px] text-pine-green md:text-center">
            20 Alcester Crescent, E59PX London, UK
          </p>
          <p className="hosp-p text-pine-green md:text-center">
            +44 7837 513593
          </p>
          <p className="hosp-p text-pine-green md:text-center">
            info@distributedservices.tech
          </p>
        </div>
        <div className="w-full max-w-[250px] md:w-full lg:w-1/3 lg:max-w-none">
          <h3 className="hosp-h2 mb-[40px] text-pine-green md:text-center">
            DS Dubai Office
          </h3>
          <p className="hosp-p mb-[20px] text-pine-green md:text-center">
            Dubai Silicon Oasis DDP Building A1, Dubai, UAE
          </p>
          <p className="hosp-p text-pine-green md:text-center">
            +971 50 634 0569
          </p>
          <p className="hosp-p text-pine-green md:text-center">
            info@distributedservices.tech
          </p>
        </div>
        <div className="w-full max-w-[250px] md:w-full lg:w-1/3 lg:max-w-none">
          <h3 className="hosp-h2 mb-[40px] text-pine-green md:text-center">
            Follow us
          </h3>
          <div className="flex gap-[30px] md:justify-center">
            <Image
              src="/images/hospitality/facebook.svg"
              alt="Facebook"
              width={11}
              height={22}
            />
            <Image
              src="/images/hospitality/twitter.svg"
              alt="Twitter"
              width={27}
              height={22}
            />
            <Image
              src="/images/hospitality/instagram.svg"
              alt="Instagram"
              width={22}
              height={22}
            />
            <Image
              src="/images/hospitality/youtube.svg"
              alt="Youtube"
              width={31}
              height={22}
            />
          </div>
        </div>
      </div>
      <Image
        src="/images/hospitality/leaf-footer.png"
        alt="Footer image"
        width={567}
        height={381}
        className="md: absolute bottom-0 right-0 h-[80%] w-auto max-w-none md:!h-auto 1xl:h-[40%]"
      />
    </footer>
  );
}
