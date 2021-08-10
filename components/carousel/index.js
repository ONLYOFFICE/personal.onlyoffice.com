import React from "react";
import PropTypes from "prop-types";
import Heading from "../heading";
import Text from "../text";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import StyledCarousel from "./styled-carousel";
import Image from "./sub-components";

const Carousel = ({
settingsSlider,
isTextCarousel,
isImageCarousel, 
isArrows,
isImage,
itemCarousel,
refCarousel,
asNavForCarousel,
...rest
}) => {

  const settings = settingsSlider ||
    {
      fade: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <StyledCarousel arrows={isArrows} {...rest}>
      <Slider 
        ref={refCarousel}
        asNavFor={asNavForCarousel}
        {...settings}
      >
          {
            itemCarousel.map((item) => 
              <div key={item.id}>
                {isTextCarousel &&
                  <div className="text-carousel">
                    <Heading 
                      textAlign="center" 
                      level={2}
                    >
                      {item.Heading}
                    </Heading>
                    <Text 
                      textAlign="center" 
                      fontSize={"18px"}
                    >
                      {item.Text}
                    </Text>
                  </div>  
                }
                {isImageCarousel &&
                 <Image 
                    src={item.src}
                    defaultSrc={item.defaultSrc}
                    alt={item.alt}
                    isImage={isImage}
                  />
                }
              </div>
            )
          }
      </Slider>
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  /** Carousel settings*/
  settingsSlider: PropTypes.object,
  /** Carousel array item*/
  itemCarousel: PropTypes.arrayOf(PropTypes.object),
  /** Carousel text*/
  isTextCarousel: PropTypes.bool,
  /** Carousel image*/
  isImageCarousel: PropTypes.bool,
  /** Carousel arrows*/
  isArrows: PropTypes.bool,
  /** */
  isImage: PropTypes.bool,
  /** Button tab index */
  tabIndex: PropTypes.number,
  /** Accepts class */
  className: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
};

Carousel.defaultProps = {
  settingsSlider: {},
  itemCarousel: [{}],
  isTextCarousel: false,
  isImageCarousel: true,
  isArrows: true,
  isImage: false,
  backGroundImage: true,
  tabIndex: -1
};

export default Carousel;
