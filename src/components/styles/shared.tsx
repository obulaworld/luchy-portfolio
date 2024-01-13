import styled from "styled-components";

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: radial-gradient(#41374e, #101018);
`;

export const ComponentWrapper = styled.div`
  width: 100%;
  margin: 60px auto 0;
  box-sizing: border-box;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
`;

export const NameIntro = styled.p`
  font-size: 30px;
  position: absolute;
  text-transform: uppercase;
  z-index: 3;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  background-color: #696a6e;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #a9e4ff, #fd9996);
`;

export const BaseText = styled.h2`
  font-size: 120px;
  font-family: "Passion One";
  color: red;
  position: absolute;
  z-index: 2;
  -webkit-text-fill-color: #201e29;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #333439;
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const SummarySection = styled.div`
  display: flex;
  gap: 68px;
  justify-content: center;
  align-items: center;
`;

export const ActionButton = styled.button`
  display: flex;
  height: 48px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(to right, #a9e4ff, #fd9996);
  text-transform: uppercase;
  z-index: 3;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  background-color: #696a6e;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  cursor: pointer;
  border-image: linear-gradient(to right, #a9e4ff, #fd9996) 2;
  border-width: 4px;
  border-style: solid;
`;

export const StatisticsDivider = styled.hr`
  background-color: #8a8494;
  color: #8a8494;
  -webkit-transform: rotate(90deg);
  left: 130px;
  border: 2px;
  height: 55px;
  width: 2px;
  transform: rotatex(45deg);
`;

export const Statisticscontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SummaryNumber = styled.h2`
  font-size: 30px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  background-color: #696a6e;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #a9e4ff, #fd9996);
  margin: 0 0 16px 0;
`;

export const SummaryTitle = styled.h3`
  color: #fff;
  margin: 0 0 8px 0;
`;

export const SummaryText = styled.p`
  color: #88898c;
  margin: 0;
`;
