import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";
import FormDescription from "../../sub-components/form-description";
import Form from "../../../components/form";

import { getSettings, createUser, login } from "../../api";
import { parseQueryParams, createPasswordHash } from "../../helpers";

const EmpInvitePage = ({ location }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onPasswordChange = (e, isValid) => {
    setPassword(e.target.value);
    setIsPwdValid(isValid);
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

  const onSubmitHandler = () => {
    const hash = createPasswordHash(password, hashSettings);
    const isVisitor = parseInt(params.emplType) === 2;

    const loginData = {
      userName: params.email,
      passwordHash: hash,
    };

    const personalData = {
      firstname: firstName,
      lastname: lastName,
      email: params.email,
    };

    const registerData = Object.assign(personalData, {
      isVisitor: isVisitor,
    });

    createConfirmUser(registerData, loginData, params.key)
      .then(() => window.location.replace("/"))
      .catch((error) => {
        console.error("confirm error", error);
      });
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
    },
    {
      type: "input",
      inputType: "text",
      placeholder: t("LastName"),
      callback: onChangeLastName,
      value: lastName,
      tabIndexProp: 2,
      autoComplete: "family-name",
    },
    {
      type: "input",
      inputType: "password",
      placeholder: t("Password"),
      callback: onPasswordChange,
      value: password,
      autoComplete: "new-password",
      tabIndexProp: 3,
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

export default EmpInvitePage;

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
