import Hero from "@/components/ui/Hero";
import { FloatingNav } from "@/components/ui/floatingNav";
import { HomeIcon } from "lucide-react";

const Home = () => {
  const nav = [{ name: "Home", link: "/", icon: <HomeIcon /> }];

  return (
    <div>
      <FloatingNav navItems={nav} className='' />
      <Hero />
    </div>
  );
};

export default Home;
