import React from "react";
import styled, { css } from "styled-components";
import { FlexCol } from "../global";

const BaseColumn = styled(FlexCol)`
  align-items: stretch;
  margin: 32px 16px;

  @media (max-width: 768px) {
    margin: 0;
    max-width: 100%;
    order: ${props => (props.order ? `${props.order}` : "")};
  }

  ${p =>
    p.hideOnMobile &&
    css`
      @media screen and (max-width: 768px) {
        display: none;
      }
    `};
`;

const PrimaryColumn = styled(BaseColumn)`
  min-width: 320px;
  flex: 2 1 50%;
  max-width: 640px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin-top: 2px;
    flex: none;
  }
`;

const SecondaryColumn = styled(BaseColumn)`
  min-width: 240px;
  flex: 1 1 40%;
  max-width: 480px;

  @media (max-width: 768px) {
    flex: none;
    align-self: stretch;
    max-width: 100%;
  }
`;

const OnlyColumn = styled(PrimaryColumn)`
  max-width: 840px;
  flex: 0 0 75%;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 100%;
    width: 100%;
  }
`;

export const Column = (props: Object): React$Element<any> => {
  if (props.type === "primary") {
    return <PrimaryColumn {...props}>{props.children}</PrimaryColumn>;
  } else if (props.type === "secondary") {
    return <SecondaryColumn {...props}>{props.children}</SecondaryColumn>;
  } else if (props.type === "only") {
    return <OnlyColumn {...props}>{props.children}</OnlyColumn>;
  } else {
    return <BaseColumn {...props}>{props.children}</BaseColumn>;
  }
};

export default Column;
