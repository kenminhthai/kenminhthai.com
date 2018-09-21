import React from "react";
import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${props => (props.height ? `${props.height}` : "auto")};
  justify-content: center;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 5%;
  overflow-y: scroll;
  width: 100%;
`;

export const LoadingWrapper = styled.div`
  align-item: center;
  display: flex;
  height: 100%;
  justifu-content: center;
  left: 0;
  opacity: ${props => (props.isLoading ? "1" : "0")};
  position: fixed;
  top:0;
  visibility: ${props => (props.isLoading ? "visible" : "hidden")}
  width: 100%;
  z-index: 999;
`;

export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
  padding-bottom: ${props =>
    props.paddingBottom ? `${props.paddingBottom}` : "0px"};
  z-index: 20;
`;
