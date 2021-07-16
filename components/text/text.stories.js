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

const Template = ({ children, ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Text {...args}>
        {children}
      </Text>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "defautl Text"
};
