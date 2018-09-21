import React from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";

const TextBg = styled.div`
  color: ${theme.brand.default};
  position: absolute;
  z-index: -1;
  font-weight: 900;

  @media (max-width: 767px) {
    font-size: 125vw;
    bottom: -25%;
    left: -40%;
  }
  @media (min-width: 768px) {
    font-size: 77vw;
    bottom: -63%;
    left: -24%;
  }
`;

export const TxtBg = props => {
  return <TextBg key={props.text}>{props.text}</TextBg>;
};
