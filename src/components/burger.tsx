"use client";

import clsx from "clsx";
import styles from "./burger.module.scss";

const Burger = ({
  onClick,
  className,
  isActive,
}: {
  onClick: () => void;
  className?: string;
  isActive: boolean;
}) => {
  return (
    <div
      className={clsx(styles.burger, isActive && styles.active, className)}
      onClick={onClick}>
      <span className={styles.line} />
      <span className={styles.line} />
    </div>
  );
};

export default Burger;
