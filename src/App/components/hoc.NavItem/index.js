import React from "react";
import Links from "../atm.NavLink";
import styled, { css } from "styled-components";
import { theme } from "../../utils/theme";

const Item = styled.div`
  color: #c9c5c4
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  font-size: .85rem;
  line-height: 1;
  position: relative;
  text-align: center;
  list-style: none;
  display: inline-block;

  :hover {
    color: ${theme.brand.default};
    transition: color 200ms ease-in-out;
  }

  @media screen and (max-width: 767px) {
    padding-left: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 12px;
  }
`;

const NavItem = props => (
  <Item>
    <Links
      key={props.name}
      link={props.link}
      exact={props.exact}
      name={props.name}
    />
  </Item>
);

export default NavItem;
