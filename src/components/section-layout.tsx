import clsx from "clsx";
import { ReactNode } from "react";
import DrivingTitle from "./driving-title";

const SectionLayout = ({
  children,
  className,
  title,
  id,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
  id?: string;
}) => {
  return (
    <section className={clsx("section", className)} id={id}>
      {title && <DrivingTitle text={title} />}
      {children}
    </section>
  );
};

export default SectionLayout;
