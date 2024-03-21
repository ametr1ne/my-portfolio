"use client";

import clsx from "clsx";
import gsap from "gsap";
import { MouseEvent, useRef } from "react";
import DrivingTitle from "../driving-title";
import styles from "./stack.module.scss";

const skills = [
  {
    text: "Next JS",
    color: "#DCF018",
  },
  {
    text: "React JS",
    color: "rgb(8 126 164)",
  },
  {
    text: "Framer Motion",
    color: "hsl(335.93deg 100% 67.25%)",
  },
  {
    text: "Redux Toolkit",
    color: "#8C0CF0",
  },
  {
    text: "React Query",
    color: "#ef4444",
  },
];

const Stack = () => {
  const manageMouseEnter = (e: MouseEvent<HTMLLIElement>, index: number) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: skills[index].color,
      color: "#1d1d1d",
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e: MouseEvent<HTMLLIElement>, index: number) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      color: "#424242",
      duration: 0.3,
      delay: 0.1,
    });
  };
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className={clsx("section", styles.section)}
      id="stack">
      <DrivingTitle text="my stack" />
      <div className={styles.content}>
        <ul className={styles.list}>
          {skills.map((skill, index) => (
            <li
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              className={styles.listItem}
              key={skill.text}>
              {skill.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stack;
