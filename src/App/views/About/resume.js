import React from "react";
import styled from "styled-components";
import { fontHeading, H1, H6, H5, P } from "../../components/global";
import { theme } from "../../utils/theme";

const Container = styled.div`
  padding-top: 3rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  ${fontHeading};
  color: ${theme.bg.reverse};
  margin: 0;
`;

const Subheading = styled(H6)`
  font-size: 0.85rem;
  color: ${theme.brand.default};
  letter-spacing: 2px;
  margin-bottom: 1.8rem;
`;

const Subtitle = styled(H5)`
  color: ${theme.text.wash};
`;

const Line = styled.div`
  background-color: ${theme.bg.hairline};
  display: block;
  height: 5rem;
  margin: 2rem 2px;
  width: 1px;
`;

const Desc = styled(P)`
  font-size: 1.25rem;
  line-height: 1.65;
  margin: 1rem 0;
`;

const Contact = styled.div`
  margin: 1em 0;
`;

const Link = styled.a`
  color: ${theme.brand.default};
`;

export const Resume = props => {
  return (
    <Container>
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
        <H1>Hire me</H1>
        <Desc>
          I like to work with startups and local businesses. If you need a
          website or web app, I would love to build it for you.
        </Desc>
        <Desc>
          For new projects and inquiries:{" "}
          <Link href="mailto:hello@kenminhthai.com">hello@kenminhthai.com</Link>
        </Desc>
      </Contact>
    </Container>
  );
};
