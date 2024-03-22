"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import SectionLayout from "../section-layout";
import styles from "./about.module.scss";

const description = `Hey, I'm Nikon, front-end developer. I adore beautiful designs and
coding. When I was little, I went to a drawing class, but then I
gave up. But the feeling of beauty remains and I am ready to help
you show your ideas to the whole world`;

const About = () => {
  const contentRef = useRef(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef(null);
  const wordsRefArray = useRef<HTMLSpanElement[]>([]);
  wordsRefArray.current = [];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: contentRef.current,
        scrub: true,
      },
    });

    mm.add("(max-width: 767px)", () => {
      gsap.to(imageContainerRef.current, {
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
        },
        clipPath: "circle(100% at 63% 36%)",
      });
    });
    mm.add("(min-width: 768px)", () => {
      gsap.to(imageContainerRef.current, {
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
        },
        clipPath: "circle(100% at 63% 36%)",
      });
    });

    let textAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 70%",
        once: true,
      },
    });

    textAnimation.to(
      wordsRefArray.current,
      {
        translateY: "0%",
        stagger: {
          each: 0.01,
        },
      },
      "outSplash",
    );
  });

  const addToWordsArray = (element: HTMLSpanElement) => {
    if (element && !wordsRefArray.current.includes(element)) {
      wordsRefArray.current.push(element);
    }
  };

  return (
    <SectionLayout title="about me" id="about" className={styles.section}>
      <div className={styles.content}>
        <div ref={imageContainerRef} className={styles.imgContainer}>
          <Image
            ref={imageRef}
            className={styles.image}
            src={"/me.jpeg"}
            width={969}
            height={835}
            alt="photo"
          />
        </div>
        <div className={styles.text}>
          <div className={styles.body}>
            {description.split(" ").map((item, index) => (
              <span key={index} className={styles.mask}>
                <span className={styles.word} ref={addToWordsArray}>
                  {item}&nbsp;
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
