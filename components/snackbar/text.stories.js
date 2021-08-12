import React from "react";
import Snackbar from ".";

import Text from "../text";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
  parameters: {
    docs: {
      description: {
        component: "Custom Text component",
      },
    },
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = ({ children, ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Snackbar {...args}>
        <Text fontSize="13px">You can add any content here</Text>
      </Snackbar>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
};
