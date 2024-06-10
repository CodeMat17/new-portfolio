import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { LuFramer } from "react-icons/lu";
import { PiOpenAiLogoLight } from "react-icons/pi";
import { RiNextjsLine, RiSupabaseLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";

const skillset = [
  {
    id: 1,
    tag: "REACTJS",
    icon: <FaReact className='w-12 h-12' />,
    link: "https://react.dev/",
  },
  {
    id: 2,
    tag: "NEXTJS",
    icon: <RiNextjsLine className='w-12 h-12' />,
    link: "https://nextjs.org/",
  },
  {
    id: 3,
    tag: "VERCEL",
    icon: <TbBrandVercel className='w-12 h-12' />,
    link: "https://vercel.com/",
  },
  {
    id: 4,
    tag: "GITHUB",
    icon: <FaGithubAlt className='w-12 h-12' />,
    link: "https://github.com/",
  },
  {
    id: 5,
    tag: "SUPABASE",
    icon: <RiSupabaseLine className='w-12 h-12' />,
    link: "https://supabase.com/",
  },
  {
    id: 6,
    tag: "TAILWIND",
    icon: <SiTailwindcss className='w-12 h-12' />,
    link: "https://tailwindcss.com/",
  },
  {
    id: 7,
    tag: "FRAMER-MOTION",
    icon: <LuFramer className='w-12 h-12' />,
    link: "https://framer.com/motion",
  },
  {
    id: 8,
    tag: "OPENAI",
    icon: <PiOpenAiLogoLight className='w-12 h-12' />,
    link: "https://openai.com/",
  },
  {
    id: 9,
    tag: "MONGODB",
    icon: <SiMongodb className='w-12 h-12' />,
    link: "https://mongodb.com/",
  },
];
const SkillsBtn = () => {
  return (
    <div className='py-12 px-4 sm:px-7 max-w-3xl mx-auto bg-gray-50 dark:bg-gray-950'>
      <h1 className='font-bold text-3xl mb-4 relative z-50 text-center '>
        SKILLS.
      </h1>

      <div className='mt-12 mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5'>
        {skillset.map((skill) => (
          <Link href={skill.link}
            key={skill.id}
            className=' flex flex-col justify-center items-center gap-3
         p-4 bg-white shadow-md dark:bg-gray-800 rounded-xl'>
            {/* <FaReact className='w-12 h-12' /> */}
            {skill.icon}
            <p className='tracking-wider'>{skill.tag}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SkillsBtn;
