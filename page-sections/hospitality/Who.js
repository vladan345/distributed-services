import Link from "next/link";
import Image from "next/image";

export default function Who() {
  return (
    <section
      id="about"
      className="flex flex-col items-center bg-accent px-[20px] py-[80px]"
    >
      <h2 className="hosp-h1">Who are we?</h2>
      <p className="hosp-p my-[60px] max-w-[700px] text-center">
        Integer vel amet amet non sit quisque. Elementum ut scelerisque purus
        sed. Etiam viverra condimentum sed semper neque augue egestas. Elementum
        vulputate integer faucibus sit ullamcorper lobortis vestibulum quam
        quis. Ut viverra vitae tortor semper massa urna nulla. Leo ut laoreet
        pulvinar aliquam eget donec facilisis imperdiet. Ultrices amet enim
        lacus tortor adipiscing scelerisque sed. Quam iaculis sollicitudin odio
        aliquet duis viverra metus at. Tellus purus mattis at mollis praesent.
        Curabitur commodo arcu.
      </p>
      <div className="flex gap-[20px] md:flex-col md:items-center">
        <Link
          href="/projects"
          className="hosp-h3 flex w-[220px] items-center justify-between rounded-full bg-white p-[20px] !text-black transition duration-300 hover:invert"
        >
          View Projects{" "}
          <Image
            src="/images/hospitality/carret-right.svg"
            alt="Carret icon"
            width={5}
            height={11}
          />
        </Link>
        <Link
          target="_blank"
          href="https://calendly.com/distributedservices"
          className="hosp-h3 flex w-[220px] items-center justify-between rounded-full p-[20px] !text-black underline md:justify-center"
        >
          Book a meeting
        </Link>
      </div>
    </section>
  );
}
