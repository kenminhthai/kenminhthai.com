import React, { Component } from "react";
import Menu from "../obj.Menu";
import { Logo } from "../atm.Logo";
import { getLinks } from "../../utils";
import { StyledHeader } from "./style";
import { HeaderWrapper } from "../Wrapper";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkItems: getLinks()
    };
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Menu links={this.state.linkItems} />
      </HeaderWrapper>
    );
  }
}

export default Header;
