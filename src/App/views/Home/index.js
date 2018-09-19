import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import GSAP from "react-gsap-enhancer";
import { TimelineMax } from "gsap";
import styled from "styled-components";
import Header from "../../components/Ui.Header";
import { Intro } from "./intro";
import { selfIntro } from "../../utils";
import { TxtBg } from "../../components/atm.TxtBg";
import { contentWrapperStyles } from "../../components/atm.Wrapper";

const ContentWrapper = styled.section`
  ${contentWrapperStyles};
  position: fixed;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  animationSource(utils) {
    const tl = new TimelineMax();
    tl.staggerFrom(utils.target, 2, {
      opacity: 1,
      y: "-= 300px"
    });
    console.log(utils.target.findInChildren({ name: "content" }));
    return tl;
  }

  componentDidMount(callback) {
    this.addAnimation(this.animationSource);
  }

  animatingIn(el) {
    console.log(el);
  }

  render() {
    const duration = 300;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0
    };

    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 }
    };
    return (
      <TransitionGroup component="main" enter exit>
        <Header name="header" />
        <ContentWrapper name="content">
          <Intro content={selfIntro} />
          <TxtBg text="Ken" name="ken" />
        </ContentWrapper>
      </TransitionGroup>
    );
  }
}

export default GSAP()(Home);
