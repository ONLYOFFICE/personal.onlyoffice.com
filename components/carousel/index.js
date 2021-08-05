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
      slidesToShow: 1,
      slidesToScroll: 1
    }

  return (
    <StyledCarousel>
      <Slider {...settings}>
          {
            arrayImage.map((item) => 
              <div key={item.id}>
                 <Heading>{item.Heading}</Heading>
                 <Text>{item.Text}</Text>
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
