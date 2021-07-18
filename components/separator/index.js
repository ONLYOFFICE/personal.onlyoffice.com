import React from "react";
import PropTypes from "prop-types";
import StyledSeparator from "./styled-separator";

const Separator = (props) => {
  return (
      <StyledSeparator {...props}>
        <div/>
            <span>{props.children}</span>
        <div/>
      </StyledSeparator>
    );
};

Separator.propTypes = {
  /**   Separator color */
  color: PropTypes.string,
  /**   Separator height */
  height: PropTypes.string,
  /**   Separator text padding */
  padding: PropTypes.string,
  /** Accepts CSS style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**  Accepts tab Index */
  tabIndex: PropTypes.number,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

Separator.defaultProps = {
  height: "1px",
  tabIndex: -1,
};

export default Separator;
