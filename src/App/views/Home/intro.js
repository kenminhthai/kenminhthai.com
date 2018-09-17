import React from "react";
import styled from "styled-components";
import { fontStack } from "../../components/global/index";

const IntroText = styled.div`
  ${fontStack} display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  margin: 0 auto;
  max-width: 40vw;
  line-height: 1.6;
  text-align: center;
`;

export const Intro = props => {
  return <IntroText>{props.content}</IntroText>;
};
