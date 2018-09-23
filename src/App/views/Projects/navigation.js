import React from "react";
import styled from "styled-components";
import { SvgBtn } from "../../components/atm.SvgBtn";

import { theme } from "../../utils/theme";

const NavWrapper = styled.div`
  z-index: 5;
`;

const BtnWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 0 1rem;

  &:hover {
    color: ${theme.brand.default};
    transform: scale(1.35, 1.35);
    transition: all ease-in-out 300ms;
  }
`;

export const NavControl = props => {
  const index = props.projectIndex;
  return (
    <NavWrapper>
      <BtnWrapper>
        <SvgBtn glyph={"view-back"} onClick={props.getPrevScreen} />
      </BtnWrapper>
      <BtnWrapper>
        <SvgBtn glyph={"view-forward"} onClick={props.getNextScreen} />
      </BtnWrapper>
    </NavWrapper>
  );
};
