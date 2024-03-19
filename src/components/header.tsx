"use client";

import clsx from "clsx";
import { useState } from "react";
import Burger from "./burger";
import styles from "./header.module.scss";
import Logo from "./logo";
import NavMenu from "./nav-menu/nav-menu";

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
      <NavMenu close={() => setIsActive(false)} isActive={isActive} />
    </>
  );
};

export default Header;
