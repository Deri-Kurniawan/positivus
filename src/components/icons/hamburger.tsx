import { forwardRef } from "react";

export const IconHamburger = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <svg
        width="26"
        height="19"
        viewBox="0 0 26 19"
        fill="none"
        stroke="#000"
        xmlns="http://www.w3.org/2000/svg"
        {...{ ref, ...props }}
      >
        <path
          d="M1 1.80664H25"
          stroke="inherit"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 9.80664H25"
          stroke="inherit"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 17.8066H25"
          stroke="inherit"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);
