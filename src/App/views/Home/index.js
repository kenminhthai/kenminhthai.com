import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import GSAP from "react-gsap-enhancer";
import { TimelineMax } from "gsap";
import Header from "../../components/Ui.Header";
import { Intro } from "./intro";
import { selfIntro } from "../../utils";
import { TxtBg } from "../../components/atm.TxtBg";
import { MainWrapper, ContentWrapper } from "../../components/Wrapper";

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
      <TransitionGroup component={null} enter exit>
        <MainWrapper height="100vh">
          <Header name="header" />
          <ContentWrapper name="content">
            <Intro content={selfIntro} />
          </ContentWrapper>
          <TxtBg text="Ken" name="ken" />
        </MainWrapper>
      </TransitionGroup>
    );
  }
}

export default GSAP()(Home);
