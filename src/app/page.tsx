"use client";
import Carousel from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { onScrollToTop } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Particles = dynamic(() => import("@/components/ui/particles"), {
  ssr: false,
});
const PixelTransition = dynamic(
  () => import("@/components/ui/pixel-transition"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="content overflow-auto">
      <div className="z-2 mb-[600px] h-screen md:mb-[100vh] bg-[#07020D] text-[#F1E9DB] relative">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation
          className="absolute inset-0 pointer-events-none"
        />
        <div className="container min-h-[94vh] max-w-3xl flex flex-col justify-center xl:max-w-6xl max-sm:pt-12 absolute inset-0">
          <div className="mx-auto">
            <header>
              <h1
                className="text-4xl font-extrabold uppercase max-w-xs sm:text-6xl sm:max-w-3xl lg:text-7xl xl:text"
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
              <div className="w-full max-w-[23rem] mt-4 mb-6 mx-auto sm:float-right sm:w-3/6 sm:max-w-[27rem] xl:float-left xl:w-[25rem] xl:pr-16">
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
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                  className="custom-pixel-card border-none"
                />
              </div>
            </header>
            <section
              className="max-w-[27rem] sm:float-left sm:w-[45%] xl:float-left xl:w-[45%] xl:pr-16 xl:max-w-none"
              role="region"
              aria-labelledby="about-me"
            >
              <h2 id="about-me" className="sr-only">
                About Me
              </h2>
              <p className="my-4">
                I'm a software engineer based in Florianópolis. I specialize in
                building exceptional digital experiences using ReactJS, NextJS,
                NodeJS, JavaScript, and TypeScript.
              </p>
              <p className="my-4">
                I am currently a software developer, working on creating digital
                solutions. Throughout my career, I have contributed to impactful
                projects in diverse environments.
              </p>
              <p className="my-4">
                I have a strong interest in creating efficient design systems,
                using code as a powerful design tool, and continuously improving
                user experiences through meticulous attention to detail.
              </p>
              <p className="my-4">
                When I'm not coding, you'll probably find me running through the
                streets, training for the next marathon.
              </p>
            </section>
            <section
              className="sm:float-right sm:w-3/6 sm:text-right xl:float-left xl:w-[12rem] xl:text-left"
              role="region"
              aria-labelledby="skills"
            >
              <h3 id="skills" className="text-2xl font-extrabold my-4">
                Skills
              </h3>
              <ul className="list-none text-nowrap font-semibold">
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Amateur Runner 🏃‍♂️</li>
              </ul>
            </section>
          </div>
        </div>
        <section className="py-12 mx-auto md:max-w-4xl md:pt-0 absolute bottom-1 left-0 right-0">
          <Carousel />
        </section>
      </div>
      <footer
        className="h-[600px] md:h-screen bg-[#F1E9DB] fixed bottom-0 left-0 w-full z-1"
        role="contentinfo"
      >
        <div className="h-full flex items-center justify-center">
          <div className="container">
            <ul
              className="list-none p-0 m-0 text-center md:flex md:justify-center md:items-center md:gap-3"
              role="list"
            >
              <li role="listitem">
                <Button className="text-lg md:text-3xl" asChild variant="link">
                  <a href="https://drive.usercontent.google.com/u/0/uc?id=1E9fXdX3ZcRfNFvdDTqbuJ70Ju5bVH4Mu&export=download">
                    Resume
                  </a>
                </Button>
              </li>
              <li role="listitem">
                <Button className="text-lg md:text-3xl" asChild variant="link">
                  <a target="_blank" href="https://www.linkedin.com/in/eiske/">
                    LinkedIn
                  </a>
                </Button>
              </li>
              <li role="listitem">
                <Button className="text-lg md:text-3xl" asChild variant="link">
                  <a href="mailto:hashimoto.eiske@gmail.com">Email</a>
                </Button>
              </li>
              <li role="listitem">
                <Button className="text-lg md:text-3xl" asChild variant="link">
                  <a target="_blank" href="https://github.com/eiske">
                    GitHub
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 w-full p-10 md:p-20">
          <div className="flex flex-col gap-10">
            <div className="w-full flex justify-center">
              <Button
                onClick={onScrollToTop}
                size="icon"
                variant="ghost"
                className="border-none cursor-pointer hover:bg-transparent hover:scale-150 transition duration-400"
                aria-label="Scroll to top"
              >
                <ArrowUp />
              </Button>
            </div>
            <div className="flex justify-between items-center flex-wrap w-full">
              <div>
                <p className="text-lg md:text-3xl">© Eiske</p>
              </div>
              <div>
                <Button variant="link" asChild className="text-lg md:text-3xl">
                  <a href="mailto:hashimoto.eiske@gmail.com">
                    hashimoto.eiske@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
