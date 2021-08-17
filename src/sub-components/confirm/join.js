import React, { useState } from "react";

import Form from "../../../components/form";

import FormDescription from "../form-description";

const JoinFrom = ({ t, queryParams, ...rest }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isPwdValid, setIsPwdValid] = useState(true);

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onPasswordChange = (e, isValid) => {
    setPasswordValue(e.target.value);
    setIsPwdValid(isValid);
  };

  const onSubmitHandler = () => {
    console.log(firstName, lastName, passwordValue, isPwdValid, queryParams);
  };
  const formData = [
    { type: "heading", headingText: t("CreateFormHeader"), isHeader: true },
    {
      type: "other",
      element: (
        <FormDescription
          key="recovery-instructions"
          label={t("CreateSuccessfullyDesc", {
            email: "location.state" ? "location.state.email" : "",
          })}
        />
      ),
    },
    {
      type: "input",
      inputType: "text",
      placeholder: "Some name",
      callback: onChangeFirstName,
      value: firstName,
      tabIndexProp: 1,
      autoComplete: "given-name",
    },
    {
      type: "input",
      inputType: "text",
      placeholder: "Some last name",
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
      value: passwordValue,
      autoComplete: "new-password",
      tabIndexProp: 3,
    },

    {
      type: "button",
      callback: onSubmitHandler,
      isSubmit: true,
      typeButton: "primary",
      label: t("RegistryButtonCreateNow"),
      tabIndexProp: 4,
    },
  ];

  return <Form formData={formData} />;
};

export default JoinFrom;
