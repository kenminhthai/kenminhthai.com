import React from "react";
import styled, { css } from "styled-components";
import { Caption } from "../../components/atm.Caption";

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
`;

const Image = styled.img`
  align-self: center;
  max-width: 100%;
  width: 100%;
`;

const CaptionWrapper = styled.div`
  margin: 1rem 0;
`;

const ImageBlock = props => {
  const { caption, bordered } = props;
  const captionElement = caption ? (
    <CaptionWrapper>
      <Caption value={caption} />
    </CaptionWrapper>
  ) : null;

  return (
    <ImgWrapper>
      <Image src={props.src} />
      {captionElement}
    </ImgWrapper>
  );
};

export default ImageBlock;
