import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Img from "../../components/atm.Image";
import GSAP from "react-gsap-enhancer";
import { TimelineLite } from "gsap";
import { TransitionGroup } from "react-transition-group";

const raise = keyframes`
  0%{
    transform: translateY(0);
  }

  55%{
    transform: translateY(-20px);
  }

  100%{
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  flex: 1 0 calc(65% - 8px);
  display: flex;
  align-items: flex-end;

  &:hover {
    > img {
      animation-name: ${raise};
      animation-direction: alternate;
      animation-iteration-count: forward;
      animation-duration: 800ms;
      animation-timing-function: ease-in-out;
    }
  }

  @media (max-width: 767px) {
    flex-shrink: 1;
    order: 0;
  }
`;

class ProjectMedia extends Component {
  state = {};

  entering({ target }) {
    const pic = target;
    let tl = new TimelineLite();
    tl.staggerFrom(pic, 0.75, { x: "+100%" });
    return tl;
  }

  componentDidMount() {
    this.addAnimation(this.entering);
  }

  render() {
    return (
      <TransitionGroup component={null}>
        <Wrapper>
          <Img src={this.props.src} alt="later" width="100%" />
        </Wrapper>
      </TransitionGroup>
    );
  }
}

export default GSAP()(ProjectMedia);
