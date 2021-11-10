import React, { useState, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";
import FormDescription from "../../sub-components/form-description";
import Form from "../../../components/form";
import toastr from "../../../components/toast/toastr";

import {
  getSettings,
  createUser,
  login,
  logout,
  getUser,
  updateUserCulture,
  getPortalPasswordSettings,
} from "../../api";
import {
  parseQueryParams,
  createPasswordHash,
  getConfirmHeader,
  checkingConfirmLink,
} from "../../helpers";

import languages from "../../../languages.json";
import withDetectLanguage from "../../helpers/withDetectLanguage";

const EmpInvitePage = ({ location }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isPwdValid, setIsPwdValid] = useState(true);
  const [hashSettings, setHashSettings] = useState();

  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);

  const [isEmptyFirstName, setIsEmptyFirstName] = useState(true);
  const [isEmptyLastName, setIsEmptyLastName] = useState(true);
  const [isEmptyPassword, setIsEmptyPassword] = useState(true);

  const [passwordSettings, setPasswordSettings] = useState(null);

  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    const params = parseQueryParams(location.search);
    const { lang: linkLanguage } = params;

    if (!linkLanguage)
      console.error(
        "The link does not contain the 'lang' parameter. The default language is 'en'"
      );

    if (language !== linkLanguage) {
      let localizedPath;

      if (language === "en" && !location.pathname.includes("en")) {
        localizedPath = `/${linkLanguage || "en"}${location.pathname}${
          location.search
        }`;
      } else {
        localizedPath = `${location.pathname.replace(
          language,
          linkLanguage || "en"
        )}${location.search}`;
      }

      navigate(localizedPath);
    }
  }, [language, location.pathname, location.search]);

  useEffect(() => {
    getSettings()
      .then((res) => {
        setHashSettings(res.passwordHash);
      })

      .catch((e) => console.error(e));
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

  const onChangeFirstName = (e) => {
    if (!firstNameValid) setFirstNameValid(true);
    setFirstName(e.target.value);
    setIsEmptyFirstName(false);
  };

  const onChangeLastName = (e) => {
    if (!lastNameValid) setLastNameValid(true);
    setLastName(e.target.value);
    setIsEmptyLastName(false);
  };

  const onPasswordChange = (e, isValid) => {
    setPassword(e.target.value);
    setIsPwdValid(isValid);
    setIsEmptyPassword(false);
  };

  const createConfirmUser = async (registerData, loginData, key) => {
    const data = Object.assign(
      { fromInviteLink: true },
      registerData,
      loginData
    );

    const user = await createUser(data, key);

    console.log("Created user", user);

    const { userName, passwordHash } = loginData;

    const response = await login(userName, passwordHash);

    console.log("Login", response);

    return user;
  };

  const checkString = (string) => {
    const regex = /\d/g;
    return regex.test(string);
  };

  const firstNameOnBlurHandler = () => {
    if (!!firstName.trim() && !checkString(firstName)) {
      setFirstNameValid(true);
    } else {
      setFirstNameValid(false);
    }
  };

  const lastNameOnBlurHandler = () => {
    if (!!lastName.trim() && !checkString(lastName)) {
      setLastNameValid(true);
    } else {
      setLastNameValid(false);
    }
  };

  const onSubmitHandler = () => {
    let hasError = false;

    if (!firstName.trim()) {
      hasError = true;
      setFirstNameValid(false);
      setIsEmptyFirstName(true);
    }

    if (!lastName.trim()) {
      hasError = true;
      setLastNameValid(false);
      setIsEmptyLastName(true);
    }

    if (!password.trim()) {
      hasError = true;
      setIsPwdValid(false);
      setIsEmptyPassword(true);
    }

    if (hasError) {
      return false;
    }

    const params = parseQueryParams(location.search);
    const confirmHeader = getConfirmHeader(location);
    const hash = createPasswordHash(password, hashSettings);

    const loginData = {
      userName: params.email,
      passwordHash: hash,
    };

    const personalData = {
      firstname: firstName,
      lastname: lastName,
      email: params.email,
    };

    logout().then(() =>
      createConfirmUser(personalData, loginData, confirmHeader)
        .then(getUser)
        .then((user) => {
          const currentLanguage = languages.find(
            (el) => el.shortKey === language
          );
          updateUserCulture(user.id, currentLanguage?.key || "en");
        })
        .then(() => window.location.replace("/"))
        .catch((error) => {
          toastr.error(`${error}`);
        })
    );
  };

  const formData = [
    { type: "heading", headingText: t("Join"), isHeader: true },
    {
      type: "other",
      element: (
        <FormDescription
          key="create-account"
          label={t("ConfirmJoinDescription")}
        />
      ),
    },
    {
      type: "input",
      inputType: "text",
      placeholder: t("FirstName"),
      callback: onChangeFirstName,
      value: firstName,
      tabIndexProp: 1,
      autoComplete: "given-name",
      isError: !firstNameValid,
      onBlur: firstNameOnBlurHandler,
      isSuccess: firstNameValid && !isEmptyFirstName,
      errorText: isEmptyFirstName ? t("AuthErrorIndicationText") : null,
    },
    {
      type: "input",
      inputType: "text",
      placeholder: t("LastName"),
      callback: onChangeLastName,
      value: lastName,
      tabIndexProp: 2,
      autoComplete: "family-name",
      isError: !lastNameValid,
      onBlur: lastNameOnBlurHandler,
      isSuccess: lastNameValid && !isEmptyLastName,
      errorText: isEmptyLastName ? t("AuthErrorIndicationText") : null,
    },
    {
      type: "input",
      inputType: "password",
      placeholder: t("Password"),
      callback: onPasswordChange,
      value: password,
      autoComplete: "new-password",
      tabIndexProp: 3,
      isError: !isPwdValid,
      errorText: isEmptyPassword ? t("AuthErrorIndicationText") : null,
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
      label: t("Join"),
      tabIndexProp: 4,
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
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeaderContent t={t} language={language} withoutButton />
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

export default withDetectLanguage(EmpInvitePage);

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
