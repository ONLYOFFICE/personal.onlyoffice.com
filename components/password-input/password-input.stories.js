import React, { useState } from "react";
import PasswordInput from ".";
import TextInput from "../text-input";

export default {
  title: "Components/PasswordInput",
  component: PasswordInput,
  subcomponents: { TextInput },
  parameters: {
    docs: {
      description: {
        component: "Custom PasswordInput.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e, isValid) => {
    setValue(e.target.value);
    console.log(e.target.value, `isValid: ${isValid}`);
  };

  return (
    <div style={{ width: "100%", maxWidth: "500px" }}>
      <PasswordInput {...args} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Your password*",
  passwordSettings: {
    minLength: 8,
    upperCase: false,
    digits: false,
    specSymbols: false,
  },
  backgroundColor: "#f9f9f9",
};
