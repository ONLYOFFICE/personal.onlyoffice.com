import React, { useRef } from "react";

import Carousel from "../../../../components/carousel";
import StyledCarouselSection from "./styled-carousel-section";
import { getButtonItems, getTextItems, getImageItems } from "./sub-components/carousel-slides";
import { getLocalizedImagePrefix } from "../../../helpers";
import Text from "../../../../components/text";

const localizedImages = ["ru", "de", "fr", "en-US"];

const CarouselSection = (props) => {
  const { t, language } = props;

  const textSliderRef = useRef();
  const imageSliderRef = useRef();

  const prefix = getLocalizedImagePrefix(localizedImages, language);

  const mapCarouselItems = (arrayItems) => {
    const srcImage = `/site-assets/screenshots/${prefix}/`;

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

  const buttonCarouselItems = getButtonItems(t);
  const srcIcon = `/site-assets/carousel-icons/`;

  const textCarouselSettings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    customPaging: function(i) {
      const curItem = buttonCarouselItems.slides[i];
      return (
        <a>
          <img src={`${srcIcon}${curItem.iconName}`} />
          <Text>{curItem.buttonText}</Text>
        </a>
      );
    },
  };

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
