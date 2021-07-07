import React from "react";
import PropTypes from "prop-types";
import StyledCheckbox from "./styled-checkbox";

const Checkbox = (props) => {
  return <StyledCheckbox {...props} type="checkbox" />;
};

Checkbox.propTypes = {};

Checkbox.defaultProps = {};

export default Checkbox;
