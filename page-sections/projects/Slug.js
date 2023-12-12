import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/section-css/projects/Slug.module.css";

function Slug() {
  const services = [
    {
      id: "",
      name: "All Services",
      icon: "/images/all-services.svg",
      description:
        "We are what we create. Take a look at our latest projects that span various industries - this is our very own hall of fame.",
    },
    {
      id: "web-design",
      name: "Web Design",
      icon: "/images/design.svg",
      description:
        "Brand identity meets optimized user experience that generates organic (re)visits.",
    },
    {
      id: "web-development",
      name: "Web Development",
      icon: "/images/dev.svg",
      description:
        "From a single line of code to a fully-functioning, traffic-filled website.",
    },
    {
      id: "digital-marketing",
      name: "Digital Marketing",
      icon: "/images/marketing.svg",
      description:
        "Grow your online presence and connect with your audience in meaningful ways.",
    },
    {
      id: "branding",
      name: "Branding",
      icon: "/images/branding.svg",
      description:
        "Unparalleled talent without the inconvenience of hiring and managing a team.",
    },
    // {
    //   id: "outsourcing",
    //   name: "Outsourcing",
    //   icon: "/images/outsourcing.svg",
    // description:
    // "Something about outsourcing",
    // },
  ];

  const router = useRouter();
  let path = router.asPath.split("/");
  let tempPath = [...path];
  let query = tempPath.pop();

  let id = services.findIndex((service) => service.id == query);

  // path = path.filter((string) => string != "");
  return (
    <div className={styles.Slug}>
      <div className="container">
        <div className={styles.serviceWrap}>
          {services &&
            services.map((service, index) => {
              return (
                <Link
                  key={index}
                  href={`/projects/${service.id}`}
                  className={`${styles.service} ${
                    query == service.id ? styles.active : null
                  } ${path.length == 2 && index == 0 ? styles.active : null}`}
                >
                  <Image
                    src={service.icon}
                    alt={`${service.name} icon`}
                    width={32}
                    height={32}
                  />
                  {service.name}
                </Link>
              );
            })}
        </div>
        <p
          style={{
            fontFamily: "Flexa",
            lineHeight: "1.2",
            fontWeight: "500",
            maxWidth: "1200px",
            margin: "40px auto 0 auto",
            minHeight: "172.8px",
          }}
        >
          {id == -1 ? services[0].description : services[id].description}
        </p>
      </div>
    </div>
  );
}

export default Slug;
