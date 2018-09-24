import React, { Component } from "react";
import styled from "styled-components";

import resume from "../../../shared/resume.json";

import { GoBack } from "../../components/atm.GoBack";
import ScrollTop from "../../components/atmScrollTopBtn";
import Resume from "./resume";
import { Portrait } from "./portrait";

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
                subheading={resume.subheading}
                title={resume.title}
                subtitle={resume.subtitle}
                introtext={resume.intro}
                inquiryText={resume.inquiry}
                email={resume.email}
              />
            </Column>
          </Grid>
        </ContentWrapper>
        <ScrollTop />
      </MainWrapper>
    );
  }
}

export default About;
