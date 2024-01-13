import React, { FC } from "react";
import {
  SectionTitleWrapper,
  NameIntro,
  BaseText,
  Statisticscontainer,
  SummaryNumber,
  SummaryText,
  SummaryTitle,
} from "../styles/shared";

interface SectionTitleProps {
  baseText: string;
  title: string;
  id: string;
}

interface SummaryCardProps {
  subHeading: string;
  heading: string;
  desc: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  baseText,
  title,
  id,
}) => {
  return (
    <SectionTitleWrapper>
      <NameIntro>{title}</NameIntro>
      <BaseText id={id}>{baseText}</BaseText>
    </SectionTitleWrapper>
  );
};

export const SummaryCard: FC<SummaryCardProps> = ({
  heading,
  subHeading,
  desc,
}) => {
  return (
    <Statisticscontainer>
      <SummaryNumber>{heading}</SummaryNumber>
      <SummaryTitle>{subHeading}</SummaryTitle>
      <SummaryText>{desc}</SummaryText>
    </Statisticscontainer>
  );
};
