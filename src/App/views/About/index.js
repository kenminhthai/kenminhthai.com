import React, { Component } from "react";
import styled from "styled-components";

import { Resume } from "./resume";
import { Portrait } from "./portrait";
import { resumeIntro } from "../../utils/index";

import Grid from "../../components/atm.Grid";
import { Column } from "../../components/atm.Column";

const ContentWrapper = styled.div`
  max-width: calc(960px + 16px * 2);
  margin: 8em auto;
  display: flex;
  min-height: 100%;
  padding: 0 1em;
  flex-direction: column;
`;

class About extends Component {
  state = {};
  render() {
    return (
      <ContentWrapper>
        <Grid>
          <Column type="primary">
            <Portrait />
          </Column>
          <Column type="secondary">
            <Resume
              subheading="Who is Ken Thai"
              title="Front End Developer"
              subtitle="Based in San Francisco"
              introtext={resumeIntro}
            />
          </Column>
        </Grid>
      </ContentWrapper>
    );
  }
}

export default About;
