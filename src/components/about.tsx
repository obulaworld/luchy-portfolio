import React, { FC } from "react";
import {
  ComponentWrapper,
  SummarySection,
  StatisticsDivider,
} from "./styles/shared";
import { AboutContainer, AboutMe } from "./styles/about";
import { SectionTitle, SummaryCard } from "./shared";

const aboutMe = `A highly motivated and results-oriented senior professional with 7+ years of experience across finTech and startup environments. My expertise lies in JavaScript (ES6+), TypeScript, D3.js, GraphQL, Groovy on Grails, CSS3/HTML5, Webpack, A/B testing, and MySQL. I am well-versed in popular frameworks and tools including React, Next.js, Gatsby, Node.js, Bootstrap, Vue.js, git, and agile methodologies.
Seeking a challenging role within a team of skilled and passion-driven engineers to inspire continuous growth and contribute to meaningful projects, advancing career to the next level.
`;

const summary = [
  {
    desc: "Experienced professional dedicated to continuous learning and growth with years of hands-on expertise.",
    heading: "7+",
    subHeading: "Years of Experience",
  },
  {
    desc: "Multiple high-impact projects across various domains with exceptional leadership and strategic planning skills",
    heading: "11+",
    subHeading: "Projects Done",
  },
  {
    desc: "Experiencing diverse cultures to broaden my perspectives and enrich my understanding of global dynamics.",
    heading: "18+",
    subHeading: "Countries Visited",
  },
  {
    desc: "Accessible round the clock, to engage in discussions, collaborate on projects, and address your queries.",
    heading: "24/7",
    subHeading: "Available to Talk",
  },
];
export const About: FC = () => {
  return (
    <ComponentWrapper>
      <AboutContainer>
        <SectionTitle id='about' baseText="About Me" title="who am i?" />
        <AboutMe>{aboutMe}</AboutMe>
        <SummarySection>
          {summary.map((sum, idx) => (
            <>
              <SummaryCard
                desc={sum.desc}
                heading={sum.heading}
                subHeading={sum.subHeading}
              />
              {idx !== summary.length - 1 && <StatisticsDivider />}
            </>
          ))}
        </SummarySection>
      </AboutContainer>
    </ComponentWrapper>
  );
};
