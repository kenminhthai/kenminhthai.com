import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/Ui.Header";
import { Intro } from "./intro";
import { selfIntro } from "../../utils";
import { TxtBg } from "../../components/atm.TxtBg";
import { contentWrapperStyles } from "../../components/atm.Wrapper";

const ContentWrapper = styled.main`
  ${contentWrapperStyles};
  position: fixed;
`;

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <ContentWrapper>
          <Intro content={selfIntro} />
          <TxtBg text="Ken" />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Home;
