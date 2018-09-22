import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import * as Segment from "segment-js";
import GSAP from "react-gsap-enhancer";
import { TimelineMax, TweenMax, TweenLite, Power2, Power3 } from "gsap";

import { theme } from "../../utils/theme";

function enterAnimation(utils) {
  let tl = new TimelineMax({
    delay: 0.3,
    onComplete: () => TweenLite.to(utils.target, 0.5, { y: "-100vh" })
  });
  let fetching = utils.target.findInChildren({ name: "fetching" });
  let loading = utils.target.findInChildren({ name: "loading" });
  let showing = utils.target.findInChildren({ name: "showing" });
  let staggerOptionsFrom = { y: 20, alpha: 0, ease: Power3.easeOut };
  let staggerOptionsTo = { y: 0, alpha: 1, ease: Power3.easeOut };
  let toOptions = { y: -20, alpha: 0 };

  tl.staggerFromTo(loading, 0.5, staggerOptionsFrom, staggerOptionsTo, 0.5);
  tl.to(loading, 0.5, toOptions);
  tl.staggerFromTo(fetching, 1, staggerOptionsFrom, staggerOptionsTo, 0.5);
  tl.to(fetching, 0.5, toOptions);
  tl.staggerFromTo(showing, 1, staggerOptionsFrom, staggerOptionsTo, 0.5);
  tl.to(showing, 0.5, toOptions);

  return tl;
}

const Wrapper = styled.div`
  background: ${theme.brand.default};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const Text = styled.span`
  position: absolute;
  color: ${theme.brand.wash};
  font-size: 0.85rem;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

class Loading extends Component {
  componentDidMount() {
    this.addAnimation(enterAnimation);
  }

  render() {
    return (
      <Wrapper>
        <Text name="fetching">Fetching ...</Text>
        <Text name="loading">Loading ...</Text>
        <Text name="showing">Showing ...</Text>
      </Wrapper>
    );
  }
}

export default GSAP()(Loading);
