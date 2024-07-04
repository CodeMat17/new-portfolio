import { Meteors } from "@/components/ui/Meteors";

export function About() {
  return (
    <div id='about' className='py-12 px-4 flex justify-center items-center'>
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

          <p className='font-normal text-base text-slate-400 mb-4 relative z-50'>
            Hi, I&apos;m Matthew (aka CodeMat), a seasoned AI Assistant
            developer and full stack web developer (Mobile Web Specialist, MWS)
            with a passion for crafting exceptional digital experiences. With
            over 9 years of experience in software development, I thrive on
            creating sleek, intuitive, responsive, dynamic, and user-friendly
            online solutions.
          </p>
          <p className='font-semibold text-base text-slate-400 mb-4 relative z-50'>
            My Philosophy
          </p>
          <p className='font-normal text-base text-slate-400 mb-4 relative z-50'>
            I believe in continuous learning, updating my skills to keep pace
            with the ever-evolving internet landscape. I&apos;m dedicated to
            mentoring younger developers, having facilitated meetups across
            Africa (physically and remotely) for Google Africa via the Andela
            Learning Community (ALC) program for three seasons.
          </p>
          <p className='font-semibold text-base text-slate-400 mb-4 relative z-50'>
            More...
          </p>
          <p className='font-normal text-base text-slate-400 mb-4 relative z-50'>
            I&apos;m a proud member of the Policy, Strategy, and Leadership
            Course (PSLC 20) at the prestigious National Institute For Policy
            and Strategic Studies (NIPSS), Kuru, Jos, Nigeria.
          </p>
          <p className='font-semibold text-base text-slate-400 mb-4 relative z-50'>
            Let&apos;s Connect
          </p>
          <p className='font-normal text-base text-slate-400 mb-4 relative z-50'>
            I&apos;m excited to collaborate and bring your vision to life.
            Let&apos;s build something amazing together!
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
