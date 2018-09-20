import React from "react";
import styled from "styled-components";
import { Caption } from "../../components/atm.Caption";

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageBlock = props => {
  const { caption, bordered } = props;
  const captionElement = caption ? <Caption value={caption} /> : null;

  return (
    <ImgWrapper>
      <img src={props.src} />
      {captionElement}
    </ImgWrapper>
  );
};

export default ImageBlock;
