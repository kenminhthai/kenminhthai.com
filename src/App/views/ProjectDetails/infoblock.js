import React, { Component } from "react";
import styled from "styled-components";

import { Grid } from "../../components/atm.Grid";
import { H1, P, FlexRow } from "../../components/global";
import Column from "../../components/atm.Column";

const StyledInfoBlock = styled(FlexRow)`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled(P)`
  margin: 1rem 0;
`;

class InfoBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const category = this.props.src.map(t => t.category);
    const tech = this.props.src.map(t => t.tech);
    const style = this.props.src.map(t => t.style);
    const intro = this.props.src.map(t => t.intro);
    const responsibility = this.props.src.map(t => t.responsibility);
    return (
      <StyledInfoBlock>
        <Column type="secondary">
          <H1>{this.props.title}</H1>
          <P>
            <strong>Category:</strong> {category}
          </P>
          <P>
            <strong>Style:</strong> {style}
          </P>
          <P>
            <strong>Tech:</strong> {tech}
          </P>
        </Column>
        <Column type="primary">
          <Text>{intro}</Text>
          <Text>{responsibility}</Text>
        </Column>
      </StyledInfoBlock>
    );
  }
}

export default InfoBlock;
