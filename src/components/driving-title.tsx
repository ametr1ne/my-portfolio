"use client";

import { RefObject, useEffect, useRef } from "react";
import styles from "./driving-title.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  text: string;
  firstText: RefObject<HTMLHeadingElement>;
  secondText: RefObject<HTMLHeadingElement>;
  thirdText: RefObject<HTMLHeadingElement>;
  slider: RefObject<HTMLDivElement>;
};

const DrivingTitle = ({
  text,
  firstText,
  secondText,
  thirdText,
  slider,
}: Props) => {
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },

      x: "-500px",
    });

    gsap.set(secondText.current, {
      // @ts-ignore
      left: secondText.current.getBoundingClientRect().width,
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;
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
