import React from "react";
import Links from "../atm.NavLink";
import { StyledNavItem } from "./style";

const NavItem = props => (
  <StyledNavItem>
    <Links
      key={props.name}
      link={props.link}
      exact={props.exact}
      name={props.name}
    />
  </StyledNavItem>
);

export default NavItem;
