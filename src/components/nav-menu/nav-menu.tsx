"use client";

import Link from "next/link";
import styles from "./nav-menu.module.scss";
import { motion } from "framer-motion";
import { menuSlide, slide } from "./menu-anim";

const navItems = [
  {
    title: "About me",
    href: "/",
  },

  {
    title: "My Stack",
    href: "#stack",
  },

  {
    title: "Projects",
    href: "#projects",
  },

  {
    title: "Contact",
    href: "#contact",
  },
];

const NavMenu = ({ close }: { close: () => void }) => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.overlay}
      onClick={() => close()}>
      <nav className={styles.content} onClick={(e) => e.stopPropagation()}>
        <ul className={styles.list}>
          {navItems.map((item, index) => (
            <motion.li
              custom={index}
              variants={slide}
              initial="initial"
              animate="enter"
              exit="exit"
              className={styles.listItem}
              key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default NavMenu;
