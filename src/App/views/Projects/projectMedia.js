import React, { Component } from "react";
import styled from "styled-components";
import Img from "../../components/atm.Image";
import GSAP from "react-gsap-enhancer";
import { TimelineLite } from "gsap";
import { TransitionGroup } from "react-transition-group";

const Wrapper = styled.div`
  flex: 1 0 calc(65% - 8px);
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
      <TransitionGroup>
        <Wrapper>
          <Img src={this.props.src} alt="later" width="100%" />
        </Wrapper>
      </TransitionGroup>
    );
  }
}

export default GSAP()(ProjectMedia);