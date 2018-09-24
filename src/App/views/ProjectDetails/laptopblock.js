import React, { Component } from "react";
import styled from "styled-components";
import { TransitionGroup, Transition } from "react-transition-group";
import { TweenLite, TimelineLite, TimelineMax, Power3 } from "gsap";
import { theme } from "../../utils/theme";
import { Caption } from "../../components/atm.Caption";
import { getOffset } from "../../utils/helpers";
import { ReactDOM } from "react-dom";

const LaptopWrapper = styled.div`
  background: ${theme.bg.wash};
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  @media (max-width: 767px) {
    padding: 4rem 0 2rem 0;
  }

  @media (min-width: 768px) {
    padding: 5rem 0 3rem 0;
  }
`;

const Laptop = styled.div`
  background: url("../assets/imgs/laptop.png") top center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 767px) {
    height: ${props => `${props.width * 0.9}px`};
    width: ${props => `${props.width}px`};
  }

  @media (min-width: 768px) {
    height: 600px;
    width: 100vw;
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
  }
`;

const ScreenNav = styled.ul`
  list-style: none;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  @media (min-width: 768px) {
  }
  @media (max-width: 767px) {
    margin-top: 3rem;
  }
`;

const ScreenDots = styled.li`
  background: ${props =>
    props.active ? `${theme.brand.default}` : `${theme.bg.inactive}`};
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
    this.animate = React.createRef();
    this.handleSelected = this.handleSelected.bind(this);
  }

  setScreenWidth() {
    this.setState({ screenWidth: window.innerWidth });
  }

  handleSelected(id) {
    this.setState({ screenActive: id });
    TweenLite.from(this.animate.current, 1, { x: "100%" });
    TweenLite.to(this.animate.current, 1, { x: 0, ease: Power3.easeIn });
  }

  componentDidMount() {
    this.setScreenWidth();
    TweenLite.from(this.animate.current, 1, {
      x: "100%",
      ease: Power3.easeOut
    });
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
            <img src={src} width="100%" ref={this.animate} />
            <ScreenNav>{screenDots}</ScreenNav>
          </Screen>
        </Laptop>
      </LaptopWrapper>
    );
  }
}

export default LaptopBlock;
