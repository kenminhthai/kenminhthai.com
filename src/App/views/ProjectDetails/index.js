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
import ScrollTop from "../../components/atmScrollTopBtn/index";

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
        case "head":
          return (
            <InfoBlock src={content.text} title={projectName} {...this.props} />
          );
        case "img":
          return <ImageBlock src={content.src} caption={content.caption} />;
        case "screen-viewer":
          return <LaptopBlock src={content.collection} />;
      }
    });
    return (
      <MainWrapper>
        <HeaderWrapper>
          <NavBtns {...this.props} />
        </HeaderWrapper>
        {content}
        <ScrollTop />
      </MainWrapper>
    );
  }
}

export default ProjectDetails;
