import React, { Component } from "react";
import styled, { css } from "styled-components";

export const InlineSvg = styled.svg`
  bottom: 0;
  color: inherit;
  fill: currentColor;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${props => (props.size ? `${props.size}px` : "32px")};
  width: ${props => (props.size ? `${props.size}px` : "32px")};
  height: ${props => (props.size ? `${props.size}px` : "32px")};
  min-width: ${props => (props.size ? `${props.size}px` : "32px")};
  min-height: ${props => (props.size ? `${props.size}px` : "32px")};
  position: relative;
  color: inherit;
`;

export const Glyph = ({ glyph }) => {
  switch (glyph) {
    case "emoji":
      return (
        <g>
          <path d="M26,16c0,5.523 -4.477,10 -10,10c-5.523,0 -10,-4.477 -10,-10c0,-5.523 4.477,-10 10,-10c5.523,0 10,4.477 10,10Zm2,0c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-17.5,0c0.829,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.671,-1.5 -1.5,-1.5c-0.829,0 -1.5,0.672 -1.5,1.5c0,0.828 0.671,1.5 1.5,1.5Zm12.5,-1.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5Zm-6.999,8c2.45,0 4.534,-1.715 5,-4c0.232,-1.14 -3,-1.5 -5,-1.5c-2,0 -5.259,0.231 -5,1.5c0.466,2.285 2.549,4 5,4Zm2,-2c0,0 -0.896,0.5 -2,0.5c-1.105,0 -2,-0.5 -2,-0.5c0,0 0.895,-1 2,-1c1.104,0 2,1 2,1Z" />
        </g>
      );
    case "github":
      return (
        <g>
          <path d="M18.837,27.966c8.342,-0.241 9.163,-1.997 9.163,-11.966c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,9.995 0.826,11.734 9.228,11.968c0.073,-0.091 0.1,-0.205 0.1,-0.321c0,-0.25 -0.01,-2.816 -0.015,-3.699c-3.037,0.639 -3.678,-1.419 -3.678,-1.419c-0.497,-1.222 -1.213,-1.548 -1.213,-1.548c-0.991,-0.656 0.075,-0.643 0.075,-0.643c1.096,0.075 1.673,1.091 1.673,1.091c0.974,1.617 2.556,1.15 3.178,0.879c0.099,-0.683 0.381,-1.15 0.693,-1.414c-2.425,-0.267 -4.974,-1.175 -4.974,-5.23c0,-1.155 0.426,-2.099 1.124,-2.839c-0.113,-0.268 -0.487,-1.344 0.107,-2.8c0,0 0.917,-0.285 3.003,1.084c0.871,-0.235 1.805,-0.352 2.734,-0.356c0.927,0.004 1.861,0.121 2.734,0.356c2.085,-1.369 3,-1.084 3,-1.084c0.596,1.456 0.221,2.532 0.108,2.8c0.7,0.74 1.123,1.684 1.123,2.839c0,4.065 -2.553,4.96 -4.986,5.221c0.392,0.327 0.741,0.973 0.741,1.96c0,0.946 -0.006,2.619 -0.01,3.728c-0.002,0.549 -0.003,0.959 -0.003,1.074c0,0.109 0.029,0.224 0.095,0.319Z" />
        </g>
      );
    case "link":
      return (
        <g>
          <path d="M16.693,16.664c0.376,-0.375 1.001,-0.413 1.377,-0.038l0.083,0.084c0.358,0.357 0.386,0.93 0.032,1.291c-0.026,0.026 -0.051,0.052 -0.077,0.078c-0.867,0.866 -1.671,1.438 -2.514,1.655c0,0 -0.001,0 -0.001,0c-0.078,0.02 -0.157,0.037 -0.236,0.051c0,0 0,0 0,0c-0.802,0.142 -1.646,-0.036 -2.616,-0.582l0,0c-0.907,-0.511 -1.923,-1.343 -3.119,-2.539c-3.959,-3.959 -3.939,-5.959 -1.414,-8.485c2.526,-2.525 4.526,-2.545 8.485,1.414c0.439,0.439 0.828,0.853 1.171,1.247c0.102,0.117 -0.009,0.3 -0.162,0.28c0,0 0,0 -0.001,0c-0.559,-0.074 -1.083,-0.035 -1.58,0.094c-0.299,0.078 -0.624,0.012 -0.842,-0.206c-1.958,-1.958 -3.035,-2.492 -3.63,-2.571c-0.366,-0.049 -0.902,0.032 -2.027,1.156c-1.124,1.125 -1.205,1.661 -1.156,2.027c0.079,0.595 0.613,1.672 2.571,3.63c0.432,0.433 0.822,0.796 1.173,1.1c0,0 0,0 0,0c0.046,0.04 0.091,0.079 0.136,0.117c0,0 0,0 0,0c0.841,0.712 1.45,1.073 1.891,1.24c0,0 0,0 0,0c0.166,0.062 0.308,0.098 0.429,0.114c0,0 0,0 0,0c0.367,0.049 0.903,-0.032 2.027,-1.157Zm3.07,-1.099c-0.912,-0.79 -1.563,-1.181 -2.027,-1.357c0,0 0,0 0,0c-0.166,-0.063 -0.308,-0.098 -0.43,-0.114c0,0 0,0 0,0c-0.367,-0.049 -0.902,0.032 -2.027,1.156c-0.375,0.376 -1.001,0.414 -1.376,0.038l-0.083,-0.083c-0.358,-0.358 -0.387,-0.931 -0.032,-1.291c0.025,-0.026 0.051,-0.052 0.077,-0.078c0.866,-0.866 1.671,-1.438 2.514,-1.655l0,0c0.873,-0.225 1.786,-0.07 2.853,0.531c0,0 0,0 0,0c0.906,0.51 1.923,1.343 3.118,2.538c3.96,3.96 3.94,5.96 1.414,8.486c-2.525,2.525 -4.525,2.545 -8.485,-1.415c-0.438,-0.438 -0.828,-0.852 -1.171,-1.246c-0.102,-0.117 0.009,-0.301 0.163,-0.28c0.559,0.074 1.083,0.035 1.581,-0.094c0.299,-0.078 0.623,-0.012 0.841,0.206c1.958,1.958 3.035,2.492 3.63,2.571c0.367,0.049 0.903,-0.032 2.027,-1.157c1.125,-1.124 1.206,-1.66 1.157,-2.027c-0.079,-0.595 -0.613,-1.672 -2.571,-3.63c-0.433,-0.432 -0.822,-0.795 -1.173,-1.099Z" />
        </g>
      );
    case "logo":
      return (
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
      );
    case "menu":
      return (
        <g>
          <path d="M9,10c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z" />
          <path d="M9,15c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z" />
          <path d="M9,20c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z" />
        </g>
      );
    case "message":
      return (
        <g>
          <path d="M14.5,7.021c0.625,-0.014 1.291,-0.021 2,-0.021c10.542,0 11.5,1.5 11.5,8c0,6.5 -0.958,8 -11.5,8c-0.517,0 -1.01,-0.004 -1.482,-0.011c-0.001,0 -0.002,0 -0.002,0.001l-4.461,2.974c-0.665,0.443 -1.555,-0.034 -1.555,-0.833l0,-2.713c0,-0.002 -0.002,-0.004 -0.004,-0.005c-2.969,-0.754 -3.765,-2.347 -3.948,-5.413c-0.036,-0.607 -0.048,-1.272 -0.048,-2c0,-6.063 0.834,-7.776 9.5,-7.979Zm-7.023,12.153c-0.341,-0.732 -0.477,-1.923 -0.477,-4.174c-0.001,-1.579 0.04,-2.656 0.259,-3.523c0.171,-0.791 0.268,-1.008 0.751,-1.324c0.394,-0.301 1.12,-0.62 2.55,-0.84c1.458,-0.228 3.327,-0.312 5.892,-0.313l0.048,0c2.589,-0.001 4.473,0.084 5.94,0.313c1.43,0.22 2.156,0.539 2.55,0.84c0.483,0.316 0.58,0.533 0.751,1.324c0.219,0.867 0.259,1.944 0.259,3.523c0,1.579 -0.04,2.656 -0.259,3.523c-0.171,0.791 -0.268,1.007 -0.751,1.324c-0.394,0.301 -1.12,0.62 -2.55,0.84c-1.467,0.229 -3.351,0.313 -5.94,0.313c-0.509,0 -0.987,-0.004 -1.449,-0.011c-0.303,0.018 -0.882,0.188 -1.145,0.337l-2.906,1.937l0,-0.845c0,-0.96 -0.664,-1.728 -1.512,-1.943c-1.389,-0.353 -1.784,-0.813 -2.011,-1.301Zm4.023,-2.174c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Zm6.5,-1.5c0,0.828 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5c0.828,0 1.5,0.672 1.5,1.5Zm3.5,1.5c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z" />
        </g>
      );
    case "send":
      return (
        <g>
          <path d="M9,8l0,5.287l7.054,1.495c0.628,0.133 0.966,0.665 0.989,1.164c0,0.009 0.001,0.022 0.001,0.034c0,0.004 0,0.008 0,0.012c0,0.005 0,0.009 0,0.013c0,0.012 -0.001,0.025 -0.001,0.034c-0.023,0.498 -0.361,1.031 -0.989,1.164l-7.054,1.495l0,5.627c0.02,0.001 0.049,-0.002 0.09,-0.017c4.386,-1.524 15.41,-7.808 15.41,-8.308c0,-0.5 -11.075,-6.473 -15.41,-7.984c-0.041,-0.014 -0.07,-0.017 -0.09,-0.016Zm17.555,7.992l0,-0.011l0,-0.003c-0.011,-0.698 -0.39,-1.289 -0.925,-1.685c-3.631,-2.688 -11.512,-6.642 -15.882,-8.165c-0.624,-0.218 -1.3,-0.158 -1.843,0.185c-0.554,0.349 -0.905,0.958 -0.905,1.667l0,5.712c0,0.708 0.496,1.32 1.189,1.467l3.931,0.833l-3.931,0.834c-0.693,0.146 -1.189,0.758 -1.189,1.467l0,6.052c0,0.709 0.351,1.317 0.905,1.667c0.543,0.343 1.219,0.403 1.843,0.185c4.371,-1.527 12.29,-5.85 15.881,-8.505c0.536,-0.397 0.915,-0.987 0.925,-1.685l0,-0.003l0.001,-0.012Z" />
        </g>
      );
    case "undo":
      return (
        <g>
          <path d="M 12.78125 5.28125 L 4.78125 13.28125 L 4.09375 14 L 4.78125 14.71875 L 12.78125 22.71875 L 14.21875 21.28125 L 7.9375 15 L 21 15 C 23.754545 15 26 17.245455 26 20 L 26 27 L 28 27 L 28 20 C 28 16.154545 24.845455 13 21 13 L 7.9375 13 L 14.21875 6.71875 L 12.78125 5.28125 z" />
        </g>
      );
    case "up":
      return (
        <g>
          <path d="M 16 4.09375 L 15.28125 4.78125 L 6.78125 13.28125 L 8.21875 14.71875 L 15 7.9375 L 15 28 L 17 28 L 17 7.9375 L 23.78125 14.71875 L 25.21875 13.28125 L 16.71875 4.78125 L 16 4.09375 z" />
        </g>
      );
    case "view-back":
      return (
        <g>
          <path d="M 13.28125 6.78125 L 4.78125 15.28125 L 4.09375 16 L 4.78125 16.71875 L 13.28125 25.21875 L 14.71875 23.78125 L 7.9375 17 L 28 17 L 28 15 L 7.9375 15 L 14.71875 8.21875 L 13.28125 6.78125 z" />
        </g>
      );
    case "view-forward":
      return (
        <g>
          <path d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 L 18.71875 6.78125 z" />
        </g>
      );
  }
};

class Icon extends Component {
  render() {
    const { size, onClick, glyph } = this.props;
    return (
      <SvgWrapper size={size} className={"icon"} onClick={onClick}>
        <InlineSvg
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="title"
          viewBox="0 0 32 32"
          preserveAspectRatio="xMidYMid meet"
          fit
          id={glyph}
        >
          <title id="title">{glyph}</title>
          <Glyph glyph={glyph} />
        </InlineSvg>
      </SvgWrapper>
    );
  }
}

export default Icon;
