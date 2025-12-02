import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-dvh"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div>
        <GridBackgroundDemo />
      </div>
      <div className="w-full max-w-7xl mx-auto mb-45 py-10">
        <div className="flex justify-center mb-10 absolute top-10 left-0 w-full z-10">
          <PixelatedCanvas
            src="/my_img.png"
            width={400}
            height={400}
            cellSize={4}
            dotScale={0.9}
            shape="square"
            backgroundColor="#000000"
            dropoutStrength={0.1}
            interactive
            distortionStrength={0.1}
            distortionRadius={200}
            distortionMode="repel"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={1}
            sampleAverage
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
      <div>
        <BackgroundBeamsWithCollision />
        
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js & Tailwind CSS
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Zubayer, a passionate web developer specializing in
            crafting dynamic and responsive web applications using Next.js and
            Tailwind CSS. Welcome to my portfolio!
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
