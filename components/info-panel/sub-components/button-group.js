import React from "react";
import PropTypes, { object } from "prop-types";

import StyledGroupButton from "./styled-button-group";

const ButtonPanel = ({ className, components }) => {
  return (
    <StyledGroupButton className={className} countItems={components?.length}>
      {components}
    </StyledGroupButton>
  );
};

ButtonPanel.propTypes = {
  components: PropTypes.arrayOf(object),
};

export default ButtonPanel;
