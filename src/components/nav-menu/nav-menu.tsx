"use client";

import Link from "next/link";
import styles from "./nav-menu.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide, slide } from "./menu-anim";
import clsx from "clsx";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

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

const NavMenu = ({
  close,
  isActive,
}: {
  close: () => void;
  isActive: boolean;
}) => {
  const lenis = useLenis();

  return (
    <div
      className={clsx(styles.overlay, isActive && styles.active)}
      onClick={() => close()}>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.nav
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.content}
            onClick={(e) => e.stopPropagation()}>
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
                  <Link
                    onClick={() => {
                      lenis?.scrollTo(item.href === "/" ? 0 : `${item.href}`);
                      close();
                    }}
                    href={item.href}>
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
