import { ISVGProps } from "..";

export default function Vuejs({ ...props }: ISVGProps) {
  return (
    <svg
      width="100"
      height="87"
      viewBox="0 0 100 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M80 0.000488281H100L50 86.2505L0 0.000488281H38.25L50 20.0005L61.5 0.000488281H80Z"
        fill="#41B883"
      />
      <path
        d="M0 0.000488281L50 86.2505L100 0.000488281H80L50 51.7505L19.75 0.000488281H0Z"
        fill="#41B883"
      />
      <path
        d="M19.75 0.000488281L50 52.0005L80 0.000488281H61.5L50 20.0005L38.25 0.000488281H19.75Z"
        fill="#35495E"
      />
    </svg>
  );
}
