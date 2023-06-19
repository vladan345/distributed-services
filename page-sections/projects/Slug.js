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
    },
    {
      id: "web-design",
      name: "Web Design",
      icon: "/images/design.svg",
    },
    {
      id: "web-development",
      name: "Web Development",
      icon: "/images/dev.svg",
    },
    {
      id: "digital-marketing",
      name: "Digital Marketing",
      icon: "/images/marketing.svg",
    },
    // {
    //   id: "branding",
    //   name: "Branding & Visual Identity",
    //   icon: "/images/branding.svg",
    // },
    // {
    //   id: "outsourcing",
    //   name: "Outsourcing",
    //   icon: "/images/outsourcing.svg",
    // },
  ];
  const router = useRouter();
  let path = router.asPath.split("/");
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
                    path[path.length - 1] == service.id ? styles.active : null
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
      </div>
    </div>
  );
}

export default Slug;
