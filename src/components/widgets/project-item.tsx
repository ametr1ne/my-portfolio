"use client";

import Image from "next/image";
import styles from "./project-item.module.scss";
import LinkAsButton from "../ui/link-as-button";
import Link from "next/link";
import { TProject } from "@/utils/data";
import Badge from "../ui/badge";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  project: TProject;
};

const ProjectItem = ({ project }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef(null);
  const projectRef = useRef(null);
  const nameRef = useRef<HTMLSpanElement[]>([]);
  nameRef.current = [];
  const badgeRef = useRef(null);
  const descriptionRef = useRef<HTMLSpanElement[]>([]);
  descriptionRef.current = [];
  const stackRef = useRef(null);
  const linkRef = useRef(null);

  const addToName = (el: HTMLSpanElement) => {
    if (el && !nameRef.current.includes(el)) {
      nameRef.current.push(el);
    }
  };
  const addToDesctiption = (el: HTMLSpanElement) => {
    if (el && !descriptionRef.current.includes(el)) {
      descriptionRef.current.push(el);
    }
  };

  const [containerHeight, setContainerHeight] = useState(0);

  useGSAP(() => {
    imageRef.current &&
      setContainerHeight(imageRef.current.getBoundingClientRect().height * 0.9);

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        scrub: true,
        start: "top bottom",
      },
      yPercent: -10,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 70%",
        // once: true,
      },
    });

    tl.addLabel("name")
      .fromTo(
        nameRef.current,
        {
          y: "100%",
        },
        {
          stagger: 0.04,
          y: 0,
        },
      )
      .addLabel("badge")
      .fromTo(
        badgeRef.current,
        {
          y: "100%",
        },
        {
          y: "0%",
        },
      )
      .fromTo(
        descriptionRef.current,
        {
          y: "100%",
        },
        {
          stagger: 0.02,
          y: 0,
        },
        "name",
      )
      .fromTo(
        stackRef.current,
        {
          y: "10px",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
        "badge",
      )
      .fromTo(
        linkRef.current,
        {
          transform: "scale(1.5)",
          opacity: 0,
        },
        {
          transform: "scale(1)",
          opacity: 1,
          ease: "power3.in",
        },
      );
  }, [projectRef.current]);

  return (
    <div className={styles.project} ref={projectRef}>
      <div
        className={styles.imageContainer}
        ref={imageContainerRef}
        style={{ height: containerHeight }}>
        <Image
          src={project.image.path}
          width={project.image.src.width}
          height={project.image.src.height}
          quality={100}
          alt="project-cover"
          ref={imageRef}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>
          {project.name.split(" ").map((word) => (
            <span className={styles.wordMask}>
              <span ref={addToName} className={styles.word}>
                {word}&nbsp;
              </span>
            </span>
          ))}
          <span className={styles.badgeMask}>
            <Badge className={styles.badge} ref={badgeRef}>
              {project.year}
            </Badge>
          </span>
        </h3>
        <p className={styles.description}>
          {project.description.split(" ").map((word) => (
            <span className={styles.wordMask}>
              <span ref={addToDesctiption} className={styles.word}>
                {word}&nbsp;
              </span>
            </span>
          ))}
        </p>
        <div className={styles.tech} ref={stackRef}>
          <p>Technologies: </p>
          <ul className={styles.techList}>
            {project.stack.map((item, index) => (
              <li className={styles.techItem}>
                <Link href={item.link} target="_blank">
                  <span className={styles.wordContainer}>
                    <span className={styles.word}>{item.name}</span>
                    <span className={styles.wordMask}>{item.name}</span>
                  </span>
                  {index < project.stack.length - 1 && ","}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {project.link && (
          <LinkAsButton ref={linkRef} href={project.link}>
            Live
          </LinkAsButton>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
