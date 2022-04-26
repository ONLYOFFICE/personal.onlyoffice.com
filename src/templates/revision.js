import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import config from "../../package.json";

import Text from "../../components/text";

const StyledComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 10px 20px;
`;

const { version } = config;

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
      <Text>{`Version: ${version}`} </Text>
      <Text>{`Build date: ${buildData}`} </Text>
      <Text>
        <div
          className="change-log-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Text>
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
    locales: allLocale(filter: { language: { in: [$language, "en-US"] } }) {
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
