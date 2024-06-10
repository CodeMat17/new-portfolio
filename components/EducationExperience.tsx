"use client";
import { Tabs } from "../components/ui/tabs";

export function EductionExperience() {
  const tabs = [
    {
      title: "Education",
      value: "education",
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl px-5 py-10 text-3xl md:text-4xl font-bold text-white bg-gray-800'>
          <p>Education</p>
          <EducationContent />
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl px-5 py-10 text-3xl md:text-4xl font-bold text-white bg-gray-800'>
          <p>Experience</p>
          <ExperienceContent />
        </div>
      ),
    },
  ];

  return (
    <div className='h-[750px] md:h-[50rem] [perspective:1000px] relative flex flex-col max-w-xl mx-auto w-full  items-center justify-center mt-32 mb-56 px-4'>
      <h1 className='font-bold text-3xl mb-12 relative z-50 text-center'>
        EDUCATION AND EXPERIENCE
      </h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

const EducationContent = () => {
  return (
    <div className='space-y-4 mb-4'>
      <div className='leading-4 mt-3'>
        <p className='text-lg font-semibold'>B. Tech</p>
        <p className='text-lg font-normal'>Physics Electronics</p>
        <p className='text-[16px] font-normal'>
          Nnamdi Azikiwe University, Awka, Nigeria
        </p>
      </div>
      <div className='leading-4'>
        <p className='text-lg font-semibold'>PSLC 20</p>
        <p className='text-lg font-normal'>
          Policy Strategy & Leadership Course
        </p>
        <p className='text-[16px] font-normal'>
          National Institute For Policy & Strategic Studies, Kuru, Jos.
        </p>
        <p className='text-[16px] font-normal'>2015</p>
      </div>
      <div className='leading-4'>
        <p className='text-lg font-semibold'>
          Strategies For Revenue Generation
        </p>
        <p className='text-lg font-normal'>Class 2014</p>
        <p className='text-[16px] font-normal'>
          National Institute For Policy & Strategic Studies, Kuru, Jos.
        </p>
        <p className='text-[16px] font-normal'>2015</p>
      </div>
      <div className='leading-4'>
        <p className='text-lg font-semibold'>Project Management</p>
        <p className='text-lg font-normal'>MCARAKAN Resource Limited</p>
        <p className='text-[16px] font-normal'>Enugu</p>
        <p className='text-[16px] font-normal'>2011</p>
      </div>
    </div>
  );
};

const ExperienceContent = () => {
  return (
    <div className='space-y-4 mb-4 mt-3'>
      <div className='leading-4 '>
        <p className='text-lg font-semibold'>Senior Developer</p>
        <p className='text-lg font-normal'>CodeMat Soft-lutions</p>
        <p className='text-[16px] font-normal'>Web Development</p>
      </div>
      <div className='leading-4'>
        <p className='text-lg font-semibold'>Facilitator</p>
        <p className='text-lg font-normal'>Google Africa with Andela</p>
        <p className='text-[16px] font-normal'>Web Development</p>
        <p className='text-[16px] font-normal'>2015</p>
      </div>
      <div className='leading-4'>
        <p className='text-lg font-semibold'>Mentor</p>
        <p className='text-lg font-normal'>Google Africa with Andela</p>
        <p className='text-[16px] font-normal'>Web Development</p>
        <p className='text-[16px] font-normal'>2015</p>
      </div>
    </div>
  );
};
