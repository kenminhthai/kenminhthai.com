import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import GSAP from "react-gsap-enhancer";
import { TransitionGroup } from "react-transition-group";
import styled, { keyframes } from "styled-components";
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
  color: ${theme.brand.alt};
  padding: 10px;
  position: relative;
  overflow: hidden;
  display: inline-block;
  transition: transform 300ms ease-out 100ms, color 300ms ease-in-out;

  &::before {
    content: "";
    background: ${theme.brand.default};
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    transition: tranform 200ms 300ms;
    transform: translateY(100%);
  }

  &::after {
    content: "";
    background: ${theme.brand.default};
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    transition: all 100ms 100ms;
    transform: translateY(-100%);
  }

  &:hover {
    color: ${theme.brand.default};

    &::before,
    &::after {
      transform: translateY(0);
    }
    > a {
      &::before,
      &::after {
        transform: translateX(0);
      }
    }
  }

  > a {
    &::before {
      content: "";
      background: ${theme.brand.default};
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      transition: all 100ms;
      transform: translateX(-100%);
    }

    &::after {
      content: "";
      background: ${theme.brand.default};
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 2px;
      transition: all 100ms 200ms;
      transform: translateX(100%);
    }
  }
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
