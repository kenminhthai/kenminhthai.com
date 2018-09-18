import React, { Component } from "react";
import styled from "styled-components";

import { GoBack } from "../../components/atm.GoBack";
import { Resume } from "./resume";
import { Portrait } from "./portrait";
import { resumeIntro } from "../../utils/index";

import { wrapperStyles } from "../../components/atm.Wrapper";
import Grid from "../../components/atm.Grid";
import { Column } from "../../components/atm.Column";

const ContentWrapper = styled.main`
  ${wrapperStyles};

  margin: 8em auto;
  padding: 0 1em;
  position: relative;
`;

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <GoBack />
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
      </React.Fragment>
    );
  }
}

export default About;
