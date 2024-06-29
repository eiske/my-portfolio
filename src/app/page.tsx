"use client";
import { Button } from "@/components/ui/button";
import { onScrollToTop } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="content">
      <div className="z-[2] mb-[100vh] bg-[#07020D] text-[#F1E9DB] relative">
        <div className="container min-h-screen max-w-3xl flex flex-col justify-center xl:max-w-6xl max-sm:py-12">
          <div className="mx-auto w-full">
            <h1
              className="
            text-4xl font-extrabold uppercase mb-4 max-w-xs
            sm:text-6xl sm:max-w-3xl
            lg:text-7xl
            xl:text"
            >
              Vinicius Eiske Hashimoto
            </h1>
            <div className="mb-4">
              <small>はしもと えいすけ</small>
              <h2 className="text-xl">橋元 英助</h2>
            </div>
            <div className="">
              <Image
                className="
                object-cover w-full max-w-[27rem] mt-4 mb-6
                sm:float-right sm:w-3/6
                xl:float-left xl:w-[25rem] xl:pr-16"
                alt="Photo of Vinicius Eiske"
                src="/eiske.jpeg"
                width={300}
                height={300}
              />
              <section
                className=" max-w-[27rem]
              sm:float-left sm:w-[45%]
              xl:float-left xl:w-[45%] xl:pr-16 xl:max-w-none"
              >
                <p className="my-4">
                  I'm a passionate front-end developer based in Florianópolis. I
                  specialize in building exceptional digital experiences using
                  ReactJS, NextJS, JavaScript, and TypeScript.
                </p>
                <p className="my-4">
                  Currently, I'm working as a frontend developer at Valtech,
                  where I create responsive components and pages for digital
                  projects. Previously, I contributed to developing innovative
                  solutions at Getmore and Shiftcode.
                </p>
                <p className="my-4">
                  I have a strong interest in creating efficient design systems,
                  using code as a powerful design tool, and continuously
                  improving user experiences through meticulous attention to
                  detail.
                </p>
                <p className="my-4">
                  When I'm not coding, you'll probably find me running through
                  the streets, training for the next marathon.
                </p>
              </section>
              <div
                className="skills
              sm:float-right sm:w-3/6 sm:text-right
              xl:float-left xl:w-[12rem] xl:text-left"
              >
                <h3 className="text-2xl font-extrabold my-4">Skills</h3>
                <ul className="list-none text-nowrap font-semibold">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>Amateur Runner 🏃‍♂️</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#F1E9DB] fixed bottom-0 left-0 w-full z-[1] h-screen">
        <div className="h-full flex items-center justify-center">
          <div className="container">
            <ul className="list-none p-0 m-0 text-center">
              <Button className="text-4xl" asChild variant="link">
                <a href="mailto:hashimoto.eiske@gmail.com">Email</a>
              </Button>
              <Button className="text-4xl" asChild variant="link">
                <a target="_blank" href="https://github.com/eiske">
                  GitHub
                </a>
              </Button>
              <Button className="text-4xl" asChild variant="link">
                <a target="_blank" href="https://www.linkedin.com/in/eiske/">
                  LinkedIn
                </a>
              </Button>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 w-full p-20">
          <div className="flex flex-col gap-10">
            <div className="w-full flex justify-center">
              <Button
                onClick={onScrollToTop}
                size="icon"
                variant="ghost"
                className="border-none cursor-pointer hover:bg-transparent hover:scale-150 transition duration-400"
              >
                <ArrowUp size={36} />
              </Button>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-2xl">© Eiske</p>
              </div>
              <div>
                <Button variant="link" asChild className="text-2xl">
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
