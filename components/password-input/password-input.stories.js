import React from "react";
import PasswordInput from ".";

export default {
  title: "Components/PasswordInput",
  component: PasswordInput,
  parameters: {
    docs: {
      description: {
        component: "Custom PasswordInput.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <PasswordInput {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
