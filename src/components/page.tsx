import React from "react";
import { Home } from "./home";
import { About } from "./about";
import { CarousalSlider } from "./carousal";
import { TestimonialSlider } from "./testimonials";
import { FAQ } from "./faq";
import { Contact } from "./contact";

export const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <CarousalSlider />
      <TestimonialSlider />
      <FAQ />
      <Contact />
    </>
  );
};
