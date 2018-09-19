import React from "react";
import styled from "styled-components";

const TextBg = styled.div`
  font-size: 77vw;
  color: red;
  position: absolute;
  bottom: -63%;
  left: -24%;
  z-index: -1;
  font-weight: 900;
`;

export const TxtBg = props => {
  return <TextBg key={props.text}>{props.text}</TextBg>;
};
