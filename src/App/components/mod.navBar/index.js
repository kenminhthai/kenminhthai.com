import React from "react";
import NavItem from "../hoc.NavItem/index";

const NavBar = props => {
  return (
    <NavItem
      key={props.key}
      link={props.link}
      exact={props.exact}
      name={props.name}
    />
  );
};

export default NavBar;
