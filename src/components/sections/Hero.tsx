import dynamic from "next/dynamic";
import Image from "next/image";
import { ANIMATION, COLORS } from "@/lib/constants";

const PixelTransition = dynamic(
  () => import("@/components/ui/pixel-transition"),
  { ssr: false }
);

export default function Hero() {
  return (
    <header>
      <h1
        className="text-4xl font-extrabold uppercase max-w-xs sm:text-6xl sm:max-w-3xl lg:text-7xl xl:text-8xl"
        role="heading"
      >
        Vinicius Eiske Hashimoto
      </h1>
      <div className="mb-4">
        <small aria-label="Japanese pronunciation">
          はしもと えいすけ
        </small>
        <h2 className="text-2xl" role="heading">
          橋元 英助
        </h2>
      </div>
      <div className="max-w-[23rem] mt-4 mb-6 mx-auto sm:float-right sm:w-3/6 xl:float-left xl:w-[25rem] xl:pr-16">
        <PixelTransition
          firstContent={
            <div className="relative">
              <p className="opacity-30 text-amber-100 absolute left-2 top-2">
                Look closely 👀
              </p>
              <Image
                className="object-cover"
                alt="Photo of Vinicius Eiske"
                src="/eiske.jpeg"
                width={300}
                height={300}
                priority
              />
            </div>
          }
          secondContent={
            <Image
              className="object-cover"
              alt="Photo of my cat Tama"
              src="/tama.jpg"
              width={300}
              height={300}
              priority
            />
          }
          gridSize={ANIMATION.PIXEL_GRID_SIZE}
          pixelColor={COLORS.PARTICLE_WHITE}
          animationStepDuration={ANIMATION.PIXEL_ANIMATION_DURATION}
          className="custom-pixel-card border-none"
        />
      </div>
    </header>
  );
} 