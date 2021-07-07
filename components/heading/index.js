import React from "react";
import PropTypes from "prop-types";
import StyledHeading from "./styled-heading";

const Heading = (props) => {
  return <StyledHeading {...props} />;
};

Heading.propTypes = {};

Heading.defaultProps = {};

export default Heading;
