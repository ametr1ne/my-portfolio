import ProjectItem from "@/components/widgets/project-item";
import { projects } from "@/utils/data";
import SectionLayout from "../section-layout";
import styles from "./projects.module.scss";

const Projects = () => {
  return (
    <SectionLayout title="projects" id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          {projects.map((project) => (
            <ProjectItem project={project} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Projects;
