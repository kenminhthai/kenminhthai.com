import React, { Component } from "react";
import styled from "styled-components";
import { Shadow } from "../global";
import { theme } from "../../utils/theme";

import { SvgBtn } from "../atm.SvgBtn";

const Button = styled(SvgBtn)`
  align-items: center;
  background: ${theme.bg.default};
  border-radius: 50%;
  bottom: 5%;
  box-shadow: ${Shadow.low} ${theme.bg.wash};
  cursor: pointer;
  display: flex;
  position: fixed;
  transition: all 300ms ease-in-out;
  right: 5%;
  height: 40px;
  justify-content: center;
  width: 40px;

  &:hover {
    background: ${theme.brand.default};
    color: ${theme.brand.wash};
    transform: translateY(-10px);
  }
`;

class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTopShow: false,
      speed: 200,
      distance: 300
    };
    this.isScrollTop = this.isScrollTop.bind(this);
    this.handleRunScroll = this.handleRunScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.isScrollTop();
    window.addEventListener("scroll", this.handleScroll);
  }

  isScrollTop() {
    if (
      document.body.scrollTop > this.state.distance ||
      document.documentElement.scrollTop > this.state.distance
    )
      this.setState({ scrollTopShow: true });
  }

  handleScroll() {
    this.isScrollTop();
  }

  // Refactor this
  handleRunScroll() {
    const { performance, requestAnimationFrame } = window;
    const start = performance.now(); // Location of back to top button
    // document.body.scrollTop is used by Chrome and
    // document.documentElement.scrollTop is used by all other browsers
    const initScrollTop =
      document.body.scrollTop === 0 ? document.documentElement : document.body;
    const pxsToScrollBy = initScrollTop - 0;
    const _self = this;
    requestAnimationFrame(step);
    function step(timeStamp) {
      const delta = timeStamp - start;
      const progress = Math.min(delta / 200, 1);
      _self.setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  }

  setScrollTop(value) {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  }

  // scrollToTop(el, destination = 0, scrollSpeed = 200) {
  //   if (scrollSpeed < 0) return;

  //   const difference = destination - el.scrollTop;
  //   const perTick = (difference / scrollSpeed) * 10;
  //   setTimeout(() => {
  //     el.ScrollTop = el.ScrollTop + perTick;
  //     if (el.scrollTop === destination) {
  //       return;
  //     }
  //     this.scrollToTop(el, destination, scrollSpeed - 10);
  //   }, 10);
  // }

  render() {
    return (
      this.state.scrollTopShow && (
        <Button
          ref="backToTop"
          glyph="up"
          title="Scroll to top"
          onClick={this.handleRunScroll}
        />
      )
    );
  }
}

export default ScrollTop;
