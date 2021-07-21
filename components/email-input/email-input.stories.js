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
  const [value, isValue] = React.useState('');

  return (
    <div style={{ width: "100%" }}>
      <EmailInput  
      {...args}
      value={value}
      onChange={(event) => isValue(event.target.value)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
