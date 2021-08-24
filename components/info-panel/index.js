import React from "react";
import PropTypes from "prop-types";

import StyledInfoPanel from "./styled-info-panel";
import ImageGroup from "./sub-components/image-group";
import ButtonGroup from "./sub-components/button-group";
import HeadingGroup from "./sub-components/heading-group";

const InfoPanel = (props) => {
  return <StyledInfoPanel {...props} />;
};

InfoPanel.propTypes = {
  /** Position image*/
  imageOnLeft: PropTypes.bool,
};

export default InfoPanel;

export { ButtonGroup, HeadingGroup, ImageGroup };
