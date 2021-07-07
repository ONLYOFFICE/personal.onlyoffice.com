import React from "react";
import IconButton from "./";

export default {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: "IconButton is used for a action on a page.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <IconButton {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
