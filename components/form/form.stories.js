import React, { useState } from "react";
import Form from "./";
import ExternalLink from "../external-link";
import Text from "../text";

export default {
  title: "Components/Form",
  component: Form,
  parameters: {
    docs: {
      description: {
        component: "Customize Form Component",
      },
    },
  },
};

const Template = ({ ...args }) => {
  const [isValid, setIsValid] = useState();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [text, setText] = useState("");
  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(true);

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    alert(`onSubmit called! isValid: ${isValid}, email: ${email}, pwd: ${pwd}`);
  };

  const emailChangeHandler = (e, isValid) => {
    console.log("EmailInput callback", e.target.value, isValid);
    setIsValid(isValid);
    setEmail(e.target.value);
  };

  const onButtonEmailClick = () => {
    alert("Button Email Click!");
  };

  const pwdChangePassword = (e) => {
    console.log("PaswwordInput callback", e.target.value);
    setPwd(e.target.value);
  };

  const textChangePassword = (e) => {
    console.log("TextInput callback", e.target.value);
    setText(e.target.value);
  };

  const checkboxOneChange = (e) => {
    console.log("Checkbox one callback", e.target.checked);
    setIsCheckedOne(e.target.checked);
  };

  const checkboxTwoChange = (e) => {
    console.log("Checkbox two callback", e.target.checked);
    setIsCheckedTwo(e.target.checked);
  };

  const formData = [
    {
      element: "heading",
      headingText: "Heading",
      isHeader: true,
    },
    {
      element: "password-input",
      placeholder: "Some password",
      callback: pwdChangePassword,
      value: pwd,
    },
    {
      element: "email-input",
      placeholder: "Some email",
      callback: emailChangeHandler,
      value: email,
      withButton: true,
      typeButton: "primary",
      isSubmit: true,
      labelButton: "Label Button",
      isSubmit: true,
      onButtonClick: onButtonEmailClick,
    },
    {
      element: "heading",
      headingText: "Sub-heading",
    },
    {
      element: "text-input",
      placeholder: "Some password",
      callback: textChangePassword,
      value: text,
    },
    {
      element: "checkbox",
      callback: checkboxOneChange,
      isChecked: isCheckedOne,
      label: "Simple Label",
    },
    {
      element: "checkbox",
      callback: checkboxTwoChange,
      isChecked: isCheckedTwo,
      label: ["Combo Label", <ExternalLink label="link" />],
    },
    {
      element: "button",
      callback: (e) => console.log(e, "Button callback"),
    },
    {
      element: "separator",
      separatorText: "Separator Text",
    },
    {
      element: "social-buttons",
    },
  ];

  return (
    <div
      style={{
        minWidth: "100px",
        maxWidth: "400px",
        width: "100%",
        height: "min-content",
      }}
    >
      <Form {...args} formData={formData} onSubmitForm={onSubmitFormHandler} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isPanel: true,
};
