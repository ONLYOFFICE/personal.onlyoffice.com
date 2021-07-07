import React from "react";
import Form from "./";

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
  return (
    <div style={{ width: "100%" }}>
      <Form {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
