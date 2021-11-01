import React from "react";
import PropTypes from "prop-types";

import StyledInfoPanel from "./styled-info-panel";
import ImageGroup from "./sub-components/image-group";
import ContentGroup from "./sub-components/content-group";

const InfoPanel = ({ imageData, contentComponent, ...rest }) => {
  return (
    <StyledInfoPanel {...rest}>
      <ContentGroup children={contentComponent} />
      <ImageGroup imageData={imageData} />
    </StyledInfoPanel>
  );
};

InfoPanel.propTypes = {
  /** Position image*/
  imageOnLeft: PropTypes.bool,
};

export default InfoPanel;
