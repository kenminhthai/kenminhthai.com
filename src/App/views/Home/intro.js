import React from "react";
import styled from "styled-components";
import { fontStack } from "../../components/global/index";

const TextContainer = styled.div`
  align-items: center;
  align-self: strech;
  display: flex;
  flex: auto;
  height: 50vh;
  justify-content: center;
`;

const IntroText = styled.div`
  ${fontStack} font-size: 1.2em;
  line-height: 1.6;
  max-width: 40vw;
  text-align: center;
`;

export const Intro = props => {
  return (
    <TextContainer>
      <IntroText>{props.content}</IntroText>
    </TextContainer>
  );
};
