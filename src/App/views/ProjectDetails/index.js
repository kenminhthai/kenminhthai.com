import React, { Component } from "react";
import styled from "styled-components";
import GSAP from "react-gsap-enhancer";
import {
  MainWrapper,
  ContentWrapper,
  HeaderWrapper
} from "../../components/Wrapper";

import InfoBlock from "./infoblock";
import ImageBlock from "./imagebock";
import LaptopBlock from "./laptopblock";
import { NavBtns } from "./navigation";

// const ContentBox = styled(ContentWrapper)`
//   align-items: center;
//   display: flex;
//   justify-content: space-between;
//   overflow: hidden;
//   z-index: 2;

//   @media (max-width: 767px) {
//     flex-direction: column;
//   }

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

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
      <MainWrapper>
        <HeaderWrapper>
          <NavBtns {...this.props} />
        </HeaderWrapper>
        <InfoBlock info={project} {...this.props} />
        {content}
      </MainWrapper>
    );
  }
}

export default ProjectDetails;
