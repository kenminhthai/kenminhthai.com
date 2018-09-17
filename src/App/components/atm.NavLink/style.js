import styled, { css } from "styled-components";

const links = css`
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  position: relative;
  text-align: center;
  padding: 8px 12px;
  list-style: none;
  display: inline-block;
`;

export const StyledLink = styled.li`
  ${links} color: #000;
`;
