"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import styles from "./driving-title.module.scss";

type Props = {
  text: string;
};

const DrivingTitle = ({ text }: Props) => {
  let xPercent = 0;

  const slider = useRef<HTMLDivElement>(null);
  const firstText = useRef<HTMLHeadingElement>(null);
  const secondText = useRef<HTMLHeadingElement>(null);
  const thirdText = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current?.getBoundingClientRect().width,
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.1;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <h2 ref={firstText}>{text}</h2>
          <h2 ref={secondText}>{text}</h2>
          <h2 ref={thirdText}>{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default DrivingTitle;
