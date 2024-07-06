import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Attendance Register",
    desc: "Developed with Next.js, Tailwind CSS, TypeScript, and Supabase, this versatile Online Attendance Register streamlines attendance tracking for schools, organizations, and more. It offers a user-friendly interface for efficient and accurate management.",
    img: "/ss/ss-attendance.png",
    link: "https://attendance-demo-black.vercel.app",
  },
  {
    id: 2,
    name: "Volks Rental Services",
    desc: "Developed with Next.js, Tailwind CSS, TypeScript, and Supabase, Volks Rental Services streamlines car rental bookings for users. It offers a user-friendly interface for efficient and accurate management of rental services, catering to diverse customer needs.",
    img: "/ss/ss-volks.png",
    link: "https://volks-rentals.vercel.app",
  },
  {
    id: 3,
    name: "Disney-Clone",
    desc: "Developed with Next.js, Tailwind CSS, TypeScript, and Supabase, this Disney-clone app provides a seamless streaming experience for users. It offers a user-friendly interface for efficient browsing and playback of content, mirroring the functionality and design of the original platform.",
    img: "/ss/ss-disney-clone.webp",
    link: "https://disney-m.vercel.app",
  },
  {
    id: 4,
    name: "Hulu-Clone",
    desc: "Developed with Next.js, Tailwind CSS, TypeScript, and Supabase, this Hulu-clone app delivers a seamless streaming experience. It features a user-friendly interface for efficient browsing and playback of content, closely replicating the functionality and design of the original Hulu platform.",
    img: "/ss/ss-hulu-clone.webp",
    link: "https://hulu-clone-mctony17.vercel.app",
  },
];

const Projects = () => {
  return (
    <div id='projects' className='w-full max-w-5xl mx-auto'>
      <h1 className='font-bold text-3xl relative z-50 text-center'>PROJECTS</h1>
      <p className='text-center text-gray-400 font-light mb-12'>
        (Selected few)
      </p>

      <div className='px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4'>
        {projects.map((project) => (
          <div
            key={project.id}
            className=' group border rounded-xl overflow-hidden transition transform duration-300 hover:scale-105'>
            <div className='relative '>
              <Image
                alt='project image'
                priority
                src={project.img}
                width={320}
                height={200}
                className='w-full aspect-video '
              />
              <div className='absolute flex items-center justify-center  inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-700'>
                <p className='p-4 text-sm text-center text-white font-light'>
                  {project.desc}
                </p>
              </div>
            </div>

            <div className='p-4 flex items-center justify-between'>
              <h3 className='text-lg font-semibold text-gray-600 group-hover:text-gray-400 transition-color duration-500 transition-all transform text-center group-hover:text-left '>
                {project.name}
              </h3>
              <Button asChild
                variant='ghost'
                className='text-xs hidden group-hover:flex'>
                <Link href={project.link}>  View project
                </Link>
              
              </Button>
              {/* <a href={project.link} className='block text-sm font-medium text-white bg-blue-500 hover:bg-blue-400 rounded-full py-2 px-4 mt-2'>
                View Project
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
