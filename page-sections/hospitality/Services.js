import Image from "next/image";
import { useRef } from "react";
export default function Services() {
  const services = [
    {
      title: "Web Design & Development",
      list: [
        "Create visually stunning, high-converting, revenue-driving websites tailored to your brand.",
      ],
    },
    {
      title: "Digital Marketing",
      list: [
        "Google Ads: Boost bookings and drive revenue with precision-targeted campaigns.",
        "Meta Ads: Engage your audience on Facebook and Instagram, turning views into conversions.",
        "TikTok Ads: Capture new audiences and increase sales with dynamic TikTok campaigns.",
        "SEO: Improve your search rankings, attract organic traffic, and convert visitors into customers.",
      ],
    },
    {
      title: "Social Media Strategy and Management",
      list: [
        "Build a strong, engaging social presence that drives both conversions and revenue.",
      ],
    },
    {
      title: "Branding",
      list: [
        "Develop a compelling brand identity that attracts your target audience and drives sales.",
      ],
    },
    {
      title: "Customised Hospitality Solutions",
      list: [
        "PowerBI and Reporting: Leverage real-time data insights to boost decision-making and revenue.",
        "Customised App Development: Enhance guest experience and drive repeat bookings with tailored apps.",
        "Marketing Automations: Streamline and automate your marketing to consistently convert leads into loyal customers.",
        "Consultancy: Receive expert strategies to refine your business approach and maximize revenue potential.",
      ],
    },
    {
      title: "Lorem ipsum",
      list: ["Copy missing"],
    },
  ];
  return (
    <section className="lg:grid-rows-auto grid grid-cols-3 overflow-hidden 1xl:grid-cols-2 1xl:grid-rows-3 lg:grid-cols-1">
      {services.map((service, index) => (
        <FlipCard key={index} service={service} />
      ))}
    </section>
  );
}

const FlipCard = ({ service }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <div
      className="card relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src="/images/hospitality/hero.mp4"
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      ></video>
      <div className="card__content relative h-full transition-transform duration-1000">
        {/* Front Side */}
        <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center p-[10px]">
          <div className="relative z-[1] flex items-center justify-center">
            <h2 className="hosp-h2 inline rounded-full bg-[#273F32b3] px-[40px] py-[13px] text-center text-white">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Back Side */}
        <div className="card__back h-full px-[65px] py-[40px]">
          <div className="absolute left-0 top-0 h-full w-full bg-[#273F32be]"></div>
          <div className="relative z-[1] text-white">
            <h2 className="hosp-h2 mb-[35px]">{service.title}</h2>
            <ul className="flex list-disc flex-col gap-[20px] pl-[20px]">
              {service.list.map((item, index) => (
                <li key={index} className="hosp-h3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
