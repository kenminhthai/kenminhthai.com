import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import GSAP from "react-gsap-enhancer";
import { TimelineMax, TweenMax, TweenLite, TimelineLite } from "gsap";
import Project from "./project";
import { NavControl } from "./navigation";
import { GoBack } from "../../components/atm.GoBack";
import Grid from "../../components/atm.Grid";
import Column from "../../components/atm.Column";
import {
  wrapperStyles,
  contentWrapperStyles
} from "../../components/atm.Wrapper";

const ContentWrapper = styled.div`
  ${contentWrapperStyles};
  background: #fff;
  overflow: hidden;
  z-index: 2;
`;

function leaveAnimation(utils) {
  const tl = new TimelineMax();
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTransitioning: false,
      initFirstScreen: false,
      isShowing: 0,
      projectList: this.props.data
    };
    this.handleGetNextScreen = this.handleGetNextScreen.bind(this);
    this.handleGetPrevScreen = this.handleGetPrevScreen.bind(this);
  }

  getInitialState() {
    return {
      loading: true
    };
  }

  enterAnimation(utils) {
    var tl = new TimelineMax();
    tl.staggerFrom(utils.target, 2, {
      opacity: 1,
      y: "-= 300px"
    });
    return tl;
  }

  setupScreens(utils) {
    let content = utils.target.findInChildren({ name: "projectlist" });
    let tl = new TimelineLite();

    tl.staggerFrom(content, 1, { autoAlpha: "0" });
    return tl;
  }

  componentDidMount(callback) {
    this.addAnimation(this.setupScreens);
  }

  getCurrentScreen() {}

  handleGetNextScreen() {
    if (this.state.isShowing < this.state.projectList.length - 1) {
      this.setState({ isShowing: this.state.isShowing + 1 });
    }
  }

  handleGetPrevScreen() {
    if (this.state.isShowing > 0)
      this.setState({ isShowing: this.state.isShowing - 1 });
  }

  render() {
    const timeout = { enter: 500, exit: 500 };
    const projectList = this.props.data;
    return (
      <main>
        <GoBack />
        <NavControl
          getNextScreen={this.handleGetNextScreen}
          getPrevScreen={this.handleGetPrevScreen}
        />
        <ContentWrapper name="projectlist">
          <TransitionGroup>
            {this.state.projectList.map((project, index) => {
              return (
                <Project
                  key={project.slug}
                  show={this.state.isShowing === index ? true : false}
                  projectIndex={index}
                  project={project}
                />
              );
            })}
          </TransitionGroup>
        </ContentWrapper>
      </main>
    );
  }
}

export default GSAP()(Projects);
