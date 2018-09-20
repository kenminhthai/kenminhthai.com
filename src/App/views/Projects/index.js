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

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  max-width: 100vw;
  padding: 20px 5%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
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
    return (
      <main>
        <HeadWrapper>
          <GoBack />
          <NavControl
            getNextScreen={this.handleGetNextScreen}
            getPrevScreen={this.handleGetPrevScreen}
          />
        </HeadWrapper>
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
