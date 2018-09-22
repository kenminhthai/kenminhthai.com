import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import { TweenLite, TimelineLite, TimelineMax } from "gsap";
import Img from "../../components/atm.Image";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
`;

class SingleImage extends Component {
  state = {};
  entering(utils) {
    let tl = new TimelineMax();
    tl.staggerFrom(utils.target, 5, { alpha: 0, x: 800 });
    return tl;
  }

  componentDidMount() {}

  render() {
    return <Img src={this.props.src} width="100%" name="image" />;
  }
}

export default SingleImage;
