"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products = [], // Set default value for products
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 mb-4">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="text-center my-10">
          <motion.h2
            className="text-2xl font-bold"
            style={{
              opacity: useSpring(
                useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
                springConfig
              ),
            }}
          >
            Discover More Amazing Products
          </motion.h2>
          <motion.p
            className="mt-4 text-base"
            style={{
              opacity: useSpring(
                useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
                springConfig
              ),
            }}
          >
            Explore our collection to find products that fit your style and needs.
          </motion.p>
        </motion.div>
        <motion.div className="flex flex-row mb-4 space-x-4">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="text-center my-10">
          <motion.h2
            className="text-2xl font-bold"
            style={{
              opacity: useSpring(
                useTransform(scrollYProgress, [0.5, 0.7], [0, 1]),
                springConfig
              ),
            }}
          >
            Limited Time Offers
          </motion.h2>
          <motion.p
            className="mt-4 text-base"
            style={{
              opacity: useSpring(
                useTransform(scrollYProgress, [0.5, 0.7], [0, 1]),
                springConfig
              ),
            }}
          >
            Take advantage of our special promotions and discounts available for a limited time.
          </motion.p>
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Turning ideas into <br /> powerful digital solutions
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-4 dark:text-neutral-200">
        I build beautiful Websites with the latest technologies and frameworks.
        I am a passionate developer and designer that love to build amazing
        products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 flex justify-center items-center"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover w-full h-full"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
