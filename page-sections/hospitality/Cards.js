import Image from "next/image";

export default function Cards() {
  return (
    <section className="py-[140px]">
      <h2 className="hosp-h1 mx-auto mb-[80px] max-w-[1120px] text-center">
        Not just another marketing agency-we're the powerhouse behind your
        brand!
      </h2>
      <div className="container grid grid-cols-3 gap-[40px]">
        <div className="flex flex-col items-center gap-[40px] bg-[#FFCDB766] p-[40px]">
          <Image
            src="/images/hospitality/1.svg"
            alt="Icon 1"
            width={80}
            height={80}
          />
          <p className="hosp-h3 text-center">
            You can focus on your core business while we're leading customers to
            come your way!
          </p>
        </div>
        <div className="flex flex-col items-center gap-[40px] bg-[#FFCDB766] p-[40px]">
          <Image
            src="/images/hospitality/2.svg"
            alt="Icon 2"
            width={80}
            height={80}
          />
          <p className="hosp-h3 text-center">
            We go beyond traditional marketing, fully integrating with your team
            to ensure your restaurant shines, so you can dedicate your energy to
            crafting amazing culinary moments.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[40px] bg-[#FFCDB766] p-[40px]">
          <Image
            src="/images/hospitality/3.svg"
            alt="Icon 3"
            width={80}
            height={80}
          />
          <p className="hosp-h3 text-center">
            We elevate your marketing approach by working closely with your
            team, enabling your restaurant business to thrive while you channel
            your energy into creating remarkable meals.
          </p>
        </div>
      </div>
    </section>
  );
}
