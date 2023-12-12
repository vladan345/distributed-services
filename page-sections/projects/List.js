import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/section-css/projects/List.module.css";
import ProjectCard from "@/components/ProjectCard";
function List({ projects }) {
  return (
    <div className={styles.List}>
      <div className="container">
        <div className={styles.grid}>
          {projects.length != 0 ? (
            projects
              .sort(() => Math.random() - 0.5)
              .map((project, index) => {
                let services = project.services.join(" / ");
                services = services.replace(/-/g, " ");
                return (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    link={project.link}
                    projectImage={project.projectImage}
                    services={project.services}
                  />
                );
              })
          ) : (
            <h1>No projects available for current category</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default List;
