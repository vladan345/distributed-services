import Script from "next/script";
import React from "react";

export default function Booking() {
  return (
    <section className="bg-light py-[80px]">
      <div className="container flex items-center justify-between gap-[40px] lg:flex-col">
        <div className="flex max-w-[450px] flex-col gap-[40px]">
          <h2 className="hosp-h2">We'd like to hear from you </h2>
          <p className="hosp-p">
            Ready to elevate your business? Whether you need top-tier
            developers, standout digital advertising, or a fresh brand identity,
            we're here to help.
          </p>
          <p className="hosp-p !font-bold">
            Contact us today to discuss how we can drive your success.
          </p>
        </div>

        <div
          className="calendly-inline-widget h-[400px] min-w-[700px] md:w-full md:min-w-0"
          data-url="https://calendly.com/distributedservices/30min"
        ></div>
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></Script>
      </div>
    </section>
  );
}
