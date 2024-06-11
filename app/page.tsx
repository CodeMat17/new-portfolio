import { About } from "@/components/About";
import { EductionExperience } from "@/components/EducationExperience";
import { Projects } from "@/components/Projects";
import SkillsBtn from "@/components/SkillsBtn";
import Hero from "@/components/ui/Hero";
import { FloatingNav } from "@/components/ui/floatingNav";
import { FaceIcon } from "@radix-ui/react-icons";

import { HomeIcon, SkullIcon } from "lucide-react";

const Home = () => {
  const nav = [
    { name: "Home", link: "/", icon: <HomeIcon /> },
    { name: "About", link: "#about", icon: <FaceIcon /> },
    { name: "Skills", link: "#skills", icon: <SkullIcon /> },
    { name: "Edu&Exp", link: "#edu&exp", icon: <SkullIcon /> },
    { name: "Projects", link: "#projects", icon: <SkullIcon /> },
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
