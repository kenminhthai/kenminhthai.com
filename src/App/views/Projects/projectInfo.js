import React from "react";
import styled from "styled-components";

const ProjectBox = styled.div`
  align-self: center;
  padding: 20px 0;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const InfoBox = styled.div`
  background: white;
`;

const DescBlock = styled.div`
  padding: 20px;
`;

const CTA = styled.div`
  margin-top: 30px;
`;

export const ProjectInfo = props => {
  return (
    <ProjectBox>
      <h1>{props.info.name}</h1>
      <InfoRow>
        <InfoBox>
          <div>Role</div>
          <div>{props.info.role}</div>
        </InfoBox>
        <InfoBox>
          <div>Company</div>
          <div>{props.info.company}</div>
        </InfoBox>
        <InfoBox>
          <div>Completed</div>
          <div>{props.info.year}</div>
        </InfoBox>
      </InfoRow>
      <DescBlock>{props.info.desc}</DescBlock>
      <CTA>
        <a href={props.info.link}>view project</a>
      </CTA>
    </ProjectBox>
  );
};
