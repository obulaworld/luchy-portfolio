import styled, { css } from "styled-components";

export const PokeMonCard = styled.div`
  background: #000;
  color: #fff;
  font-size: 24px;
  padding: 16px;
  margin: 16px;
`;
export const NavLink = styled.a`
  text-decoration: none;
`;

export const PageLayout = styled.div`
  max-width: 80vw;
  margin: auto;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  border: none;
  box-sizing: border-box;
  align-items: center;
  margin-left: 70px;
  margin-right: 70px;
  padding-top: 30px;
  margin-bottom: 100px;
`;
export const HeaderImage = styled.img`
  height: 60px;
`;

export const HeaderTitle = styled.h2`
  color: #000;
  margin: 0;
  margin-left: 70px;
  padding-bottom: 4px;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const HeaderItem = styled.span<{ isActive: boolean }>`
  font-size: 14px;
  color: #88898c;
  a {
    text-decoration: none;
    font-family: "Inter", sans-serif;
    background-color: #88898c;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    &:hover {
      background-image: linear-gradient(45deg, #a9e4ff, #fd9996);
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 2px solid #1569e0;
      color: #1569e0;
    `}
`;

export const HeaderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 49px;
  border-radius: 8px;
  background: linear-gradient(#a9e4ff, #fd9996);
  color: #000;
  cursor: pointer;
  border: 1px solid linear-gradient(#e66465, #9198e5);
`;
