import React, { Component } from "react";
import styled from "styled-components";

import { Grid } from "../../components/atm.Grid";
import { H1, P, FlexRow } from "../../components/global";
import Column from "../../components/atm.Column";

const StyledInfoBlock = styled(FlexRow)`
  margin-bottom: 30px;
`;

class InfoBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <StyledInfoBlock>
        <Column type="secondary">
          <H1>{this.props.info.company}</H1>
          <P>{this.props.info.role}</P>
          <P>{this.props.info.year}</P>
        </Column>
        <Column type="primary">
          <P>{this.props.info.desc}</P>
        </Column>
      </StyledInfoBlock>
    );
  }
}

export default InfoBlock;
