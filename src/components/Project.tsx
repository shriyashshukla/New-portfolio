"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";



export function Project() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: "/TypewriterEffectSmoothD",
    thumbnail: "/image/pro1.png", // Assuming this is in the public/images folder
  },
  {
    title: "Cursor",
    link: "/TypewriterEffectSmoothD",
    thumbnail: "/image/2.png",
  },
  {
    title: "Rogue",
    link: "/TypewriterEffectSmoothD",
    thumbnail: "/image/3.png",
  },
  {
    title: "Editorially",
    link: "/Projectlist",
    thumbnail: "/image/4.png",
  },
  {
    title: "Editrix AI",
    link: "/Projectlist",
    thumbnail: "/image/4.png",
  },
  {
    title: "Pixel Perfect",
    link: "/Projectlist",
    thumbnail: "/image/6.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/image/7.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/image/2.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/image/3.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/image/4.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/image/5.png",
  },

];
