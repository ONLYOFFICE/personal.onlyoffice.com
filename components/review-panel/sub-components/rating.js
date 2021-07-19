import React from "react";
import PropTypes from "prop-types";
import StyledRating from "./styled-rating";
import Star from "./star";

const Rating = ({ countStar, ...rest }) => {
  const MAX_STAR = 5;
  const ARR_STAR = new Array(5).fill();
  return (
      <StyledRating {...rest}>
        { MAX_STAR >= countStar
          ? ARR_STAR.map((it, i) => 
            <Star 
              key={i} 
              className={`star-class-${countStar >= i+1 ? "gold" : "default"}`}
            />)
          : null
        }
      </StyledRating>
    );
};

Rating.propTypes = {
  /** Rating */
  countStar: PropTypes.number,
  /** External link tab index */
  tabIndex: PropTypes.number,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

Rating.defaultProps = {
  tabIndex: -1,
};

export default Rating;
