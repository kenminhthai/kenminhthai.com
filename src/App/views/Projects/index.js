import React, { Component } from "react";
import styled from "styled-components";
import { ProjectMedia } from "./projectMedia";
import { ProjectInfo } from "./projectInfo";
import { ProjectList } from "../../utils";
import { NavControl } from "./navigation";
import { GoBack } from "../../components/atm.GoBack";
import Grid from "../../components/atm.Grid";
import Column from "../../components/atm.Column";
import {
  wrapperStyles,
  contentWrapperStyles
} from "../../components/atm.Wrapper";

const ContentWrapper = styled.main`
  ${contentWrapperStyles};
  overflow: hidden;
  z-index: 2;
`;

const Box = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 5%;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

class Projects extends Component {
  state = {
    projects: ProjectList
  };
  render() {
    return (
      <ContentWrapper>
        <GoBack />
        {this.state.projects.map(project => {
          return (
            <Box>
              <ProjectInfo
                name={project.name}
                role={project.role}
                company={project.company}
                year={project.year}
                desc={project.desc}
                link={project.link}
              />
              <ProjectMedia src={project.mediaSrc} />
            </Box>
          );
        })}
        <NavControl next={this.state.projects} prev={this.state.projects} />
      </ContentWrapper>
    );
  }
}

export default Projects;
