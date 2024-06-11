import { About } from "@/components/About";
import { EductionExperience } from "@/components/EducationExperience";
import { Projects } from "@/components/Projects";
import SkillsBtn from "@/components/SkillsBtn";
import Hero from "@/components/ui/Hero";
import { FloatingNav } from "@/components/ui/floatingNav";
import { FaceIcon } from "@radix-ui/react-icons";
import { FaRegCircleUser } from "react-icons/fa6";
import { HomeIcon, SkullIcon } from "lucide-react";
import { GiSkills } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const Home = () => {
  const nav = [
    { name: "Home", link: "/", icon: <HomeIcon /> },
    {
      name: "About",
      link: "#about",
      icon: <FaRegCircleUser className='w-6 h-6' />,
    },
    { name: "Skills", link: "#skills", icon: <GiSkills className='w-6 h-6' /> },
    {
      name: "Edu&Exp",
      link: "#edu&exp",
      icon: <MdOutlineCastForEducation className='w-6 h-6' />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <GrProjects className='w-5 h-5' />,
    },
  ];

  return (
    <div className="pb-20 mb-20">
      <FloatingNav navItems={nav} className='' />
      <Hero />
      <About />
      <SkillsBtn />
      <EductionExperience />
      <Projects />
    </div>
  );
};

export default Home;
