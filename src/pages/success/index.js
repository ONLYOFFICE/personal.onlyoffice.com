import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";
import { defaultLanguage } from "../../../config.json";
import Layout from "../../../components/layout";
import Form from "../../../components/form";
import toastr from "../../../components/toast/toastr";
import Text from "../../../components/text";

import Head from "../../sub-components/head";
import HeaderContent from "../../sub-components/header-content";
import StyledSection from "../../sub-components/section";
import FormDescription from "../../sub-components/form-description";
import FooterContent from "../../sub-components/footer-content";

import SuccessIcon from "../../../static/site-assets/icons/reg-success-checkmark.react.svg";

import { navigate } from "gatsby";
import withDetectLanguage from "../../helpers/withDetectLanguage";

const SuccessPage = ({ location }) => {
  /* eslint-disable */
  useEffect(() => {
    if (location.state && location.state.hasOwnProperty("toastr")) {
      if (location.state.toastr.success) {
        toastr.success(location.state.toastr.text);
      }
      if (location.state.toastr.error) {
        toastr.error(location.state.toastr.text);
      }
    }
  }, []);
  /* eslint-enable */
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const buttonHref =
    language === defaultLanguage ? "/create-now" : `/${language}/create-now`;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const formDescriptionContent = () => {
    const email = location.state ? location.state.email : "";
    return (
      <Trans
        i18nKey="CreateSuccessfullyDesc"
        email={location.state ? location.state.email : ""}
      >
        {" "}
        <Text
          as="span"
          fontWeight="bold"
          style={{ verticalAlign: "bottom", fontSize: "16px" }}
        >
          {{ email }}
        </Text>
      </Trans>
    );
  };

  const formData = [
    {
      type: "other",
      element: <SuccessIcon style={{ margin: "0 auto" }} key="success-icon" />,
    },
    {
      type: "heading",
      headingText: t("CreateSuccessfullyHeader"),
      isHeader: true,
    },
    {
      type: "other",
      element: (
        <FormDescription
          key="recovery-instructions"
          label={formDescriptionContent()}
        />
      ),
    },
    {
      type: "button",
      callback: onSubmitHandler,
      isSubmit: true,
      toHideButton: false,
      typeButton: "primary",
      label: t("CreateSuccessfullyButton"),
      tabIndexProp: 1,
    },
  ];
  return (
    <Layout t={t}>
      <Layout.PageHead>
        <Head
          metaDescription={t("AuthDocsMetaDescription")}
          metaKeywords={t("AuthDocsMetaKeywords")}
          title={t("AuthDocsTitlePage")}
          metaDescriptionOg={t("MetaDescriptionOg")}
          currentLanguage={language}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeaderContent
          t={t}
          language={language}
          href={buttonHref}
          labelButton={t("RegistryButtonCreateNow")}
          withoutButton
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <StyledSection>
          <Form
            className="login-form"
            submitForm={onSubmitHandler}
            formData={formData}
          />
        </StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} language={language} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default withDetectLanguage(SuccessPage);

export const query = graphql`
  query($language: String!) {
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
