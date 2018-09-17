import React, { Component } from "react";
import NavBar from "../mod.navBar";
import Logo from "../atm.Logo";

import { StyledHeader } from "./style";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this);
    return (
      <StyledHeader className={StyleSheet.header}>
        <Logo />
        <NavBar />
      </StyledHeader>
    );
  }
}

export default Header;
