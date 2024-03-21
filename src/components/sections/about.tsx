"use client";

import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import DrivingTitle from "../driving-title";
import styles from "./about.module.scss";

const description = `Hey, I'm Nikon, front-end developer. I adore beautiful designs and
coding. When I was little, I went to a drawing class, but then I
gave up. But the feeling of beauty remains and I am ready to help
you show your ideas to the whole world`;

const About = () => {
  const imageRef = useRef(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const wordsRefArray = useRef<HTMLSpanElement[]>([]);
  wordsRefArray.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 40%",
        scrub: true,
      },
      clipPath: "circle(100% at 63% 38%)",
    });

    let textAnimation = gsap.timeline();

    textAnimation

      .to([nameRef.current, lastNameRef.current], {
        transform: "translate(0%, 0%)",
        stagger: {
          each: 0.03,
        },
      })
      .to(wordsRefArray.current, {
        translateY: "0%",
        stagger: {
          each: 0.01,
        },
      });
  }, []);

  const addToWordsArray = (element: HTMLSpanElement) => {
    if (element && !wordsRefArray.current.includes(element)) {
      wordsRefArray.current.push(element);
    }
  };

  return (
    <section className={clsx("section", styles.section)}>
      <DrivingTitle text="about me" />
      <div className={styles.content}>
        <div ref={imageRef} className={styles.imgContainer}>
          <Image
            className={styles.image}
            src={"/me.png"}
            width={969}
            height={835}
            alt="photo"
          />
        </div>
        <div className={styles.text}>
          <h3>
            <span className={styles.mask}>
              <span ref={nameRef}>Nikon</span>
            </span>
            <br />
            <span className={styles.mask}>
              <span ref={lastNameRef}>Sharipov</span>
            </span>
          </h3>
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
    </section>
  );
};

export default About;
