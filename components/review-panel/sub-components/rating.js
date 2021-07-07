import React from "react";
import PropTypes from "prop-types";
import StyledRating from "./styled-rating";

const Rating = (props) => {
  return <StyledRating {...props} />;
};

Rating.propTypes = {};

Rating.defaultProps = {};

export default Rating;
