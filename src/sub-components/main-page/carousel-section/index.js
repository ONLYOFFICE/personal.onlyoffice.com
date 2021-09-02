import React, { useRef } from "react";

import Carousel from "../../../../components/carousel";
import StyledCarouselSection from "./styled-carousel-section";
import {
  textCarouselSettings,
  imageCarouselSettings,
} from "./sub-components/carousel-settings";
import { getTextItems, getImageItems } from "./sub-components/carousel-slides";

const localizedImages = ["ru", "de", "fr", "en"];

const CarouselSection = (props) => {
  const { t, language } = props;

  const textSliderRef = useRef();
  const imageSliderRef = useRef();

  let localizedPath = "en";

  localizedImages.map((languageKey) => {
    if (language.includes(languageKey)) {
      localizedPath = languageKey;
    }
    return false;
  });

  const mapCarouselItems = (arrayItems) => {
    const srcImage = `/site-assets/screenshots/${localizedPath}/`;

    return arrayItems.slides.map((item) => {
      if (item.type === "image")
        return {
          ...item,
          src: srcImage + item.imageName,
        };
      else return item;
    });
  };

  const textCarouselData = mapCarouselItems(getTextItems(t));
  const imageCarouselData = mapCarouselItems(getImageItems(t));

  return (
    <StyledCarouselSection
      background="#fff"
      padding="112px 0 48px"
      tabletPadding="104px 0"
      mobileLPadding="102px 0 60px"
      maxWidth="100%"
      maxWidthLaptop="100%"
      {...props}
    >
      <Carousel
        arrows={false}
        items={textCarouselData}
        settingsCarousel={textCarouselSettings}
        asNavForCarousel={imageSliderRef.current}
        refCarousel={(slider) => (textSliderRef.current = slider)}
        className="text-carousel"
      />
      <Carousel
        arrows={true}
        items={imageCarouselData}
        settingsCarousel={imageCarouselSettings}
        asNavForCarousel={textSliderRef.current}
        refCarousel={(slider) => (imageSliderRef.current = slider)}
        className="image-carousel"
      />
    </StyledCarouselSection>
  );
};

export default CarouselSection;
