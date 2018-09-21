import React, { Component } from "react";
import styled from "styled-components";
import GSAP from "react-gsap-enhancer";
import { TransitionGroup } from "react-transition-group";
import { TweenLite, TimelineLite } from "gsap";
import { theme } from "../../utils/theme";
import { Caption } from "../../components/atm.Caption";
import SingleImage from "./singleImage";
import { getOffset } from "../../utils/helpers";

const LaptopWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Laptop = styled.div`
  background: url("../assets/imgs/laptop.png") top center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  height: 600px;
  position: relative;
  @media (max-width: 767px) {
    width: ${props => `${props.width}px`};
  }

  @media (min-width: 768px) {
    width: 1024px;
  }}
`;

const Screen = styled.div`
  border-radius: 4px;
  position: absolute;
  overflow: hidden;
  @media (max-width: 767px) {
    margin-top: 15px;
    width: ${props => `${props.width * 0.7}px`};
  }

  @media (min-width: 768px) {
    margin-top: 3rem;
    width: 720px;
  }}
`;

const ScreenNav = styled.ul`
  list-style: none;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
`;

const ScreenDots = styled.li`
  background: ${props =>
    props.active ? `${theme.brand.default}` : `${theme.bg.wash}`};
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
  height: ${props => (props.active ? "12px" : "8px")};
  transition: color 300ms ease-in, width 200ms ease-in-out;
  width: ${props => (props.active ? "12px" : "8px")};
`;

class LaptopBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenActive: 1,
      isMobileView: false,
      screenWidth: 0
    };
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(id) {
    this.setState({ screenActive: id });
  }

  setScreenWidth() {
    this.setState({ screenWidth: window.innerWidth });
  }

  isInView(scroll) {}

  componentDidMount() {
    this.setScreenWidth();
  }

  render() {
    const { caption, bordered } = this.props;
    const captionElement = caption ? <Caption value={caption} /> : null;
    const img = this.props.src.find(pic => pic.id === this.state.screenActive);
    let { src } = img;
    const screenDots = this.props.src.map(
      item =>
        item.id === this.state.screenActive ? (
          <ScreenDots key={item.id} active />
        ) : (
          <ScreenDots
            key={item.id}
            onClick={() => this.handleSelected(item.id)}
          />
        )
    );

    return (
      <LaptopWrapper>
        <Laptop width={this.state.screenWidth}>
          <Screen width={this.state.screenWidth}>
            <SingleImage src={src} />
            <ScreenNav>{screenDots}</ScreenNav>
          </Screen>
        </Laptop>
      </LaptopWrapper>
    );
  }
}

export default GSAP()(LaptopBlock);
