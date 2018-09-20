import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import GSAP from "react-gsap-enhancer";
import { TweenLite, TimelineLite } from "gsap";

import Img from "../../components/atm.Image";

class SingleImage extends Component {
  state = {};

  entering({ target }) {
    let tl = new TimelineLite();
    tl.staggerFrom(target, 1, { x: "+=100px" });
    console.log(target);
    return tl;
  }

  componentDidMount() {
    this.addAnimation(this.entering);
  }

  render() {
    return (
      <TransitionGroup>
        <Img src={this.props.src} width="100%" />
      </TransitionGroup>
    );
  }
}

export default GSAP()(SingleImage);
