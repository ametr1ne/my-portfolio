"use client";

import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default Providers;
