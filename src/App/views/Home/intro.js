import React from "react";
import styled from "styled-components";
import { fontStack } from "../../components/global/index";
import { P } from "../../components/global";

const TextContainer = styled.div`
  align-items: center;
  align-self: strech;
  display: flex;
  flex: auto;
  height: Calc(100% - 200px);
  justify-content: center;
`;

const IntroText = styled.div`
  text-align: center;
  @media (max-width: 767px) {
    margin-top: 10vh;
  }
  @media (min-width: 768px) {
    margin-top: 20vh;
    max-width: 45vw;
  }
`;

export const Intro = props => {
  return (
    <IntroText>
      <P>{props.content}</P>
    </IntroText>
  );
};
