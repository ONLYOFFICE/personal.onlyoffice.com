import React from "react";
import ReviewPanel from "./";

export default {
  title: "Components/ReviewPanel",
  component: ReviewPanel,
  parameters: {
    docs: {
      description: {
        component: "Display ReviewPanel.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <ReviewPanel {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  headerText: "Mario Hamel",
  countStar: 4,
  mainText: "“I've been using OnlyOffice Personal for couple years with my Acer ChromeBook 11 and CloudReady Desktop at Home for couple years now. I like having access to all my Cloud Storage such as Dropbox and Google Drive.”",

};
