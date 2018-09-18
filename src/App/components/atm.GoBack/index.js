import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.span`
  background: pink;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const GoBack = props => {
  return (
    <Button>
      <Link to="/" exact>
        Back to home
      </Link>
    </Button>
  );
};
