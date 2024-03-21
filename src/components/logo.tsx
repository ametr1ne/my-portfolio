import { forwardRef } from "react";

const Logo = forwardRef<SVGSVGElement, { className?: string }>(
  ({ className }, ref) => {
    return (
      <svg
        ref={ref}
        width="73"
        height="73"
        viewBox="0 0 73 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <circle cx="36.5" cy="36.5" r="36.5" fill="black" />
        <circle cx="26.8452" cy="24.0194" r="9.41935" fill="white" />
      </svg>
    );
  },
);

Logo.displayName = "Logo";

export default Logo;
