import React from "react";
import styled from "styled-components";

import { GoBack } from "../../components/atm.GoBack";
import { SvgBtn } from "../../components/atm.SvgBtn";

const NavWrapper = styled.div`
  position: relative;
  z-index: 5;
`;

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  max-width: 100vw;
  padding: 20px 5%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
`;

const BtnWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 0 1rem;
`;

export const NavBtns = props => {
  const index = props.projectIndex;
  const location = props.history.goBack;

  return (
    <NavWrapper>
      <GoBack location={location} />
    </NavWrapper>
  );
};
