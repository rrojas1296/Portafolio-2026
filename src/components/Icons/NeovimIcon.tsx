import { IconProps } from "@/types/IconProps";

const NeovimIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 128 128"
      {...props}
    >
      <defs>
        <linearGradient
          id="SVGtazoZdFN"
          x1=".5"
          x2=".5"
          y1="0"
          y2="1"
          gradientTransform="matrix(32.95703 0 0 154.72266 .426 .426)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#16b0ed" stopOpacity="0.8" />
          <stop offset="1" stopColor="#0f59b2" stopOpacity="0.835" />
        </linearGradient>
        <linearGradient
          id="SVGgvWjJcBl"
          x1=".5"
          x2=".5"
          y1="0"
          y2="1"
          gradientTransform="matrix(-33.59375 0 0 154.72266 128 .426)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7db643" />
          <stop offset="1" stopColor="#367533" />
        </linearGradient>
        <linearGradient
          id="SVGmq3xzdBn"
          x1=".5"
          x2=".5"
          y1="0"
          y2="1"
          gradientTransform="matrix(109.71484 0 0 154.72656 9.355 .637)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#88c649" stopOpacity="0.8" />
          <stop offset="1" stopColor="#439240" stopOpacity="0.839" />
        </linearGradient>
      </defs>
      <g fillRule="evenodd">
        <path
          fill="url(#SVGtazoZdFN)"
          d="M.426 33.703L33.383.426v154.722L.426 122.258Zm0 0"
          transform="translate(10.95 -.352)scale(.82614)"
        />
        <path
          fill="url(#SVGgvWjJcBl)"
          d="M127.773 34L94.406.426l.676 154.722L128 122.254Zm0 0"
          transform="translate(10.95 -.352)scale(.82614)"
        />
        <path
          fill="url(#SVGmq3xzdBn)"
          d="m33.379.637l85.691 130.75l-23.98 23.976L9.355 24.903Zm0 0"
          transform="translate(10.95 -.352)scale(.82614)"
        />
        <path
          fillOpacity="0.129"
          d="m38.53 50.01l-.04 4.244l-21.743-32.18l2.014-2.06zm0 0"
        />
      </g>
    </svg>
  );
};

export default NeovimIcon;
