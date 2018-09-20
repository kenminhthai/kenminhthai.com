import React, { Component } from "react";
import styled from "styled-components";
import GSAP from "react-gsap-enhancer";
import { TransitionGroup } from "react-transition-group";
import { TweenLite, TimelineLite } from "gsap";
import { theme } from "../../utils/theme";
import { Caption } from "../../components/atm.Caption";
import SingleImage from "./singleImage";

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
  width: 1024px;
}
`;

const Screen = styled.div`
  max-width: 720px;
  margin-top: 3rem;
  border-radius: 10px;
  position: absolute;
`;

const ScreenNav = styled.ul`
  list-style: none;
  margin-top: 1rem;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
`;

const ScreenDots = styled.li`
  background: ${props =>
    props.active ? `${theme.brand.default}` : `${theme.brand.wash}`};
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
  height: ${props => (props.active ? "12px" : "8px")};
  transition: all 500ms ease-in-out;
  width: ${props => (props.active ? "12px" : "8px")};
`;

class LaptopBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenActive: 1
    };
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(id) {
    this.setState({ screenActive: id });
  }

  componentDidMount() {}

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

    console.log();

    return (
      <LaptopWrapper>
        <Laptop>
          <Screen>
            <SingleImage src={src} />
            <ScreenNav>{screenDots}</ScreenNav>
          </Screen>
        </Laptop>
      </LaptopWrapper>
    );
  }
}

export default GSAP()(LaptopBlock);
