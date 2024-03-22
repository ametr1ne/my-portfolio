"use client";

import Link from "next/link";
import { ReactNode, forwardRef } from "react";
import styles from "./link-as-button.module.scss";

type Props = {
  href: string;
  children: ReactNode;
};

const LinkAsButton = forwardRef<HTMLAnchorElement, Props>(
  ({ href, children }, ref) => {
    return (
      <Link href={href} ref={ref} target="_blank" className={styles.button}>
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </Link>
    );
  },
);

LinkAsButton.displayName = "LinkAsButton";

export default LinkAsButton;
