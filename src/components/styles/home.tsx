import styled from "styled-components";

export const MeBanner = styled.img`
  height: 350px;
  width: 500px;
  object-fit: cover;
  z-index: 100;
  margin-top: 100px;
  object-position: center top;
`;

export const JobTitle = styled.h2`
  font-size: 70px;
  -webkit-text-fill-color: #ccc;
  -webkit-text-stroke: 3px #000;
`;

export const NameIntro = styled.p`
  font-size: 30px;
  color: #fff;
`;

export const NameBanner = styled.h2`
  font-size: 90px;
  color: #fff;
  line-height: 0.5;
  font-family: 'Angkor', cursive;
  position: absolute;
`;

export const HomePageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
`;


