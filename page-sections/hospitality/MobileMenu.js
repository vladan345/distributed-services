import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";
import Link from "next/link";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  const lenis = useLenis();
  return (
    <div
      className={`${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} fixed left-0 top-0 z-[1000] hidden h-full w-full bg-accent transition duration-500 xl:block`}
    >
      <div className="flex h-[90px] w-full items-center justify-between px-[20px] py-[20px] md:h-[60px] md:py-[10px]">
        <Link href="/">
          <Image
            src="/images/hospitality/logo.svg"
            alt="DS Hospitality logo"
            width={311}
            height={51}
            className="md:max-w-[200px]"
          />
        </Link>
        <button onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/hospitality/close.svg"
            alt="Close menu"
            width={40}
            height={40}
          />
        </button>
      </div>

      <div className="mt-[40px] flex flex-col items-center gap-[20px] px-[20px]">
        <span
          className="hosp-h2 w-[350px] rounded-full border border-black px-[28px] py-[24px] text-center !text-black sm:w-full sm:py-[16px] sm:!text-[20px]"
          onClick={() => {
            lenis?.scrollTo("#services", { offset: -120 });
            setMenuOpen(false);
          }}
        >
          Services
        </span>
        <a
          className="hosp-h2 w-[350px] rounded-full border border-black px-[28px] py-[24px] text-center !text-black sm:w-full sm:py-[16px] sm:!text-[20px]"
          onClick={() => {
            lenis?.scrollTo("#about", { offset: -60 });
            setMenuOpen(false);
          }}
        >
          About
        </a>
        <a
          className="hosp-h2 w-[350px] rounded-full border border-black px-[28px] py-[24px] text-center !text-black sm:w-full sm:py-[16px] sm:!text-[20px]"
          onClick={() => {
            lenis?.scrollTo("#work", { offset: -60 });
            setMenuOpen(false);
          }}
        >
          Work
        </a>
        <a
          className="hosp-h2 w-[350px] rounded-full border border-black px-[28px] py-[24px] text-center !text-black sm:w-full sm:py-[16px] sm:!text-[20px]"
          onClick={() => {
            lenis?.scrollTo("#clients", { offset: -60 });
            setMenuOpen(false);
          }}
        >
          Clients
        </a>
        <a
          className="hosp-h2 w-[350px] rounded-full bg-white px-[28px] py-[24px] text-center !text-black sm:w-full sm:py-[16px] sm:!text-[20px]"
          href="#"
        >
          Book a meeting
        </a>
      </div>
      <div className="mt-[40px]">
        <p className="hosp-h2 mb-[40px] text-center md:mb-[20px] sm:text-[20px]">
          Follow us
        </p>
        <div className="flex items-center justify-center gap-[30px]">
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
    </div>
  );
}
