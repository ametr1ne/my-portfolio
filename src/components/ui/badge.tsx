import { ReactNode, forwardRef } from "react";
import styles from "./badge.module.scss";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

const Badge = forwardRef<HTMLSpanElement, Props>(
  ({ children, className }, ref) => {
    return (
      <span ref={ref} className={clsx(styles.badge, className)}>
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
