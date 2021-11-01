import React from "react";
import Carousel from "./";

const imageItems = [
  {
    id: 0,
    type: "image",
    imageName: "doc.png",
    alt: "doc",
    src: "static/images/screenshots/en/doc.png",
  },
  {
    id: 1,
    type: "image",
    imageName: "tab.png",
    alt: "tab",
    src: "static/images/screenshots/en/tab.png",
  },
  {
    id: 2,
    type: "image",
    imageName: "pres.png",
    alt: "pres",
    src: "static/images/screenshots/en/pres.png",
  },
  {
    id: 3,
    type: "image",
    imageName: "collaboration.png",
    alt: "collaboration",
    src: "static/images/screenshots/en/collaboration.png",
  },
];

const imageCarouselSettings = {
  fade: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
      },
    },
  ],
};

export default {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: "Carousel is used to display images.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Carousel {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: imageItems,
  arrows: true,
  settingsCarousel: imageCarouselSettings,
};
