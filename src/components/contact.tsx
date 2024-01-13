import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { SectionTitle } from "./shared";
import {
  ContactContainer,
  ContactFirstSections,
  ContactInput,
  ContactPageWrapper,
  ContactText,
  ContactDetailContainer,
  ContactDetailDivider,
} from "./styles/contact";
import { ActionButton } from "./styles/shared";

export const Contact = () => {
  const [activeFaq, setAtiveFaq] = useState(1);
  return (
    <ContactPageWrapper>
      <SectionTitle id="contact" baseText="CONTACT ME" title="Send me email" />
      <ContactContainer>
        <ContactFirstSections>
          <ContactInput name="firstName" placeholder="First Name" />
          <ContactInput name="lastName" placeholder="Last Name" />
        </ContactFirstSections>
        <ContactInput name="email" placeholder="Email" />
        <ContactInput name="message" placeholder="Message" />
        <ActionButton>Send Message</ActionButton>
        <ContactDetailContainer>
          <ContactText>+92374748374834</ContactText>
          <ContactDetailDivider />
          <ContactText>hello@gmail.com</ContactText>
        </ContactDetailContainer>
      </ContactContainer>
    </ContactPageWrapper>
  );
};
