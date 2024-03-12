import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { SectionTitle } from "./shared";
import {
  FaqPageWrapper,
  FaqActive,
  FaqContainer,
  FaqInactive,
  FaqActiveTitle,
} from "./styles/faq";

const faqs = [
  {
    title: "How long have you been working in the industry?",
    desc: "I've been actively involved in the industry for over 7+ years. My journey began with a passion for Frontend Development and over the years, I've honed my expertise through hands-on experience, continuous learning, and a commitment to staying abreast of industry trends and advancements."},
  {
    title: "Can you provide examples of your previous work?",
    desc: "Certainly! Throughout my career, I've had the opportunity to work on a diverse range of projects spanning Fintech and E-commerce, each project showcases my creativity, problem-solving skills, and ability to deliver results that exceed client expectations. You can explore some of my featured projects in detail in the Portfolio section of this website."},
  {
    title: "What sets your work apart from others?",
    desc: "hat distinguishes my work is my unwavering dedication to craftsmanship and attention to detail. I believe in approaching each project with a blend of creativity, strategy, and technical expertise, ensuring that every aspect aligns with the client's vision and objectives. Whether it's through innovative design solutions, seamless user experiences, or robust backend development, I strive to deliver work that not only meets but exceeds expectations."},
  {
    title: "How do you approach new projects?",
    desc: "My approach to new projects is rooted in collaboration, communication, and a deep understanding of the client's needs and goals. I begin by conducting thorough research and analysis to gain insights into the project requirements, target audience, and competitive landscape. From there, I work closely with the client to develop a tailored strategy and project roadmap, ensuring alignment every step of the way. Throughout the project lifecycle, I maintain open lines of communication, provide regular updates, and welcome feedback to ensure that the final deliverables meet or surpass expectations."},
  {
    title: "How can I get in touch with you?",
    desc: "I'm always eager to connect with potential clients, collaborators, or fellow industry professionals. You can reach out to me via email at oluchukwuokpala1759@email.com or by filling out the contact form on this website. Whether you have questions about my services, want to discuss a potential project, or simply want to say hello, I'm here to help. I typically respond to inquiries within [response time], so you can expect a prompt and personalized reply. Let's start a conversation and explore how we can work together to bring your ideas to life!"},
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
export const FAQ = () => {
  const [activeFaq, setAtiveFaq] = useState(1);
  return (
    <FaqPageWrapper>
      <SectionTitle
        id="faq"
        baseText="F.A.Q"
        title="Frequently Asked Questions"
      />
      <FaqContainer>
        {faqs.map((faq, index) =>
          activeFaq === index ? (
            <FaqActive>
              <FaqActiveTitle>{faq.title}</FaqActiveTitle>
              <span>{faq.desc}</span>
            </FaqActive>
          ) : (
            <FaqInactive onClick={() => setAtiveFaq(index)}>
              {faq.title}
            </FaqInactive>
          )
        )}
      </FaqContainer>
    </FaqPageWrapper>
  );
};
