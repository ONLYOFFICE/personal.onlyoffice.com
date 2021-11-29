import React from "react";
import { graphql } from "gatsby";

import config from "../../package.json";
import Text from "../../components/text";
import Heading from "../../components/heading";
import styled from "styled-components";

const { version } = config;

const StyledComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 10px 20px;
`;

const getBuildDate = () => {
  // eslint-disable-next-line
  return BUILD_AT;
};

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  const buildData = getBuildDate();
  return (
    <StyledComponent>
      <Heading level={3}>Debug Info</Heading>
      <Text>{`version: ${version}`}</Text>
      <Text>{`Build date: ${buildData}`}</Text>
      <div
        className="change-log-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </StyledComponent>
  );
}
export const pageQuery = graphql`
  query($path: String!, $language: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
      }
    }
    locales: allLocale(filter: { language: { in: [$language, "en"] } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
