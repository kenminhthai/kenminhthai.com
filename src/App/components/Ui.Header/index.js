import React, { Component } from "react";
import Menu from "../obj.Menu";
import { Logo } from "../atm.Logo";
import { getLinks } from "../../utils";
import { StyledHeader } from "./style";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkItems: getLinks()
    };
  }
  render() {
    console.log(this);
    return (
      <StyledHeader className={StyleSheet.header}>
        <Logo />
        <Menu links={this.state.linkItems} />
      </StyledHeader>
    );
  }
}

export default Header;
