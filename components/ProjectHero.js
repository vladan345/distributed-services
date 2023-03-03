import Image from "next/image";
import Link from "next/link";
import styles from "../styles/component-css/ProjectHero.module.css";

function ProjectHero({ content }) {
  return (
    <div className={styles.projectHero}>
      <div className={styles.banner}>
        <Image src={content.banner} alt="Rikas project hero image" fill />
      </div>

      <div className="container">
        <div className={styles.colWrap}>
          <div className={styles.col}>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: content.description }}
            />
            <Link href="#" className={styles.cta}>
              <p>Go to website</p>
              <Image
                src="/images/single-project/green-arrow-right-sm.svg"
                width={39}
                height={32}
                alt="arrow icon"
              />
            </Link>
          </div>

          <div className={styles.col}>
            <p>What we&apos;ve done:</p>
            <div className={styles.serviceList}>
              {content.services.map((service) => {
                return (
                  <Link key={service} href="#" className={styles.service}>
                    <p>{service}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;
