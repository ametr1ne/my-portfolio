"use client";

import DrivingTitle from "../driving-title";
import Image from "next/image";
import styles from "./about.module.scss";
import clsx from "clsx";
import { useRef } from "react";

const About = () => {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);

  return (
    <section className={clsx("section", styles.section)}>
      <DrivingTitle
        text="about me"
        slider={slider}
        firstText={firstText}
        secondText={secondText}
        thirdText={thirdText}
      />
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src={"/me.png"}
            width={969}
            height={835}
            alt="photo"
          />
        </div>
        <div className={styles.text}>
          <h3>Nikon Sharipov</h3>
          <p>
            Hey, I'm Nikon, front-end developer. I adore beautiful designs and
            coding. When I was little, I went to a drawing class, but then I
            gave up. But the feeling of beauty remains and I am ready to help
            you show your ideas to the whole world
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
