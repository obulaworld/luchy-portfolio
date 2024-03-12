import styled from "styled-components";

export const ContactPageWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-top: 70px;
`;

export const ContactFirstSections = styled.div`
  display: flex;
  gap: 4px;
  width: 484px;
  justify-content: space-between;
`;

export const ContactInput = styled.input`
  width: 484px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #8a8494;
  padding-bottom: 16px;
  color: #8a8494;
`;

export const ContactText = styled.div`
  color: #8a8494;
`;

export const ContactDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ContactDetailDivider = styled.hr`
  background-color: #8a8494;
  color: #8a8494;
  -webkit-transform: rotate(90deg);
  left: 130px;
  border: 2px;
  height: 24px;
  width: 2px;
  transform: rotatex(45deg);
`;
