import Image from "next/image";
import Instructors from "@/components/Instructors";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Project } from "@/components/Project";
import { Live } from "@/components/Live";






export default function Home() {
  return (
   <>
<Instructors/>
<Project/>

<Live/>


   </>
  );
}
