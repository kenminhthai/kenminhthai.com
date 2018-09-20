import React from "react";
import styled from "styled-components";
import theme from "../global";
import Icon from "../Icons";

const svgBtnStyle = styled.button`
  background-color: transparent;
  color: ${props =>
    props.disabled
      ? props.theme.bg.inactive
      : props.color
        ? eval(`props.theme.${props.color}`)
        : props.theme.text.alt};
  cursor: pointer;
  padding: 0;
  height: 32px;
  width: 32px;
  &:hover {
    color: ${props =>
      props.disabled
        ? props.theme.bg.inactive
        : props.hoverColor
          ? eval(`props.theme.${props.color}`)
          : props.theme.brand.alt};
    transform: ${props => (props.disabled ? "none" : "scale(1.05)")};
    box-shadow: none;
  }
`;

export const SvgBtn = (props: IconProps) => (
  <svgBtnStyle {...props}>
    <Icon glyph={props.glyph} />
  </svgBtnStyle>
);
