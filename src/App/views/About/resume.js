import React, { Component } from "react";
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
  font-size: 1.25rem;
`;

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const intro = this.props.introtext.split("<br/>").map(p => {
      return <Desc>{p}</Desc>;
    });
    const inquiry = this.props.inquiryText.split("<br/>").map(p => {
      return <Desc>{p}</Desc>;
    });

    return (
      <Container>
        <Subheading>{this.props.subheading}</Subheading>
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.subtitle}</Subtitle>
        <Line />
        {intro}
        <Contact>
          <H1>Hire me</H1>
          {inquiry}
          <Link href={`mailTo: ${this.props.email}`}>{this.props.email}</Link>
        </Contact>
      </Container>
    );
  }
}

export default Resume;
