import React from "react";
import styled from "styled-components";
import { fontHeading, Red, P } from "../../components/global";

const Title = styled.h1`
  font-size: 5em;
  ${fontHeading};
  color: #000;
  margin: 0;
`;

const Subheading = styled.h6`
  font-size: 0.85em;
  ${Red};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.8em;
`;

const Subtitle = styled.h5`
  font-size: 1.2em;
  font-weight: 200;
  color: gray;
`;

const Line = styled.div`
  background-color: red;
  display: block;
  height: 5em;
  margin: 2em 2px;
  width: 1px;
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 1.2em;
  line-height: 1.6;
  margin: 0;
  padding: 0.5em 0;
  margin: 0.25em 0;
`;

const Contact = styled.div`
  margin: 1em 0;
`;

export const Resume = props => {
  return (
    <div>
      <Subheading>{props.subheading}</Subheading>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <Line />
      <Desc>
        I am Ken Thai, a creative frontend developer specialized in digital
        experiences and creative interactions.
      </Desc>

      <Desc>
        With a background in marketing communications, I aim to combine
        emotional storytelling along with technology to create next level
        digital experiences through the meaningful power of design.
      </Desc>
      <Contact>
        <h2>Hire me</h2>
        <Desc>
          I like to work with startups and local businesses. If you need a
          website or web app, I would love to build it for you.
        </Desc>
        <Desc>
          For new projects and inquiries:{" "}
          <a href="mailto:hello@kenminhthai.com">hello@kenminhthai.com</a>
        </Desc>
      </Contact>
    </div>
  );
};
