import React from "react";
import PropTypes from "prop-types";
import StyledText from "./styled-text";

const Text = ({ as, text, ...rest}) => {
  return (
      <StyledText as={as} {...rest}>
        {text}
      </StyledText>
  );
};

Text.propTypes = {
    /** Text */
    text: PropTypes.string,
    /**   text color */
    color: PropTypes.string,
    /**   text font-size */
    fontSize: PropTypes.string,
    /**   text font-weight */
    fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**   text-transform*/
    textTransform: PropTypes.string,
    /**  text decoration */
    textDecoration: PropTypes.string,
    /** text align */
    textAlign: PropTypes.string,
    /** hover text-decoration  */
    hoverTextDecoration: PropTypes.string,
    /** Change `html` tag*/
    as: PropTypes.string,
    /** What the will trigger when clicked */
    onClick: PropTypes.func,
    /** Accepts CSS style */
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    /**   tab index */
    tabIndex: PropTypes.number,
    /** Accepts id */
    id: PropTypes.string,
    /** Accepts class */
    className: PropTypes.string,
};

Text.defaultProps = {
  color: "#333333",
  fontSize: "14px",
  tabIndex: -1
};

export default Text;
