import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import GSAP from "react-gsap-enhancer";
import { TimelineMax, TweenMax, TweenLite, TimelineLite } from "gsap";
import Project from "./project";
import { NavControl } from "./navigation";
import { GoBack } from "../../components/atm.GoBack";

import {
  MainWrapper,
  ContentWrapper,
  HeaderWrapper
} from "../../components/Wrapper";

const ContentBox = styled(ContentWrapper)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

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

  setupScreens(utils) {
    let content = utils.target.findInChildren({ name: "projectlist" });
    let tl = new TimelineLite();
    console.log(utils);
    tl.staggerFrom(content, 0.5, { opacity: "0" });
    return tl;
  }

  componentDidMount(callback) {
    this.addAnimation(this.setupScreens);
  }

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
    const location = this.props.history.goBack;

    return (
      <MainWrapper height="100vh">
        <HeaderWrapper>
          <GoBack location={location} />
          <NavControl
            getNextScreen={this.handleGetNextScreen}
            getPrevScreen={this.handleGetPrevScreen}
          />
        </HeaderWrapper>
        <ContentBox name="projectlist">
          <TransitionGroup component={null}>
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
        </ContentBox>
      </MainWrapper>
    );
  }
}

export default GSAP()(Projects);
