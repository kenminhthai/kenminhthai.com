import React, { Component } from "react";
import ReactDOM from "react-dom";
import GSAP from "react-gsap-enhancer";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { TimelineLite } from "gsap";

const ProjectBox = styled.div`
  align-self: center;
  padding: 20px 0;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const InfoBox = styled.div`
  background: white;
`;

const DescBlock = styled.div`
  padding: 20px;
`;

const CTA = styled.div`
  margin-top: 30px;
`;

class ProjectInfo extends Component {
  state = {};
  entering({ target }) {
    const infobox = target;
    let tl = new TimelineLite();
    tl.staggerFrom(infobox, 0.75, { x: "-100%" });
    return tl;
  }

  componentDidMount() {
    this.addAnimation(this.entering);
  }
  render() {
    return (
      <TransitionGroup component={null}>
        <ProjectBox>
          <h1 name="title">{this.props.info.name}</h1>
          <InfoRow name="infobox">
            <InfoBox>
              <div>Role</div>
              <div>{this.props.info.role}</div>
            </InfoBox>
            <InfoBox>
              <div>Company</div>
              <div>{this.props.info.company}</div>
            </InfoBox>
            <InfoBox>
              <div>Completed</div>
              <div>{this.props.info.year}</div>
            </InfoBox>
          </InfoRow>
          <DescBlock name="desc">{this.props.info.desc}</DescBlock>
          <CTA name="cta">
            <a href={this.props.info.link}>view project</a>
          </CTA>
        </ProjectBox>
      </TransitionGroup>
    );
  }
}

export default GSAP()(ProjectInfo);
