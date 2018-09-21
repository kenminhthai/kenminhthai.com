import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import GSAP from "react-gsap-enhancer";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { TimelineLite } from "gsap";
import { theme } from "../../utils/theme";
import { H1, H6, P, Span } from "../../components/global";

const ProjectBox = styled.div`
  align-self: center;
  padding: 20px 0;
  @media (max-width: 768px) {
    flex: 1 0 100%;
    flex-shrink: 1;
    order: 1;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`;

const InfoBox = styled.div`
  margin-right: 2rem;
`;

const DescBlock = styled.div`
  padding: 20px 0;
`;

const CTA = styled.div`
  color: ${theme.brand.default};
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
          <H1 name="title">{this.props.info.name}</H1>
          <InfoRow name="infobox">
            <InfoBox>
              <H6 color={theme.text.wash}>Role</H6>
              <P>{this.props.info.role}</P>
            </InfoBox>
            <InfoBox>
              <H6 color={theme.text.wash}>Completed</H6>
              <P>{this.props.info.year}</P>
            </InfoBox>
          </InfoRow>
          <DescBlock name="desc">
            <P>{this.props.info.desc}</P>
          </DescBlock>
          <CTA name="cta">
            <NavLink to={this.props.info.link} exact>
              view project
            </NavLink>
          </CTA>
        </ProjectBox>
      </TransitionGroup>
    );
  }
}

export default GSAP()(ProjectInfo);
