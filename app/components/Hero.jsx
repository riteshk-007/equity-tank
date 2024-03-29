"use client";
import * as React from "react";
import CarouselScroll from "./Carousel";

const images = [
  {
    img: "/banner/1.png",
  },
  {
    img: "/banner/2.png",
  },
  {
    img: "/banner/3.png",
  },
  {
    img: "/banner/4.png",
  },
];
const Hero = () => {
  return <CarouselScroll images={images} />;
};

export default Hero;
