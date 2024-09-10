"use client";
import { useState } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { useLenis } from "@studio-freight/react-lenis";
import Link from "next/link";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();
  return (
    <>
      <header className="fixed left-0 top-0 z-[999] h-[90px] w-full bg-white py-[20px] md:h-[60px] md:py-[10px]">
        <div className="hosp-container flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/hospitality/logo.svg"
              alt="DS Hospitality logo"
              width={311}
              height={51}
              className="md:max-w-[200px]"
            />
          </Link>
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:hidden">
            <ul className="flex gap-[16px]">
              <li>
                <span
                  onClick={() => {
                    lenis?.scrollTo("#services", { offset: -120 });
                  }}
                  className="hosp-h4 cursor-pointer rounded-full bg-light px-[28px] py-[16px] transition duration-300 hover:bg-light-grey"
                >
                  Services
                </span>
              </li>
              <li>
                <span
                  className="hosp-h4 cursor-pointer rounded-full bg-light px-[28px] py-[16px] transition duration-300 hover:bg-light-grey"
                  onClick={() => {
                    lenis?.scrollTo("#about", { offset: -80 });
                  }}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className="hosp-h4 cursor-pointer rounded-full bg-light px-[28px] py-[16px] transition duration-300 hover:bg-light-grey"
                  onClick={() => {
                    lenis?.scrollTo("#work");
                  }}
                >
                  Work
                </span>
              </li>
              <li>
                <span
                  className="hosp-h4 cursor-pointer rounded-full bg-light px-[28px] py-[16px] transition duration-300 hover:bg-light-grey"
                  onClick={() => {
                    lenis?.scrollTo("#clients");
                  }}
                >
                  Clients
                </span>
              </li>
            </ul>
          </nav>

          <Link
            target="_blank"
            href="https://calendly.com/distributedservices"
            className="hosp-h4 rounded-full bg-accent px-[26px] py-[16px] transition duration-300 hover:bg-pine-green hover:!text-white xl:hidden"
          >
            Book a meeting
          </Link>
          <button onClick={() => setMenuOpen(true)} className="hidden xl:block">
            <Image
              src="/images/hospitality/menu.svg"
              alt="Open menu"
              width={40}
              height={40}
            />
          </button>
        </div>
      </header>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
