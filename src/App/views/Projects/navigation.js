import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 5;
`;

export const NavControl = props => {
  const index = props.projectIndex;
  return (
    <NavWrapper>
      <button onClick={props.getNextScreen}>next</button>
      <button onClick={props.getPrevScreen}>prev</button>
    </NavWrapper>
  );
};
