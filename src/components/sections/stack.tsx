"use client";

import { MouseEvent, useRef } from "react";
import DrivingTitle from "../driving-title";
import styles from "./stack.module.scss";
import gsap from "gsap";
import clsx from "clsx";

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

  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);

  return (
    <section className={clsx("section", styles.section)}>
      <DrivingTitle
        text="my stack"
        slider={slider}
        firstText={firstText}
        secondText={secondText}
        thirdText={thirdText}
      />
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
