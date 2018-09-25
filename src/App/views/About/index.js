import React, { Component } from "react";
import styled from "styled-components";

import resume from "../../../shared/resume.json";
import site from "../../../shared/site.json";
import { Shadow } from "../../components/global";
import { theme } from "../../utils/theme";

import { GoBack } from "../../components/atm.GoBack";
import ScrollTop from "../../components/atmScrollTopBtn";
import Resume from "./resume";
import { Portrait } from "./portrait";

import Grid from "../../components/atm.Grid";
import { Column } from "../../components/atm.Column";
import { SvgBtn } from "../../components/atm.SvgBtn";

import {
  MainWrapper,
  HeaderWrapper,
  ContentWrapper,
  FooterWrapper
} from "../../components/Wrapper";

const Link = styled.a`
  margin: 0 0.76rem;
  width: 32px;
  height: 32px;
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${theme.brand.default};
    transform: scale(1.25, 1.25);
  }
`;

const SocialWrapper = styled.div`
  display: flex;
`;

class About extends Component {
  state = {};
  render() {
    const location = this.props.history.goBack;
    return (
      <MainWrapper>
        <HeaderWrapper>
          <GoBack location={location} />
          <SocialWrapper>
            <Link href="//github.com/kenminhthai" target="_blank">
              <SvgBtn glyph="github" size="22" />
            </Link>
            <Link href="//www.linkedin.com/in/kenminhthai" target="_blank">
              <SvgBtn glyph="linkedIn" size="20" />
            </Link>
          </SocialWrapper>
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
