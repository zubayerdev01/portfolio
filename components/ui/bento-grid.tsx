"use client";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";

import { TechTag } from "@/components/TechTage";
import MagicButton from "@/components/ui/MagicButton";
import animationData from "@/data/confetti.json";
import Lottie from "lottie-react";
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["MongoDB", "Express", "ReactJs"];
  const rightLists = ["NodeJs", "Nextjs", "TypeScript"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "zubayer.org@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Background Image */}

      <div
        className={`${
          id === 6 && "flex justify-center lg:justify-center"
        } h-full`}
      >
        <div className="absolute inset-0 ">
          {img && (
            <Image
              src={img}
              alt={img}
              width={220}
              height={220}
              className={cn(
                imgClassName,
                "object-cover object-center h-auto w-auto lg:w-full lg:h-full"
              )}
              priority
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? "w-full opacity-80" : ""
          } h-[200px]`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt="Overlay pattern"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-30"
              priority
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <TechTag key={i}>{item}</TechTag>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <TechTag key={i}>{item}</TechTag>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                handleClick={handleCopy}
                title={copied ? "Email Copied!" : "Copy Email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
