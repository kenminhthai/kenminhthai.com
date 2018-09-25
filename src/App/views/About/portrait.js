import React from "react";
import styled from "styled-components";
import ProgressiveImage from "react-progressive-image";
import Img from "../../components/atm.Image";

const L = "/assets/imgs/kenPortrait.png";
const S = "/assets/imgs/kenPortrait-pre.png";

const Pic = styled.div`
  align-self: center;
  max-width: 320px;
`;

export const Portrait = () => {
  return (
    <Pic>
      <Img src={L} pre={S} alt="ken portrait" width="100%" />
    </Pic>
  );
};
