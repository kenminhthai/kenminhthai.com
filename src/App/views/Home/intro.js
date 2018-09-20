import React from "react";
import styled from "styled-components";
import { fontStack } from "../../components/global/index";
import { P } from "../../components/global";

const TextContainer = styled.div`
  align-items: center;
  align-self: strech;
  display: flex;
  flex: auto;
  height: Calc(100vh - 200px);
  justify-content: center;
`;

const IntroText = styled.div`
  max-width: 40vw;
  text-align: center;
`;

export const Intro = props => {
  return (
    <TextContainer>
      <IntroText>
        <P>{props.content}</P>
      </IntroText>
    </TextContainer>
  );
};
