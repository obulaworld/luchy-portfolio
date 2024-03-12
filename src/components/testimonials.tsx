import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SectionTitle } from "./shared";
import {
  TestimonialPageWrapper,
  TestimonialContainer,
  Testimonial,
  ClientContainer,
  Client,
  ClientImage,
  ClientDetailsContainer,
  ClientText,
  ClientName,
  ClientOccupation,
} from "./styles/testimonials";
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

const testimonials = [
  {
    text: 'Excellence is what comes to mind when I think about Chioma. I’ve had the pleasure of knowing Chioma for over 9 years, during which we studied together and worked together. Above all, I was impressed with Chioma’s ability to deliver quality work. And, of course, her great communication skills and interpersonal relationship. Chioma would be a true asset for any software engineering positions requiring JavaScript and its without hesitation that I recommend Chioma.', 
    image: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Kenneth Onah',
    job: 'Software Engineer'
  }, {
    text: 'Chioma was a fantastic person to work with. She had a positive attitude and a desire to produce quality work that served her well and she brings a lot to the table. A driven, ambitious individual with an infectious enthusiasm for any project. It is my pleasure to recommend her personally and professionally.', 
    image: 'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Rilwan Lawal',
    job: 'Software Engineer'
  }, {
    text: 'Oluchi has a great research skills and is an articulate communicator, thinks logically, develops creative solutions to complex problems and works well in leading a team. She is detail oriented and passionate about coding. Her programs are always top quality with few bugs. She understands the value of testing and takes his time to test and retest before releasing a software program to a client. You will be glad to have her come on-board', 
    image: 'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Mark Benjamin',
    job: 'Marketing Manager'
  }, {
    text: 'Excellence is what comes to mind when I think about Chioma. I’ve had the pleasure of knowing Chioma for over 9 years, during which we studied together and worked together. Above all, I was impressed with Chioma’s ability to deliver quality work. And, of course, her great communication skills and interpersonal relationship. Chioma would be a true asset for any software engineering positions requiring JavaScript and its without hesitation that I recommend Chioma.', 
    image: 'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Nina Fort',
    job: 'Engineer'
  }, {
    text: 'Excellence is what comes to mind when I think about Chioma. I’ve had the pleasure of knowing Chioma for over 9 years, during which we studied together and worked together. Above all, I was impressed with Chioma’s ability to deliver quality work. And, of course, her great communication skills and interpersonal relationship. Chioma would be a true asset for any software engineering positions requiring JavaScript and its without hesitation that I recommend Chioma.', 
    image: 'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    name: 'Nina Fort',
    job: 'Product Manager'
  }];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const TestimonialSlider: FC<{ deviceType?: string }> = ({
  deviceType,
}) => {
  return (
    <TestimonialPageWrapper>
      <SectionTitle
        id="testimonial"
        baseText="Testimonials"
        title="What clients says"
      />
      <TestimonialContainer>
        <Carousel
          ssr
          partialVisbile
          deviceType={deviceType}
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
        >
          {testimonials.map((test) => {
            return (
              <Testimonial>
                <ClientText>
                  {test.text}
                </ClientText>
                <ClientContainer>
                  <Client>
                    <ClientImage src={test.image}/>
                    <ClientDetailsContainer>
                      <ClientName>{test.name}</ClientName>
                      <ClientOccupation>{test.job}</ClientOccupation>
                    </ClientDetailsContainer>
                  </Client>
                </ClientContainer>
              </Testimonial>
            );
          })}
        </Carousel>
      </TestimonialContainer>
      <ActionButton>Drop your review</ActionButton>
    </TestimonialPageWrapper>
  );
};
