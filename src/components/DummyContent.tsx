"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-white dark:bg-gray-900">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        What Skills do I have.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-gray-800 dark:bg-gray-900 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-gray-400 dark:text-gray-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
           
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "REACT JS, NEXT JS",
    title: "Having good in these",
    src: "/image/download.jpg",
    content: "/projectlist",
  },
  {
    category: "Creating UI/UX",
    title: "Having designing mindset",
    src: "/image/12345.png",
    content: "/projectlist",
  },
  {
    category: "WordPress",
    title: "Click to see the Live Projects",
    src: "/image/luxaborad.png",
    content: "https://luxabord.com/",
  },
  {
    category: "Product Management",
    title: "Currently Managing Luxabord (clothing brand)",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "/projectlist",
  },
  {
    category: "Responsive Design",
    title: "Developed Many Websites for Mobile View",
    src: "/image/image.png",
    content: "/projectlist",
  },
  {
    category: "Photography",
    title: "An Additional Skill",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "/projectlist",
  },
  {
    category: "Communication",
    title: "Good at Soft Skills and a Team Player",
    src: "/image/1235.jpg",
    content: "/projectlist",
  },
];
