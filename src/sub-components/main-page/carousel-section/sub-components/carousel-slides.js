const getButtonItems = (t) => {
  return {
    slides: [
      {
        id: 0,
        type: "button",
        buttonText: t("Documents"),
        iconName: "documents.svg",
      },
      {
        id: 1,
        type: "button",
        buttonText: t("Spreadsheets"),
        iconName: "spreadsheets.svg",
      },
      {
        id: 2,
        type: "button",
        buttonText: t("Presentations"),
        iconName: "presentations.svg",
      },
      {
        id: 3,
        type: "button",
        buttonText: t("Collaborate"),
        iconName: "collaborate.svg",
      },
    ],
    get: function (id) {
      const isSlides = (s) => s.id === id;
      return this.slides.find(isSlides);
    },
    getAll: function () {
      return this.slides;
    },
  };
};
const getTextItems = (t) => {
  return {
    slides: [
      {
        id: 0,
        type: "text",
        headingText: t("DocSlideSectionCarouselHeading"),
        descriptionText: t("DocSlideSectionCarouselText"),
      },
      {
        id: 1,
        type: "text",
        headingText: t("TabSlideSectionCarouselHeading"),
        descriptionText: t("TabSlideSectionCarouselText"),
      },
      {
        id: 2,
        type: "text",
        headingText: t("PresSlideSectionCarouselHeading"),
        descriptionText: t("PresSlideSectionCarouselText"),
      },
      {
        id: 3,
        type: "text",
        headingText: t("CollaborationSlideSecitonCarouselHeading"),
        descriptionText: t("CollaborationSlideSectionCarouselText"),
      },
    ],
    get: function (id) {
      const isSlides = (s) => s.id === id;
      return this.slides.find(isSlides);
    },
    getAll: function () {
      return this.slides;
    },
  };
};
const getImageItems = () => {
  return {
    slides: [
      {
        id: 0,

        type: "image",
        imageName: "doc.png",
        alt: "doc",
      },
      {
        id: 1,

        type: "image",
        imageName: "tab.png",
        alt: "tab",
      },
      {
        id: 2,

        type: "image",
        imageName: "pres.png",
        alt: "pres",
      },
      {
        id: 3,

        type: "image",
        imageName: "collaboration.png",
        alt: "collaboration",
      },
    ],
    get: function (id) {
      const isSlides = (s) => s.id === id;
      return this.slides.find(isSlides);
    },
    getAll: function () {
      return this.slides;
    },
  };
};

export { getButtonItems, getTextItems, getImageItems };
