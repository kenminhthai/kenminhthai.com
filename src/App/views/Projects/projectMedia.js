import React from "react";
import styled from "styled-components";
import Img from "../../components/atm.Image";

const Wrapper = styled.div`
  flex: 1 0 calc(65% - 8px);
`;

export const ProjectMedia = props => {
  return (
    <Wrapper>
      <Img src={props.src} alt="later" width="100%" />
    </Wrapper>
  );
};
