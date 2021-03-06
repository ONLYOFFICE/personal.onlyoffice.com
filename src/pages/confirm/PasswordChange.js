import React, { useState, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import toastr from "../../../components/toast/toastr";

import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";
import Form from "../../../components/form";

import {
  getSettings,
  changePassword,
  logout,
  login,
  getPortalPasswordSettings,
} from "../../api";
import {
  parseQueryParams,
  createPasswordHash,
  getConfirmHeader,
  checkingConfirmLink,
} from "../../helpers";
import withDetectLanguage from "../../helpers/withDetectLanguage";

const PasswordChangePage = ({ location }) => {
  const [password, setPassword] = useState("");
  const [isPwdValid, setIsPwdValid] = useState(true);

  const [hashSettings, setHashSettings] = useState();
  const [passwordIsEmpty, setPasswordIsEmpty] = useState(null);

  const [passwordSettings, setPasswordSettings] = useState(null);

  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    getSettings().then((res) => {
      setHashSettings(res.passwordHash);
    });
    //.catch((e) => console.error(e));
  }, []);

  /* eslint-disable */
  useEffect(() => {
    checkingConfirmLink(location, t).then((res) => {
      if (!res.isValidLink) {
        navigate("/", {
          state: {
            toastr: {
              error: true,
              text: res.errorValidationLink || t("UnknownError"),
            },
          },
        });
      } else {
        const key = getConfirmHeader(location);
        getPortalPasswordSettings(key)
          .then((res) => {
            setPasswordSettings(res);
          })
          .catch((e) => {
            navigate("/", {
              state: {
                toastr: {
                  error: true,
                  text: `${e}` || t("UnknownError"),
                },
              },
            });
          });
      }
    });
  }, []);
  /* eslint-enable */

  const onPasswordChange = (e, isValid) => {
    setPassword(e.target.value);
    setIsPwdValid(isValid);
    setPasswordIsEmpty(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!password.trim() || !isPwdValid) {
      hasError = true;
      setIsPwdValid(false);
      setPasswordIsEmpty(true);
    }

    if (hasError) {
      return false;
    }

    const params = parseQueryParams(location.search);
    const confirmHeader = getConfirmHeader(location);
    const hash = createPasswordHash(password, hashSettings);

    logout()
      .then(() => changePassword(params.uid, hash, confirmHeader))
      .then(() => {
        login(params.email, hash).then(() => {
          window.location.replace("/");
        });
      })
      .catch((error) => {
        toastr.error(`${error}`);
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
      errorText: passwordIsEmpty && t("AuthErrorIndicationText"),
      passwordSettings: passwordSettings,
      disabledValidation: false,
      tooltipText: t("PasswordLimitMessage"),
      lengthErrorText: t("PasswordLimitLength", {
        fromNumber: passwordSettings?.minLength || 8,
        toNumber: 30,
      }),
      digitsErrorText: t("PasswordLimitDigits"),
      capitalErrorText: t("PasswordLimitUpperCase"),
      specialErrorText: t("PasswordLimitSpecialSymbols"),
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
    <Layout t={t}>
      <Layout.PageHead>
        <Head
          metaDescription={t("AuthDocsMetaDescription")}
          metaKeywords={t("AuthDocsMetaKeywords")}
          title={t("AuthorizationTitle")}
          metaDescriptionOg={t("MetaDescriptionOg")}
          currentLanguage={language}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeaderContent
          t={t}
          language={language}
          withoutButton
          location={location}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <StyledSection>
          <Form
            formData={formData}
            submitForm={onSubmitHandler}
            className="login-form"
          />
        </StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} language={language} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default withDetectLanguage(PasswordChangePage);

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
