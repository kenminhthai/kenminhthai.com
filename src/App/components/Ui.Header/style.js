import styled, { css } from "styled-components";

const header = css`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
  margin-top: 20px;
  padding: 0 10%;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 3;
`;

export const StyledHeader = styled.header`
  ${header};
`;
