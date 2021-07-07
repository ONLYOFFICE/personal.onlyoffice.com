import React from "react";
import PropTypes from "prop-types";
import StyledHeader from "./styled-header";

const Header = (props) => {
  return <StyledHeader {...props} />;
};

StyledHeader.propTypes = {};

StyledHeader.defaultProps = {};

export default StyledHeader;
