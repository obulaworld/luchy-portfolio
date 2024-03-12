import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SectionTitle } from "./shared";
import Pic1 from "../images/pic1.png"
import Pic2 from "../images/pic2.png"
import Pic3 from "../images/pic3.png"
import Pic4 from "../images/pic4.png"
import Pic5 from "../images/pic5.png"
import Pic6 from "../images/pic6.png"
import Pic7 from "../images/pic7.png"
import Pic8 from "../images/pic8.png"

import {
  CarouselPageWrapper,
  CarouselContainer,
  CarouselImage,
} from "./styles/carousel";
import { ActionButton } from "./styles/shared";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const images = [Pic6, Pic2, Pic3, Pic7, Pic5, Pic1, Pic8, Pic4];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const CarousalSlider = () => {
  return (
    <CarouselPageWrapper>
      <SectionTitle
        id="portfolio"
        baseText="Portfolio"
        title="Previous Projects"
      />
      <CarouselContainer>
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
        >
          {images.slice(0, 5).map((image) => {
            return <CarouselImage src={image} />;
          })}
        </Carousel>
      </CarouselContainer>
      <ActionButton>View All Projects</ActionButton>
    </CarouselPageWrapper>
  );
};
