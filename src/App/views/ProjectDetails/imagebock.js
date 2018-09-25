import React from "react";
import styled, { css } from "styled-components";
import { Caption } from "../../components/atm.Caption";
import Img from "../../components/atm.Image";

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
`;

const Image = styled(Img)`
  align-self: center;
  max-width: 100%;
`;

const CaptionWrapper = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 4rem 0;
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
      <Image src={props.src.origin} pre={props.src.pre} width="100%" />
      {captionElement}
    </ImgWrapper>
  );
};

export default ImageBlock;
