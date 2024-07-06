"use client";
import { Tabs } from "../components/ui/tabs";

export function EductionExperience() {
  const tabs = [
    {
      title: "Education",
      value: "education",
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900'>
          <p>Education</p>
          <EducationContent />
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900'>
          <p>Experience</p>
          <ExperienceContent />
        </div>
      ),
    },
  ];

  return (
    <div id="edu&exp" className='h-[850px] sm:h-[750px] md:h-[600px] [perspective:1000px] relative flex flex-col sm:max-w-xl md:max-w-5xl mx-auto w-full items-center justify-center mt-32 mb-56 px-4'>
      <h1 className='font-bold text-3xl mb-12 relative z-50 text-center'>
        EDUCATION AND EXPERIENCE
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}


const EducationContent = () => {
  return (
    <div className='mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-3'>
      <div className='leading-4'>
        <p className='text-lg font-medium'>B. Tech</p>
        <p className='text-lg font-light'>Physics Electronics</p>
        <p className='text-[16px] font-light'>
          Nnamdi Azikiwe University, Awka, Nigeria
        </p>
      </div>
      <div className='leading-4'>
        <p className='text-lg font-medium'>PSLC 20</p>
        <p className='text-lg font-light'>
          Policy Strategy & Leadership Course
        </p>
        <p className='text-[16px] font-light'>
          National Institute For Policy & Strategic Studies,Class 20, Kuru, Jos.
        </p>
        <p className='text-[16px] font-light'>2015</p>
      </div>
      <div className='leading-4'>
        <p className='text-lg font-medium'>
          Strategies For Revenue Generation
        </p>
        {/* <p className='text-lg font-light'>Class 2014</p> */}
        <p className='text-[16px] font-light'>
          Administrative Staff College of Nigeria, ASCON, Topo, Badgry, Lagos.
        </p>
        <p className='text-[16px] font-light'>2014</p>
      </div>
      <div className='leading-4'>
        <p className='text-lg font-medium'>Project Management</p>
        <p className='text-lg font-light'>MCARAKAN Resource Limited</p>
        <p className='text-[16px] font-light'>Enugu</p>
        <p className='text-[16px] font-light'>2011</p>
      </div>
    </div>
  );
};

const ExperienceContent = () => {
  return (
    <div className='mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-3'>
      <div className='leading-4 font-normal'>
        <p className='text-lg font-medium'>Senior Developer</p>
        <p className='text-lg'>CodeMat Soft-lutions</p>
        <p className='text-[16px]'>Web Development</p>
      </div>
      <div className='leading-4  font-light'>
        <p className='text-lg font-medium'>Facilitator</p>
        <p className='text-lg'>Google Africa with Andela</p>
        <p className='text-[16px]'>Web Development</p>
        <p className='text-[16px]'>2015</p>
      </div>
      <div className='leading-4 font-light'>
        <p className='text-lg font-medium'>Mentor</p>
        <p className='text-lg'>Google Africa with Andela</p>
        <p className='text-[16px]'>Web Development</p>
        <p className='text-[16px]'>2015</p>
      </div>
    </div>
  );
};
