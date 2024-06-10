import { About } from "@/components/About";
import { EductionExperience } from "@/components/EducationExperience";
import { Projects } from "@/components/Projects";
import SkillsBtn from "@/components/SkillsBtn";
import Hero from "@/components/ui/Hero";
import { FloatingNav } from "@/components/ui/floatingNav";

import { HomeIcon } from "lucide-react";

const Home = () => {
  const nav = [{ name: "Home", link: "/", icon: <HomeIcon /> }];

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
