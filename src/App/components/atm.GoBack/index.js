import React from "react";
import { Link } from "react-router-dom";
import { SvgBtn } from "../atm.SvgBtn";
import styled from "styled-components";

export const GoBack = props => {
  return (
    <Link to="/" exact>
      <SvgBtn glyph={"undo"} />
    </Link>
  );
};
