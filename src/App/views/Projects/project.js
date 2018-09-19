import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import styled from "styled-components";

import { ProjectMedia } from "./projectMedia";
import { ProjectInfo } from "./projectInfo";
import { TimelineMax, TimelineLite } from "gsap";

const Box = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 5%;
  position: absolute;
  width: 100%;
`;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreenIndex: null
    };
    this.name = `project-${props.projectIndex + 1}`;
  }

  setupScreens({ target }) {
    let tl = new TimelineLite();
    tl.to(target, 0, { opacity: "0" });
    return tl;
  }

  entering({ target }) {
    let tl = new TimelineLite();
    tl.to(target, 1, { backgroundColor: "red" });
    return tl;
  }

  leaving({ target }) {
    let tl = new TimelineLite();
    tl.to(target, 1, { opacity: "0" });
    return tl;
  }

  componentWillEnter() {
    console.log("entering");
  }

  ComponentWillLeave() {}

  render() {
    return this.props.show ? (
      <Box>
        <ProjectInfo info={this.props.project} />
        <ProjectMedia src={this.props.project.mediaSrc} />
      </Box>
    ) : null;
  }
}

export default Project;
