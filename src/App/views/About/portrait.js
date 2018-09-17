import React from "react";
import styled from "styled-components";

import Img from "../../components/atm.Image";

const picSrc = "/assets/imgs/kenPortrait.png";

export const Portrait = () => {
  return <Img src={picSrc} alt="ken portrait" className="portrait" />;
};
