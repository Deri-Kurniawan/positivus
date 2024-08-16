import { forwardRef } from "react";

export const IconFacebook = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="#000"
        viewBox="0 0 22 22"
        {...{ ref, ...props }}
      >
        <g clipPath="url(#clip0_1181_231)">
          <path
            fill="inherit"
            d="M5.798 11.717H8.21v9.928a.355.355 0 00.355.355h4.088a.355.355 0 00.355-.355v-9.881h2.773a.355.355 0 00.352-.314l.421-3.655a.354.354 0 00-.352-.396h-3.194V5.11c0-.692.372-1.042 1.106-1.042h2.088a.355.355 0 00.355-.355V.357a.355.355 0 00-.355-.354h-2.878A2.82 2.82 0 0013.193 0c-.5 0-2.235.098-3.606 1.36C8.068 2.756 8.28 4.43 8.33 4.72V7.4H5.798a.355.355 0 00-.355.354v3.608a.355.355 0 00.355.355z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_1181_231">
            <path fill="inherit" d="M0 0H22V22H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
  }
);
