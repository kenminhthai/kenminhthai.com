import React from "react";
import { NavLink } from "react-router-dom";
const Logo = props => (
  <div className="logo">
    <NavLink to="/" exact>
      Logo
    </NavLink>
  </div>
);
export default Logo;
