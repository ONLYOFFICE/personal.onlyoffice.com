import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ErrorContainer from "../sub-components/error-container";


const NotFoundPage = () => {
    const {
        t,
        i18n: { language },
      } = useTranslation();

      return (
          <ErrorContainer
          headerText = "Error 404. Page not found"
          bodyText = "This page was removed, renamed or doesn’t exist anymore."
          buttonText = "Return to homepage"
          buttonUrl = "/"
           />
      )
};

export default NotFoundPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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