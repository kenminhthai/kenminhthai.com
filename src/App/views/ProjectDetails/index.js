import React, { Component } from "react";
import styled from "styled-components";
import GSAP from "react-gsap-enhancer";

import InfoBlock from "./infoblock";
import ImageBlock from "./imagebock";
import LaptopBlock from "./laptopblock";
import { NavBtns } from "./navigation";

const StyledBox = styled.main`
  height: auto;
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;
`;

class ProjectDetails extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { data } = this.props;
    const projectName = this.props.match.params.projectname;
    const project = data.find(p => p.link.split("/")[2] === projectName);
    const content = project.content.map(content => {
      switch (content.type) {
        case "img":
          return <ImageBlock src={content.src} />;
        case "screen-viewer":
          return <LaptopBlock src={content.collection} />;
      }
    });
    return (
      <StyledBox>
        <NavBtns {...this.props} />
        <InfoBlock info={project} {...this.props} />
        {content}
      </StyledBox>
    );
  }
}

export default ProjectDetails;
