"use client";

import Carousel from "@/components/Carousel";
import { Hero, About, Skills, Footer } from "@/components/sections";
import { COLORS, ANIMATION } from "@/lib/constants";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@/components/ui/particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="content overflow-auto">
      <main 
        className="z-2 mb-[600px] min-h-screen h-fit md:mb-[100vh] relative"
        style={{ 
          backgroundColor: COLORS.BACKGROUND_DARK,
          color: COLORS.TEXT_LIGHT 
        }}
      >
        <Particles
          particleColors={[COLORS.PARTICLE_WHITE, COLORS.PARTICLE_BLUE]}
          particleCount={ANIMATION.PARTICLE_COUNT}
          particleSpread={ANIMATION.PARTICLE_SPREAD}
          speed={ANIMATION.PARTICLE_SPEED}
          particleBaseSize={ANIMATION.PARTICLE_BASE_SIZE}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation
          className="absolute inset-0 pointer-events-none -z-10"
        />
        
        <div className="container min-h-[94vh] max-w-3xl flex flex-col justify-center xl:max-w-6xl max-sm:pt-12">
          <div className="mx-auto">
            <Hero />
            <About />
            <Skills />
          </div>
        </div>
        
        <section className="py-12 mx-auto md:max-w-4xl md:pt-0">
          <Carousel />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
