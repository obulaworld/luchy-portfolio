import React, { FC } from "react";
import { ComponentWrapper, ActionButton } from "./styles/shared";
import {
  MeBanner,
  HomePageWrapper,
  MeContainer,
  NameBanner,
} from "./styles/home";
import { SectionTitle } from "./shared";
import MeGrayIcon from "../images/me-gray.png";

export const Home: FC = () => {
  return (
    <ComponentWrapper>
      <HomePageWrapper>
        <SectionTitle
          id="home"
          baseText="Frontend Engineer"
          title="Hi, My Name Is"
        />
        <NameBanner>OLUCHI OKPALA</NameBanner>
        <MeContainer>
          <ActionButton>View Portfolio</ActionButton>
          <MeBanner src={MeGrayIcon} />
          <ActionButton>Get in Touch</ActionButton>
        </MeContainer>
      </HomePageWrapper>
    </ComponentWrapper>
  );
};
