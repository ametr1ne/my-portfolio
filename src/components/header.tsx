"use client";

import { useState } from "react";
import Burger from "./burger";
import Logo from "./logo";
import NavMenu from "./nav-menu/nav-menu";
import { AnimatePresence } from "framer-motion";
import styles from "./header.module.scss";
import clsx from "clsx";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Logo className={styles.logo} />
      <Burger
        className={clsx(styles.burger)}
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />
      <AnimatePresence mode="wait">
        {isActive && <NavMenu close={() => setIsActive(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
