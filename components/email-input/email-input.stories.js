import React from "react";
import EmailInput from "./";

export default {
  title: "Components/EmailInput",
  component: EmailInput,
  parameters: {
    docs: {
      description: {
        component:
          "Email entry field with advanced capabilities for validation based on settings.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <EmailInput {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
