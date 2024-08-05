"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";



export function Project() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/image/pro1.png", // Assuming this is in the public/images folder
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/image/2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/image/3.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/image/4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/image/4.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
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
