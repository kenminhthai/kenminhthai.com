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
  list-style: none;
  display: inline-block;

  @media screen and (max-width: 767px) {
    padding-left: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 12px;
  }
`;

export const StyledNavItem = styled.li`
  ${NavItem} color: #c9c5c4;
`;
