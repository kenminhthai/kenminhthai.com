import React from "react";
import { NavItem } from "../atm.NavLink";

const NavBar = props => {
  return (
    <nav>
      <ul>
        <NavItem link="/">Home</NavItem>
        <NavItem link="/about">About</NavItem>
        <NavItem link="/works">Works</NavItem>
      </ul>
    </nav>
  );
};

export default NavBar;
