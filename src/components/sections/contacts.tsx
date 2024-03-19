"use client";

import clsx from "clsx";
import DrivingTitle from "../driving-title";
import styles from "./contacts.module.scss";
import { useRef } from "react";

const socials = [
  {
    name: "Telegram",
    href: "https://t.me/ametr1ne",
  },
  {
    name: "Email",
    href: "mailto:ametr1ne.dev@gmail.com",
  },
];

const Contacts = () => {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);

  return (
    <section className={clsx("section")}>
      <DrivingTitle
        text="contacts"
        slider={slider}
        firstText={firstText}
        secondText={secondText}
        thirdText={thirdText}
      />
      <ul className={styles.list}>
        {socials.map((item) => (
          <li className={styles.listItem} key={item.name}>
            <a href={item.href} target="_blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
