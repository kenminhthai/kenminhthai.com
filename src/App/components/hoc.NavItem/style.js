import styled, { css } from "styled-components";

const NavItem = css`
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

export const StyledNavItem = styled.li`
  ${NavItem} color: #c9c5c4;
`;
