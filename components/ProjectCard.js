import styles from "@/styles/component-css/ProjectCard.module.css";
import Link from "next/link";
import Image from "next/image";

function ProjectCard({ link, title, projectImage, services }) {
  return (
    <Link className={styles.card} href={link}>
      <div className={styles.overlay}></div>
      <div>
        <h4>{title}</h4>
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
      <Image src={projectImage} alt="Project background" fill sizes="100vw" />
    </Link>
  );
}

export default ProjectCard;
