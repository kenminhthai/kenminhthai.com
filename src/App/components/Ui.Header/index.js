import React, { Component } from "react";
import Menu from "../obj.Menu";
import { Logo } from "../atm.Logo";
import { getLinks } from "../../utils";
import { HeaderWrapper } from "../Wrapper";
import styled, { css } from "styled-components";

const header = css`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
  margin-top: 20px;
  padding: 0 10%;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 3;
`;

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
