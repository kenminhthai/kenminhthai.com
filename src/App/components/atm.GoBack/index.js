import React from "react";
import { Link } from "react-router-dom";
import { SvgBtn } from "../atm.SvgBtn";
import styled from "styled-components";

export const GoBack = props => {
  return <SvgBtn glyph={"undo"} onClick={props.location} />;
};
