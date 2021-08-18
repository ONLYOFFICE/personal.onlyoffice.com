import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import toastr from "../../../components/toast/toastr";

import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";
import Form from "../../../components/form";

import { getSettings, login, changePassword } from "../../api";
import { parseQueryParams, createPasswordHash } from "../../helpers";

const PasswordChangePage = ({ location }) => {
  const [password, setPassword] = useState("");
  const [isPwdValid, setIsPwdValid] = useState(true);

  const [hashSettings, setHashSettings] = useState();

  useEffect(() => {
    getSettings()
      .then((res) => {
        setHashSettings(res.passwordHash);
      })
      .catch((e) => console.error(e));
  }, []);

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const params = parseQueryParams(location.search);

  const onPasswordChange = (e, isValid) => {
    setPassword(e.target.value);
    setIsPwdValid(isValid);
  };

  const onSubmitHandler = () => {
    let hasError = false;

    if (!password.trim()) {
      hasError = true;
      setIsPwdValid(false);
    }

    if (hasError) {
      return false;
    }
    const hash = createPasswordHash(password, hashSettings);

    changePassword(params.uid, hash, params.key)
      .then(() => {
        login(params.email, hash);
      })
      .catch((error) => {
        toastr.error(t(`${error}`));
      });
  };
  const formData = [
    {
      type: "heading",
      headingText: t("ConfirmPasswordChangeTitle"),
      isHeader: true,
    },

    {
      type: "input",
      inputType: "password",
      placeholder: t("Password"),
      callback: onPasswordChange,
      value: password,
      autoComplete: "new-password",
      tabIndexProp: 1,
      isError: !isPwdValid,
    },

    {
      type: "button",
      callback: onSubmitHandler,
      isSubmit: true,
      typeButton: "primary",
      label: t("Ok"),
      tabIndexProp: 2,
    },
  ];

  return (
    <Layout>
      <Layout.PageHead>
        <Head
          metaDescription={t("AuthDocsMetaDescription")}
          metaKeywords={t("AuthDocsMetaKeywords")}
          title={t("AuthDocsTitlePage")}
          metaDescriptionOg={t("MetaDescriptionOg")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeaderContent t={t} language={language} withoutButton />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <StyledSection>
          <Form formData={formData} className="login-form" />
        </StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default PasswordChangePage;

export const query = graphql`
  query($language: String!) {
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
