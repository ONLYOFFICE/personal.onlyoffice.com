import React from "react";
import Image from "./";

export default {
  title: "Components/Image",
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          "Component for interacting with pictures in the next.js environment",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Image {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
