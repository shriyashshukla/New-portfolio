import Image from "next/image";
import Instructors from "@/components/Instructors";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Project } from "@/components/Project";
import { Live } from "@/components/Live";
import {TypewriterEffectSmoothD} from "@/components/TypewriterEffectSmoothD";





export default function Home() {
  return (
   <>
<Instructors/>
<Project/>
<TypewriterEffectSmoothD/>
<Live/>


   </>
  );
}
