import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-accent">
      <div className="container relative z-[1] flex gap-[120px] !py-[120px] lg:gap-[40px] md:flex-col md:items-center md:!py-[40px] md:!pb-[240px]">
        <div className="w-full max-w-[250px] lg:w-1/3 lg:max-w-none md:w-full">
          <h3 className="hosp-h2 mb-[40px] text-pine-green md:text-center">
            DS London Office
          </h3>
          <p className="hosp-p mb-[20px] text-pine-green md:text-center">
            20 Alcester Crescent, E59PX London, UK
          </p>
          <a
            href="tel:+447837513593"
            className="hosp-p block !text-pine-green md:text-center"
          >
            +44 7837 513593
          </a>
          <a
            href="mailto:info@distributedservices.tech"
            className="hosp-p block !text-pine-green md:text-center"
          >
            info@distributedservices.tech
          </a>
        </div>
        <div className="w-full max-w-[250px] lg:w-1/3 lg:max-w-none md:w-full">
          <h3 className="hosp-h2 mb-[40px] text-pine-green md:text-center">
            DS Dubai Office
          </h3>
          <p className="hosp-p mb-[20px] text-pine-green md:text-center">
            Dubai Silicon Oasis DDP Building A1, Dubai, UAE
          </p>
          <a
            href="tel:+971506340569"
            className="hosp-p block !text-pine-green md:text-center"
          >
            +971 50 634 0569
          </a>
          <a
            href="mailto:info@distributedservices.tech"
            className="hosp-p block !text-pine-green md:text-center"
          >
            info@distributedservices.tech
          </a>
        </div>
        <div className="w-full max-w-[150px] lg:w-1/3 lg:max-w-none md:w-full">
          <h3 className="hosp-h2 mb-[40px] text-pine-green md:text-center">
            Follow us
          </h3>
          <div className="flex items-center gap-[30px] md:justify-center">
            <Link
              target="_blank"
              href="https://www.instagram.com/distributedservices/"
            >
              <Image
                src="/images/hospitality/instagram.svg"
                alt="Instagram"
                width={22}
                height={22}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/distributed-services/"
            >
              <Image
                src="/images/hospitality/linkedin.svg"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.tiktok.com/@distributedservices"
            >
              <Image
                src="/images/hospitality/tiktok.svg"
                alt="Tiktok"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <a
          href="https://www.google.com/partners/agency?id=4527503534"
          target="_blank"
        >
          <Image
            width={152}
            height={145}
            src="https://www.gstatic.com/partners/badge/images/2023/PartnerBadgeClickable.svg"
            alt="google partner"
          />
        </a>
      </div>
    </footer>
  );
}
