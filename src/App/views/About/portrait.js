import React from "react";
import styled from "styled-components";

import Img from "../../components/atm.Image";

const picSrc = "/assets/imgs/kenPortrait.png";

const Pic = styled.div`
  align-self: center;
  max-width: 320px;
`;

export const Portrait = () => {
  return (
    <Pic>
      <Img src={picSrc} alt="ken portrait" width="100%" />
    </Pic>
  );
};
