"use client";

import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default Providers;
