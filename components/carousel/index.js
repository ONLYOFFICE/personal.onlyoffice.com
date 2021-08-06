import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Heading from "../heading";
import Text from "../text";

import StyledCarousel from "./styled-carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({
settingsSlider, 
arrayImage, 
...rest
}) => {
  const settings = settingsSlider ||
    {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      appendArrows: '.your-class-arrow',
      nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      slidesToShow: 1,
      slidesToScroll: 1
    }

  return (
    <StyledCarousel>
      <Slider {...settings}>
          {
            arrayImage.map((item) => 
              <div key={item.id}>
                <div className="text-slider">
                  <Heading textAlign="center" level={2}>{item.Heading}</Heading>
                  <Text textAlign="center" fontSize={"18px"}>{item.Text}</Text>
                </div>                
                <img src={item.src} alt={item.alt} />
              </div>
            )
          }
      </Slider>
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  settingsSlider: PropTypes.object,
  arrayImage: PropTypes.arrayOf(PropTypes.object),
};

Carousel.defaultProps = {
  settingsSlider: {},
  arrayImage: [
    {id: 1, Heading: "Heading", Text: "Heading1", src: "/screenshots/en/doc.png", defaultSrc: "screenshots/en/doc.png", alt: "image",},
    {id: 2, Heading: "Heading2", Text: "Heading2", src: "/screenshots/en/pres.png", defaultSrc: "screenshots/en/pres.png", alt: "image",},
    {id: 3, Heading: "Heading3", Text: "Heading3", src: "/screenshots/en/tab.png", defaultSrc: "screenshots/en/tab.png", alt: "image",},
  ],
};

export default Carousel;
