"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MouseEvent } from "react";
import SectionLayout from "../section-layout";
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
    text: "GSAP",
    color: "#0ae448",
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
  const mm = gsap.matchMedia();

  const { contextSafe } = useGSAP();

  const manageMouseEnter = contextSafe(
    (e: MouseEvent<HTMLLIElement>, index: number) => {
      mm.add("(min-width: 768px)", () => {
        gsap.to(e.target, {
          top: "-30px",
          backgroundColor: skills[index].color,
          color: "#1d1d1d",
          duration: 0.3,
        });
      });
    },
  );

  const manageMouseLeave = contextSafe((e: MouseEvent<HTMLLIElement>) => {
    mm.add("(min-width: 768px)", () => {
      gsap.to(e.target, {
        top: "0",
        backgroundColor: "white",
        color: "#424242",
        duration: 0.3,
        delay: 0.1,
      });
    });
  });

  return (
    <SectionLayout title="my stack" id="stack" className={styles.section}>
      <div className={styles.content}>
        <ul className={styles.list}>
          {skills.map((skill, index) => (
            <li
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e);
              }}
              className={styles.listItem}
              key={skill.text}>
              {skill.text}
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
};

export default Stack;
