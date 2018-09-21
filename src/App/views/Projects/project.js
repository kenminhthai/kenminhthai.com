import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import styled from "styled-components";
import ProjectMedia from "./projectMedia";
import ProjectInfo from "./projectInfo";
import { MainWrapper } from "../../components/Wrapper";

import { TimelineMax, TimelineLite } from "gsap";

const Box = styled.section`
  ${MainWrapper};
  height: 100%;
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

  render() {
    return this.props.show ? (
      <TransitionGroup component={null}>
        <ProjectInfo info={this.props.project} />
        <ProjectMedia src={this.props.project.mediaSrc} />
      </TransitionGroup>
    ) : null;
  }
}

export default Project;
