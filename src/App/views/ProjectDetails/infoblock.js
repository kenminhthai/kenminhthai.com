import React, { Component } from "react";
import styled from "styled-components";

import { H1, P } from "../../components/global";

const StyledInfoBlock = styled.div`
  background: white;
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`;

class InfoBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledInfoBlock>
        <H1>{this.props.info.company}</H1>
        <P>{this.props.info.desc}</P>
        <P>{this.props.info.role}</P>
        <P>{this.props.info.year}</P>
      </StyledInfoBlock>
    );
  }
}

export default InfoBlock;
