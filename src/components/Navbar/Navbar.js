import React from "react";
import { Hamburger, Heading, NavbarContainer, NavbarContent } from "./index.js";
import { GiHamburgerMenu } from "react-icons/gi";
import Ellipse from "../../images/ellipse.svg";
import search from "../../images/search.png";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent className="container">
        <Heading>
          {" "}
          <img src={Ellipse} alt="" />
          Crypto Tracker
        </Heading>

        <Hamburger>
          <img src={search} alt="" />
          <GiHamburgerMenu />
        </Hamburger>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
