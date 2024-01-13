import styled, { css } from "styled-components";

export const FaqPageWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const FaqInactive = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 900px;
  background-color: #15161b;
  border-radius: 8px;
  padding-left: 24px;
  color: #8a8494;
  cursor: pointer;
`;

export const FaqActive = styled.div`
  display: flex;
  flex-direction: column;
  height: 134px;
  width: 876px;
  border-radius: 8px;
  gap: 16px;
  padding: 24px;
  color: #6a638d;
  background: linear-gradient(#a9e4ff, #fd9996);
  cursor: pointer;
`;

export const FaqActiveTitle = styled.div`
  color: #000;
  margin-bottom: 0;
  margin-top: 0;
`;
