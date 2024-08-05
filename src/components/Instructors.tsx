'use client'
import { WavyBackground } from "./ui/wavy-background";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";


const words = ["UI/UX", "E-Commerce", "beautiful", "Hello World"];
function Instructors() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <section className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-2 sm:order-1 col-span-12 sm:col-span-8 text-center sm:text-left"
            >


<div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-200 dark:text-neutral-200">
        Build
        <FlipWords words={words} /> <br />
        websites with Shriyash Shukla
      </div>
    </div>
              </motion.div>
              

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-1 sm:order-2 col-span-12 sm:col-span-4 flex items-center justify-center sm:justify-end"
            >
              <div className="bg-[#ffffff] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative flex items-center justify-center rounded-full overflow-hidden">
                <img
                  src="hero.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
