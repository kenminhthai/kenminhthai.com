import React, { Component } from "react";
import styled from "styled-components";

import { GoBack } from "../../components/atm.GoBack";
import { Resume } from "./resume";
import { Portrait } from "./portrait";
import { resumeIntro } from "../../utils/index";

import Grid from "../../components/atm.Grid";
import { Column } from "../../components/atm.Column";

import {
  MainWrapper,
  HeaderWrapper,
  ContentWrapper
} from "../../components/Wrapper";

class About extends Component {
  state = {};
  render() {
    const location = this.props.history.goBack;
    return (
      <MainWrapper>
        <HeaderWrapper>
          <GoBack location={location} />
        </HeaderWrapper>
        <ContentWrapper>
          <Grid>
            <Column type="primary" order="2">
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
      </MainWrapper>
    );
  }
}

export default About;
