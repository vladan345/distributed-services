import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-[999] h-[90px] w-full bg-white py-[20px]">
      <div className="hosp-container flex items-center justify-between">
        <Image
          src="/images/hospitality/logo.svg"
          alt="DS Hospitality logo"
          width={311}
          height={51}
        />

        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex gap-[16px]">
            <li>
              <a
                className="hosp-h4 rounded-full bg-light px-[28px] py-[16px]"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="hosp-h4 rounded-full bg-light px-[28px] py-[16px]"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hosp-h4 rounded-full bg-light px-[28px] py-[16px]"
                href="#"
              >
                Work
              </a>
            </li>
            <li>
              <a
                className="hosp-h4 rounded-full bg-light px-[28px] py-[16px]"
                href="#"
              >
                Clients
              </a>
            </li>
          </ul>
        </nav>

        <button className="hosp-h4 rounded-full bg-accent px-[26px] py-[16px]">
          Book a meeting
        </button>
      </div>
    </header>
  );
}
