import styled, { css } from "styled-components";

export const TestimonialPageWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

export const TestimonialContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 70px;
`;

export const TestimonialImage = styled.img`
  width: 375px;
  height: 375px;
  border-radius: 8px;
`;

export const Testimonial = styled.div`
  width: 369px;
  height: 274px;
  border-radius: 8px;
  background-color: #413446;
  display: flex;
  flex-direction: column;
  padding: 36px 26px;
`;

export const ClientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  color: #8a8494;
`;

export const Client = styled.div`
  display: flex;
  gap: 16px;
`;

export const ClientText = styled.div`
  color: #8a8494;
`;

export const ClientName = styled.h3`
  color: #fff;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const ClientOccupation = styled.p`
  color: #8a8494;
  margin-top: 0;
`;

export const ClientImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #8a8494;
`;

export const ClientDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
