"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";




export function Project() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Portfolio 1",
    link: "/Projectlist",
    thumbnail: "/image/pro1.png", // Assuming this is in the public/images folder
  },
  {
    title: "MedAssure",
    link: "/Projectlist",
    thumbnail: "/image/2.png",
  },
  {
    title: "AnimeZen",
    link: "/Projectlist",
    thumbnail: "/image/3.png",
  },
  {
    title: "Paapi Paet",
    link: "/Projectlist",
    thumbnail: "/image/4.png",
  },
  {
    title: "Paapi Paet",
    link: "/Projectlist",
    thumbnail: "/image/4.png",
  },
  {
    title: "",
    link: "/Projectlist",
    thumbnail: "/image/6.png",
  },
  {
    title: "code pen",
    link: "/Projectlist",
    thumbnail: "/image/7.png",
  },
  {
    title: "MedAssure",
    link: "/Projectlist",
    thumbnail: "/image/2.png",
  },
  // {
  //   title: "AnimeZen",
  //   link: "/Projectlist",
  //   thumbnail: "/image/3.png",
  // },
  // {
  //   title: "Paapi Paet",
  //   link: "/Projectlist",
  //   thumbnail: "/image/8.png",
  // },
  {
    title: "",
    link: "/Projectlist",
    thumbnail: "/image/5.png",
  },

];
