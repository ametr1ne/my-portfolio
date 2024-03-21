"use client";

import { useEffect, useRef } from "react";
import Logo from "./logo";
import styles from "./splash-screen.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SplashScreen = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      tl.add("logoMoving")
        .to(logoRef.current, {
          top: "85px",
          left: "85px",
          duration: 1,
        })
        .add("outSplash")
        .to(containerRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
        });
    });

    mm.add("(max-width: 767px)", () => {
      tl.add("logoMoving")
        .to(logoRef.current, {
          top: "40px",
          left: "40px",
          duration: 1,
        })
        .add("outSplash")
        .to(containerRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
        });
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <Logo ref={logoRef} className={styles.logo} />
    </div>
  );
};

export default SplashScreen;
