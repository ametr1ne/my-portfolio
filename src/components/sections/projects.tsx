"use client";

import clsx from "clsx";
import DrivingTitle from "../driving-title";
import styles from "./projects.module.scss";
import { useRef } from "react";

const Projects = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className={clsx("section", styles.section)}
      id="projects">
      <DrivingTitle text="projects" />
      <h4>Soon...</h4>
    </section>
  );
};

export default Projects;
