import React from "react";
import PropTypes from "prop-types";
import StyledRating from "./styled-rating";
import Star from "./star";
//https://codepen.io/martijndevalk/pen/oNWxaLZ
//https://codepen.io/aledebarba/pen/JjWPjVG
//https://www.figma.com/file/LQgvSxoucrvUb2IE6HNjm0/Personal.onlyoffice.com?node-id=443%3A0

const Rating = ({ idStar, countStar, ...rest }) => {
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

};

Rating.defaultProps = {};

export default Rating;
