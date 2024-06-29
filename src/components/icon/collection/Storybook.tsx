import { ISVGProps } from "..";

export default function Storybook({ ...props }: ISVGProps) {
  return (
    <svg
      width="81"
      height="100"
      viewBox="0 0 81 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.10319 92.1496L0.00320229 9.59981C-0.0435804 8.2887 0.423745 7.0112 1.30551 6.03976C2.18727 5.06833 3.41369 4.47984 4.72319 4.39982L74.923 0.00983372C75.6089 -0.0339339 76.2965 0.063465 76.9432 0.296008C77.59 0.528551 78.1822 0.891294 78.6831 1.36181C79.1841 1.83232 79.5832 2.4006 79.8558 3.03151C80.1284 3.66242 80.2687 4.34254 80.268 5.02982V94.9746C80.2673 95.6537 80.1292 96.3256 79.8618 96.9498C79.5945 97.5741 79.2035 98.1377 78.7125 98.6068C78.2215 99.0759 77.6405 99.4406 77.0047 99.6792C76.3689 99.9177 75.6914 100.025 75.013 99.9946L7.90318 96.9796C6.64243 96.9228 5.4491 96.3941 4.55996 95.4985C3.67082 94.6029 3.15084 93.4107 3.10319 92.1496Z"
        fill="#FF4785"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.4035 0.354858L59.7436 0.954857L59.2736 12.2898C59.2678 12.4317 59.3024 12.5722 59.3733 12.6951C59.4443 12.8181 59.5486 12.9184 59.6743 12.9843C59.8 13.0503 59.9418 13.0793 60.0833 13.0679C60.2248 13.0564 60.3601 13.0051 60.4736 12.9198L64.8735 9.57984L68.5935 12.5098C68.7058 12.5987 68.8413 12.6536 68.9838 12.668C69.1263 12.6823 69.2699 12.6556 69.3977 12.5909C69.5255 12.5262 69.6321 12.4263 69.7049 12.3029C69.7777 12.1796 69.8137 12.038 69.8085 11.8948L69.4035 0.354858ZM61.8836 38.3048C60.1186 39.6798 46.9386 40.6148 46.9386 38.6598C47.2186 31.1948 43.8786 30.8698 42.0186 30.8698C40.2586 30.8698 37.2886 31.3998 37.2886 35.3998C37.2886 39.4748 41.6286 41.7748 46.7236 44.4748C53.9586 48.3097 62.7235 52.9547 62.7235 64.6347C62.7235 75.8347 53.6236 82.0147 42.0236 82.0147C30.0486 82.0147 19.5837 77.1697 20.7636 60.3747C21.2286 58.4047 36.4536 58.8747 36.4536 60.3747C36.2636 67.3047 37.8436 69.3447 41.8336 69.3447C44.8986 69.3447 46.2886 67.6547 46.2886 64.8147C46.2886 60.5097 41.7686 57.9697 36.5636 55.0497C29.5186 51.0947 21.2286 46.4397 21.2286 35.7548C21.2286 25.0948 28.5586 17.9848 41.6486 17.9848C54.7386 17.9848 61.8836 24.9848 61.8836 38.3048Z"
        fill="white"
      />
    </svg>
  );
}