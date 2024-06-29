import { ISVGProps } from "..";

export default function Tailwind({ ...props }: ISVGProps) {
  return (
    <svg
      width="100"
      height="60"
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M50.0002 0.000488281C36.6665 0.000488281 28.3334 6.66548 24.9996 19.9942C30.0002 13.3292 35.8337 10.8308 42.4999 12.4964C46.3039 13.4468 49.0224 16.2065 52.0323 19.2602C56.9341 24.2345 62.6075 29.9917 75.0009 29.9917C88.3334 29.9917 96.6677 23.3267 100 9.99672C95.0009 16.6617 89.1674 19.1614 82.4999 17.4958C78.6973 16.5454 75.9787 13.7856 72.9689 10.732C68.067 5.75764 62.3924 0.000488281 50.0002 0.000488281ZM24.9996 29.9917C11.6671 29.9917 3.33274 36.6567 0.000244141 49.9866C4.99962 43.3217 10.8331 40.822 17.5006 42.4888C21.3032 43.4405 24.0218 46.199 27.0316 49.2514C31.9335 54.2257 37.6081 59.9841 50.0002 59.9841C63.334 59.9841 71.6671 53.3191 75.0009 39.9892C70.0002 46.6542 64.1668 49.1538 57.5006 47.487C53.6966 46.5379 50.9781 43.7768 47.9682 40.7244C43.0664 35.7501 37.393 29.9917 24.9996 29.9917Z"
        fill="#06B6D4"
      />
    </svg>
  );
}
