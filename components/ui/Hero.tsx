import Image from "next/image";
import ContactLinks from "../ContactLinks";
import { ModeToggle } from "../ModeToggle";
import { TextGenerateEffect } from "./textGenerateEffect";

const Hero = () => {
  const words =
    "I am a freelancer fullstack Developer. I build user-friendly, fast, dynamic and responsive software solutions to help your business grow seamlessly";

  return (
    <div className='px-4  min-h-screen w-full dark:bg-gray-950 bg-gray-100  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-950 bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6'>
        <Image
          alt=''
          priority
          width={300}
          height={300}
          src='/dev.webp'
          className='object-cover sm:order-2 sm:w-[330px] sm:h-[330px] md:w-[380px] md:h-[380px]'
        />
        <div className=''>
          <p className='text-center sm:text-left text-gray-500 text-lg'>
            Software Developer
          </p>
          <h1 className='text-center sm:text-left font-bold text-4xl md:text-5xl'>
            I&apos;m Matthew Chukwu
          </h1>
          <TextGenerateEffect words={words} className='' />
          <ContactLinks />
          {/* <p className='text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
            Backgrounds
          </p> */}
        </div>
      </div>

      <div className='absolute top-4 left-4'>
        {" "}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Hero;
