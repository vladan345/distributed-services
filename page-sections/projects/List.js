import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/section-css/projects/List.module.css";

function List({ projects }) {
  return (
    <div className={styles.List}>
      <div className="container">
        <div className={styles.grid}>
          {projects &&
            projects.map((project, index) => {
              let services = project.services.join(" / ");
              services = services.replace(/-/g, " ");
              return (
                <Link key={index} className={styles.card} href={project.link}>
                  <div>
                    <h4>{project.title}</h4>
                    <p className={styles.services}>{services}</p>
                  </div>
                  <span className={styles.cardButton} href="#">
                    View Project
                    <Image
                      src="/arrow-black-right.svg"
                      width={29}
                      height={35}
                      alt="arrow down white"
                    />
                  </span>
                  <Image
                    src={project.projectImage}
                    alt="Project background"
                    fill
                    sizes="100vw"
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default List;
