import { forwardRef } from "react";

export const IconMinus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 18 6"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ref, ...props }}
    >
      <path
        style={{
          fill: "inherit",
        }}
        d="M0 5.64V0H17.76V5.64H0Z"
      />
    </svg>
  );
});
