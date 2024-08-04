'use client'
import { WavyBackground } from "./ui/wavy-background";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

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
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-bold tracking-tight">
                <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Hello, I&apos;m{" "}
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Shriyash Shukla",
                    1000,
                    "Web Developer",
                    1000,
                    "UI/UX Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <h2 className="text-[#ffffff] text-lg sm:text-xl lg:text-2xl mb-4 font-semibold">
                Welcome to My World of Web Development
              </h2>
              <p className="text-[#ffffff] text-base sm:text-lg lg:text-xl lg:leading-relaxed mb-6">
                I&apos;m a passionate web developer with a knack for turning ideas into digital reality. 
                With creativity and technical expertise, I craft engaging, user-centric websites that 
                leave a lasting impression. My portfolio showcases diverse projects, ranging from sleek 
                corporate websites to dynamic e-commerce platforms, each reflecting my commitment to 
                excellence, innovation, and seamless user experience.
              </p>
              <div className="justify-center flex">
                <a
                  href="#portfolio"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-primary-400 to-secondary-600 text-white text-lg rounded-md shadow-lg hover:opacity-90 transition-opacity duration-300"
                >
                  View My Portfolio
                </a>
              </div>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="order-1 sm:order-2 col-span-12 sm:col-span-4 flex items-center justify-center sm:justify-end"
>
  <div className="bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative flex items-center justify-center rounded-full overflow-hidden">
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
