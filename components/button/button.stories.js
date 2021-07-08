import React from "react";
import Button from "./";
import { useTheme } from "../theme-provider";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Button is used for a action on a page.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Button {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Some Label",
  type: "primary",
  isDisabled: false,
  scale: false,
  width: "auto",
  height: "56px",
  tabIndex: -1,
};
