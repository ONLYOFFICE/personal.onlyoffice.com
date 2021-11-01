import React from "react";
import PropTypes, { object } from "prop-types";

import StyledGroupButton from "./styled-button-group";

const ButtonPanel = ({ className, ...rest }) => {
  return (
    <StyledGroupButton
      className={`info-panel-button-group ${className}`}
      {...rest}
    />
  );
};

ButtonPanel.propTypes = {
  components: PropTypes.arrayOf(object),
};

export default ButtonPanel;
