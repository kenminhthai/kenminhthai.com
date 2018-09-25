import React from "react";
import { Link } from "react-router-dom";
import { SvgBtn } from "../atm.SvgBtn";
import styled from "styled-components";
import { theme } from "../../utils/theme";

const Btn = styled(SvgBtn)`
  cursor: pointer;

  &:hover {
    color: ${theme.brand.default};
    transform: scale(1.35, 1.35);
    transition: all 300ms ease-in-out;
  }
`;

const LinkIcon = styled(SvgBtn)`
  cursor: pointer;

  &:hover {
    color: ${theme.brand.default};
    transform: scale(1.35, 1.35);
    transition: all 300ms ease-in-out;
  }
`;

export const GoBack = props => {
  const destination = `${props.location}?project=${props.id}`;
  return typeof props.location === "string" ? (
    <Link to={destination}>
      <LinkIcon glyph={"undo"} />
    </Link>
  ) : (
    <Link to="/">
      <LinkIcon glyph={"undo"} />
    </Link>
  );
};

// export const GoBack = props => {
//   return <Btn glyph={"undo"} onClick={props.location} />;
// };
