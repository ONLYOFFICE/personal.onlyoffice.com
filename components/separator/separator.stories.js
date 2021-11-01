import React from "react";
import Separator from ".";

export default {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: "Separator component",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Separator {...args}>{args.children}</Separator>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: "Some Text",
};
