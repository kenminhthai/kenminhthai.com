import React, { Component } from "react";
import ReactDOM from "react-dom";
import queryString from "query-string";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import GSAP from "react-gsap-enhancer";
import { TimelineMax, TweenMax, TweenLite, TimelineLite } from "gsap";
import Project from "./project";
import projects from "../../../shared/projects.json";
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
      projectId: this.props.location.search
        ? projects.find(
            project =>
              queryString.parse(this.props.location.search).project ===
              project.slug
          ).id - 1
        : null,
      isShowing: 0
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
    tl.staggerFrom(content, 0.5, { opacity: "0" });
    return tl;
  }

  componentDidMount(callback) {
    this.addAnimation(this.setupScreens);
    if (this.state.projectId)
      this.setState({ isShowing: this.state.projectId });
  }

  handleGetNextScreen() {
    if (this.state.isShowing < projects.length - 1) {
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
            {projects.map((project, index) => {
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
