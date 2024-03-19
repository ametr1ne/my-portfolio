"use client";

import clsx from "clsx";
import DrivingTitle from "../driving-title";
import styles from "./projects.module.scss";
import { useRef } from "react";

const Projects = () => {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);

  return (
    <section className={clsx("section", styles.section)}>
      <DrivingTitle
        text="projects"
        slider={slider}
        firstText={firstText}
        secondText={secondText}
        thirdText={thirdText}
      />
      <h4>Soon...</h4>
    </section>
  );
};

export default Projects;
