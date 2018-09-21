import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  font-size: 3em;
  font-weight: 600;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
`;

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: none;
  width: 120px;
  height: 40px;
  top: 4px;
  position: relative;
  color: inherit;
`;

export const Logo = () => {
  return (
    <StyledLogo>
      <NavLink to="/" exact>
        <SvgWrapper>
          <Svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 193 50"
            aria-labelledby="title"
          >
            <title id="title">Ken Thai</title>
            <g>
              <path d="M7.9,49.1H1.4V0.4h6.4v35.4l9.5-12.4h7.3l-8.3,10.7l8.3,15h-7.3l-5.1-9.4l-4.4,6.1V49.1z" />
              <path
                d="M41.3,42.8c0.2,0.1,0.5,0.1,0.7,0.2c0.2,0,0.5,0,0.7,0c0.6,0,1.2-0.1,1.8-0.3c0.6-0.2,1.1-0.4,1.6-0.8
			c0.5-0.3,0.9-0.8,1.4-1.2c1.1-1.1,1.6-0.9,2.5,0.1c1.2,1.2,3.1,3.2,3.1,3.2c-0.6,0.9-1.3,1.6-2,2.3c-0.8,0.7-1.6,1.3-2.5,1.8
			c-0.9,0.5-1.8,0.8-2.8,1.1c-1,0.2-2,0.4-3.1,0.4c-1.8,0-3.4-0.3-5-1s-2.9-1.6-4.1-2.8c-1.2-1.2-2.1-2.6-2.7-4.3
			c-0.7-1.7-1-3.5-1-5.5c0-2,0.3-3.9,1-5.6c0.7-1.7,1.6-3.1,2.7-4.3c1.2-1.2,2.5-2.1,4.1-2.8c1.6-0.7,3.2-1,5-1c1,0,2.1,0.1,3.1,0.4
			c1,0.3,1.9,0.6,2.8,1.1c0.9,0.5,1.7,1.1,2.5,1.8c0.8,0.7,1.5,1.5,2.1,2.3L41.3,42.8z M44.5,29.3c-0.3-0.1-0.6-0.2-0.9-0.2
			c-0.3,0-0.6,0-0.9,0c-0.9,0-1.7,0.2-2.5,0.5c-0.8,0.3-1.4,0.8-2,1.4c-0.6,0.6-1,1.3-1.3,2.2c-0.3,0.9-0.5,1.8-0.5,2.9
			c0,0.2,0,0.5,0,0.8c0,0.3,0.1,0.6,0.1,0.9c0.1,0.3,0.1,0.6,0.2,0.9c0.1,0.3,0.2,0.5,0.3,0.8L44.5,29.3z"
              />
              <path
                d="M67.6,49.1h-6.4V23.3h1.5l2.1,2.5c1-1,2.2-1.7,3.5-2.2c1.3-0.5,2.7-0.8,4.1-0.8c1.5,0,3,0.3,4.3,0.9
			c1.4,0.6,2.5,1.4,3.6,2.5c1,1.1,1.8,2.3,2.4,3.7c0.6,1.4,0.9,2.9,0.9,4.5v14.7h-6.4V34.4c0-0.7-0.1-1.3-0.4-1.9
			c-0.2-0.6-0.6-1.1-1-1.6c-0.4-0.4-0.9-0.8-1.5-1.1c-0.6-0.3-1.2-0.4-1.8-0.4c-0.7,0-1.3,0.1-1.9,0.4c-0.6,0.3-1.1,0.6-1.5,1.1
			c-0.4,0.4-0.8,1-1,1.6c-0.2,0.6-0.4,1.2-0.4,1.9V49.1z"
              />
              <path
                d="M105.2,49.1c-1.5,0-3-0.3-4.4-0.9c-1.4-0.6-2.5-1.4-3.6-2.5s-1.8-2.3-2.4-3.7c-0.6-1.4-0.9-2.9-0.9-4.5v-7.7
			h-3.1v-6.5H94v-23h6.4v23h9.7v6.5h-9.7v7.7c0,0.7,0.1,1.3,0.4,1.9c0.2,0.6,0.6,1.1,1,1.6c0.4,0.4,1,0.8,1.5,1.1
			c0.6,0.3,1.2,0.4,1.9,0.4h4.8v6.5H105.2z"
              />
              <path
                d="M124.8,49.1h-6.4V0.4h6.4v24.1c0.8-0.6,1.6-1,2.4-1.3c0.8-0.2,1.6-0.4,2.5-0.4c1.5,0,3,0.3,4.4,0.9
			c1.4,0.6,2.5,1.4,3.5,2.5c1,1.1,1.8,2.3,2.4,3.7c0.6,1.4,0.9,2.9,0.9,4.5v14.7h-6.4V34.4h0c0-0.7-0.1-1.3-0.4-1.9
			c-0.2-0.6-0.6-1.1-1-1.6c-0.4-0.4-0.9-0.8-1.5-1.1c-0.6-0.3-1.2-0.4-1.8-0.4c-0.7,0-1.3,0.1-1.9,0.4c-0.6,0.3-1.1,0.6-1.5,1.1
			c-0.4,0.4-0.8,1-1,1.6c-0.2,0.6-0.4,1.2-0.4,1.9V49.1z"
              />
              <path
                d="M174.4,49.1h-1.5l-2.5-3.5c-0.6,0.6-1.3,1.1-1.9,1.6c-0.7,0.5-1.4,0.9-2.1,1.3c-0.7,0.4-1.5,0.6-2.3,0.9
			c-0.8,0.2-1.6,0.3-2.4,0.3c-1.8,0-3.4-0.3-5-0.9c-1.6-0.6-2.9-1.5-4.1-2.7c-1.2-1.2-2.1-2.6-2.7-4.3c-0.7-1.7-1-3.6-1-5.8
			c0-2,0.3-3.8,1-5.5c0.7-1.7,1.6-3.1,2.7-4.3c1.2-1.2,2.5-2.1,4.1-2.8c1.6-0.7,3.2-1,5-1c0.8,0,1.6,0.1,2.4,0.3
			c0.8,0.2,1.6,0.5,2.3,0.9c0.7,0.4,1.5,0.8,2.1,1.3c0.7,0.5,1.3,1,1.9,1.6l2.5-3.1h1.5V49.1z M167.9,36c0-0.9-0.2-1.8-0.5-2.6
			c-0.3-0.8-0.8-1.6-1.4-2.2c-0.6-0.6-1.3-1.2-2-1.6c-0.8-0.4-1.6-0.6-2.5-0.6c-0.9,0-1.7,0.2-2.5,0.5c-0.8,0.3-1.4,0.8-2,1.3
			c-0.6,0.6-1,1.3-1.3,2.2s-0.5,1.9-0.5,3c0,1.1,0.2,2.1,0.5,3c0.3,0.9,0.8,1.6,1.3,2.2c0.6,0.6,1.2,1,2,1.3
			c0.8,0.3,1.6,0.5,2.5,0.5c0.9,0,1.7-0.2,2.5-0.6c0.8-0.4,1.4-0.9,2-1.6c0.6-0.7,1-1.4,1.4-2.2C167.8,37.8,167.9,36.9,167.9,36z"
              />
              <path
                d="M191.6,16.3c0,0.6-0.1,1.2-0.3,1.7s-0.5,1-0.9,1.4c-0.4,0.4-0.8,0.7-1.4,0.9c-0.5,0.2-1.1,0.3-1.7,0.3
			c-0.6,0-1.2-0.1-1.7-0.3c-0.5-0.2-1-0.5-1.4-0.9c-0.4-0.4-0.7-0.9-0.9-1.4s-0.3-1.1-0.3-1.7c0-0.6,0.1-1.2,0.3-1.7
			c0.2-0.5,0.5-1,0.9-1.4c0.4-0.4,0.8-0.7,1.4-0.9c0.5-0.2,1.1-0.3,1.7-0.3c0.6,0,1.2,0.1,1.7,0.3c0.5,0.2,1,0.5,1.4,0.9
			c0.4,0.4,0.7,0.9,0.9,1.4C191.4,15.2,191.6,15.7,191.6,16.3z M190.5,49.1H184V23.3h6.4V49.1z"
              />
            </g>
          </Svg>
        </SvgWrapper>
      </NavLink>
    </StyledLogo>
  );
};
