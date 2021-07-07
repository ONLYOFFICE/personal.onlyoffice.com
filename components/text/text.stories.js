import React from "react";
import Text from ".";

export default {
  title: "Components/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: "Custom Text component",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Text {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
