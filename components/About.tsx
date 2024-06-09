import React from "react";
import { Meteors } from "@/components/ui/Meteors";

export function About() {
  return (
    <div className='py-12 px-4 flex justify-center items-center'>
      <div className=' w-full relative max-w-2xl'>
        <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl' />
        <div className='relative shadow-xl bg-gray-100 dark:bg-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start'>
          {/* <div className='h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-2 w-2 text-gray-300'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25'
              />
            </svg>
          </div> */}

          <h1 className='font-bold text-3xl mb-4 relative z-50 text-center'>
            ABOUT ME.
          </h1>

          <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
            I am Matthew and my code name is CodeMat. I am an AI Assistant
            developer and as well, a full stack web developer (Mobile Web
            Specialist, MWS). It gives me joy to create things that live on the
            internet. I have passion for creating sleek, intuitive, responsive,
            dynamic and user-friendly digital experiences. I have 9+ experience
            in software development and I am ever ready to bring my
            client&apos;s vision(s) to life.
          </p>

          <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
            I believe in continuous learning to restack my skills and unlearn
            the old ways of doing things considering the fact that the internet
            is always new, refreshing and constantly upgrading.
          </p>

          <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
            I love giving back to the tech ecosystem by mentoring the younger
            developers. I have mentored and facilitated meetups across Africa
            (physically and remotely) for Google Africa via Andela Learning
            Community, ALC, programme for 3 seasons.
          </p>

          <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
            I am also a class 20 member of Policy, Strategy and Leadership
            Course, (PSLC 20) of the prestigious institute, National Institute
            For Policy and Strategic Studies, NIPSS, Kuru, Jos, Nigeria.
          </p>

          {/* <button className='border px-4 py-1 rounded-lg  border-gray-500 text-gray-300'>
            Explore
          </button> */}

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
