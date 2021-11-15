import React, { useState } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import Form from "../../../components/form";
import toastr from "../../../components/toast/toastr";

import Head from "../../sub-components/head";
import HeaderContent from "../../sub-components/header-content";
import StyledSection from "../../sub-components/section";
import FormLink from "../../sub-components/form-link";
import FormDescription from "../../sub-components/form-description";
import AdditionalSection from "../../sub-components/additional-section";
import FooterContent from "../../sub-components/footer-content";

import { recoveryPassword } from "../../api";

import { navigate } from "gatsby";
import withDetectLanguage from "../../helpers/withDetectLanguage";

const PasswordRecoveryPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [emailIsEmpty, setEmailIsEmpty] = useState(null);

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const buttonHref =
    language === "en" ? "/create-now" : `/${language}/create-now`;

  const onEmailChangeHandler = (e, isValid) => {
    setEmailValue(e.target.value);
    setEmailIsValid(isValid);
    setEmailIsEmpty(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!emailValue.trim()) {
      hasError = true;
      setEmailIsValid(false);
      setEmailIsEmpty(true);
    }

    if (hasError) return;

    if (emailIsValid) {
      recoveryPassword(emailValue)
        .then(() =>
          navigate("/sign-in", {
            state: {
              toastr: {
                success: true,
                text: t("SendChangePasswordInstructionSuccess", {
                  email: emailValue,
                }),
              },
            },
          })
        )
        .catch((e) => toastr.error(t("IncorrectEmail")));
    } else {
      toastr.error(t("IncorrectEmail"));
    }
  };

  const formData = [
    { type: "heading", headingText: t("PasswordRecovery"), isHeader: true },
    {
      type: "other",
      element: (
        <FormDescription
          key="recovery-instructions"
          label={t("RecoveryInstructions")}
        />
      ),
    },
    {
      type: "input",
      inputType: "email",
      placeholder: t("Email"),
      callback: onEmailChangeHandler,
      value: emailValue,
      tabIndexProp: 1,
      isError: !emailIsValid,
      errorText: emailIsEmpty && t("AuthErrorIndicationText"),
    },
    {
      type: "button",
      callback: onSubmitHandler,
      isSubmit: true,
      toHideButton: false,
      typeButton: "primary",
      label: t("Send"),
      tabIndexProp: 2,
    },
    {
      type: "other",
      element: (
        <FormLink
          key="pass-recovery-link"
          currentLanguage={language}
          href="sign-in"
          label={t("AuthDocsToLogin")}
        />
      ),
    },
    {
      type: "other",
      element: (
        <AdditionalSection
          marginTop="56px"
          smallMarginTop="22px"
          key="additional"
          textLabel={t("AuthDocsDontHave")}
          buttonHref={buttonHref}
          buttonLabel={t("RegistryButtonCreateNow")}
        />
      ),
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
          headerText={t("AuthDocsDontHave")}
          toHideButton
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

export default withDetectLanguage(PasswordRecoveryPage);

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
