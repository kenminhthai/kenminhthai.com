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

  max-width: 100vw;
  padding: 1em;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  margin: 0 auto;
  padding-top: 4rem;
`;

class About extends Component {
  state = {};
  render() {
    const location = this.props.history.goBack;
    return (
      <ContentWrapper>
        <GoBack location={location} />
        <Container>
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
        </Container>
      </ContentWrapper>
    );
  }
}

export default About;
