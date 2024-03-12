import React, { FC, useState } from "react";
import {
  HeaderNav,
  NavLink,
  HeaderItem,
  NavWrapper,
  HeaderImage,
  HeaderButton,
} from "./styles/header";

export const Header: FC = () => {
  const [activeLink, setActiveLink] = useState("check-in");
  const handleNavigation= (currentLink: string) => {
    setActiveLink(currentLink);
  };

  return (
    <NavWrapper>
      <HeaderImage/>
      <HeaderNav>
        <HeaderItem
          isActive={activeLink === "home"}
          onClick={() => handleNavigation("home")}
        >
          <NavLink href="#home">Home</NavLink>
        </HeaderItem>
        <HeaderItem
          isActive={activeLink === "about"}
          onClick={() => handleNavigation("students")}
        >
          <NavLink href="#about">About Me</NavLink>
        </HeaderItem>
        <HeaderItem
          isActive={activeLink === "portfolio"}
          onClick={() => handleNavigation("students")}
        >
          <NavLink href="#portfolio">Portfolio</NavLink>
        </HeaderItem>
        <HeaderItem
          isActive={activeLink === "contact"}
          onClick={() => handleNavigation("students")}
        >
          <NavLink href="#contact">Contact Me</NavLink>
        </HeaderItem>
        <HeaderButton
          onClick={() => handleNavigation("students")}
        >
          Hire Me
        </HeaderButton>
      </HeaderNav>
    </NavWrapper>
  );
};
