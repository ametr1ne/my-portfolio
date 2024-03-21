"use client";

import SectionLayout from "../section-layout";
import styles from "./contacts.module.scss";

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

  return (
    <SectionLayout title="contacts" id="contacts" className={styles.section}>
      <ul className={styles.list}>
        {socials.map((item) => (
          <li className={styles.listItem} key={item.name}>
            <a href={item.href} target="_blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};

export default Contacts;
