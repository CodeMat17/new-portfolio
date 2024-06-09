"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ContactLinks from "../ContactLinks";
import { ModeToggle } from "../ModeToggle";
import Statistics from "../Statistics";
import { FlipWords } from "./flipWords";
import { TextGenerateEffect } from "./textGenerateEffect";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  const text = ["user-friendly", "fast", "dynamic", "responsive"];

  const words = `A fullstack Mobile-Web Specialist - MWS.`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='px-4 py-8 min-h-screen w-full dark:bg-gray-950 bg-gray-50  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-950 bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6'>
        <div className='sm:order-2'>
          <p className='text-center sm:text-left text-gray-500 text-lg sm:hidden'>
            Software Developer
          </p>
          <Image
            alt=''
            priority
            width={300}
            height={300}
            src='/dev-mod.webp'
            className='object-cover sm:w-[330px] sm:h-[330px] lg:w-[380px] lg:h-[380px]'
          />
        </div>

        <div className='sm:pl-4 w-full sm:max-w-[340px] md:max-w-[450px] lg:max-w-[550px]'>
          <p className='text-center sm:text-left text-gray-500 text-lg hidden sm:block'>
            Software Developer
          </p>
          <h1 className='text-center sm:text-left font-bold text-4xl md:text-5xl tracking-widest'>
            I&apos;m
          </h1>
          <h1 className='text-center sm:text-left font-bold text-4xl md:text-5xl tracking-widest'>
            Matthew Chukwu
          </h1>
          {/* <TextGenerateEffect words={words} /> */}

          <div className='dark:text-white text-gray-400 text-xl leading-snug tracking-wide text-center sm:text-left'>
            <TextGenerateEffect words={words} />
            {visible && (
              <div className='transition-all transform duration-500'>
                I build{""}
                <FlipWords words={text} className='' />
                {""}software solutions to help your business grow seamlessly.
              </div>
            )}
          </div>

          <ContactLinks />
        </div>
      </div>

      <div className='absolute top-4 left-4'>
        {" "}
        <ModeToggle />
      </div>
      <Statistics />
    </div>
  );
};

export default Hero;
