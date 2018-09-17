import React from "react";
import { NavLink } from "react-router-dom";
import { StyledLink } from "./style";

export const NavItem = props => (
  <StyledLink>
    <NavLink to={props.link} exact={props.exact} activeClassName="active">
      {props.children}
    </NavLink>
  </StyledLink>
);
