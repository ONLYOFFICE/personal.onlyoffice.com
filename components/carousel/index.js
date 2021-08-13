import React from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import StyledCarousel from "./styled-carousel";
import CarouselHeading from "./sub-components/carousel-heading";
import CarouselText from "./sub-components/carousel-text"
import CarouselImage from "./sub-components/carousel-image";

const Carousel = ({
  settingsCarousel,
  isArrows,
  panelCarousel,
  refCarousel,
  asNavForCarousel,
  ...rest
}) => {

  const settings = settingsCarousel ||
  {
    fade: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const Slides = [];

  panelCarousel.forEach((it) => {
    let ellementsSlide = [];

    it.forEach((item, idx) => {
      switch (item.type) {

        case "heading":
          ellementsSlide.push(
            <CarouselHeading
              key={`${item.type}-${idx}`}
              item={item}
            />
          );
          break;

        case "text":
          ellementsSlide.push(
            <CarouselText
              key={`${item.type}-${idx}`}
              item={item}
            />
          );
          break;

        case "image":
          ellementsSlide.push(
            <CarouselImage
              key={`${item.type}-${idx}`}
              item={item}
            />
          );
          break;

        case "other":
          ellementsSlide.push(item.element);
          break;

        default:
          break;
      }
    });

    return Slides.push(ellementsSlide);
  });

  let Slide = Slides.map((it, i) =>
    <div key={`slide-${i}`} className={`slide slide-${i}`}>
      {
        it.map((item) => {
          return item;
        })
      }
    </div>
  )

  return (
    <StyledCarousel arrows={isArrows} {...rest}>
      <Slider
        asNavFor={asNavForCarousel}
        ref={refCarousel}
        {...settings}
      >
        {Slide}
      </Slider>
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  /** Carousel settings*/
  settingsCarousel: PropTypes.object,
  /** Carousel array item*/
  panelCarousel: PropTypes.arrayOf(PropTypes.array),
  /** Carousel arrows*/
  isArrows: PropTypes.bool,
  /** Carousel tab index */
  tabIndex: PropTypes.number,
  /** Accepts class */
  className: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
};

Carousel.defaultProps = {
  settingsCarousel: {},
  panelCarousel: [{}],
  isArrows: true,
  tabIndex: -1
};

export default Carousel;
