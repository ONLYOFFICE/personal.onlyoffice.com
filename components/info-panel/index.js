import React from "react";
import PropTypes from "prop-types";

import StyledInfoPanel from "./styled-info-panel";
import ImageGroup from "./sub-components/image-group";
import ButtonGroup from "./sub-components/button-group";
import HeadingGroup from "./sub-components/heading-group";

const InfoPanel = ({
  imgLeft,
  bgColor,
  imgUrl,
  defaultImgUrl,
  headingComponent,
  linkComponents,
  ...rest
}) => {
  return (
    <StyledInfoPanel bgColor={bgColor} imgLeft={imgLeft} {...rest}>
      <HeadingGroup
        className="info-panel-heading"
        key="heading-group"
        heading={headingComponent}
      />
      <ButtonGroup
        key="button-group"
        className="info-panel-button-group"
        components={linkComponents}
      />
      <ImageGroup
        key="image-group"
        className="info-panel-image-group"
        imgLeft={imgLeft}
        imgUrl={imgUrl}
        defaultImgUrl={defaultImgUrl}
      />
    </StyledInfoPanel>
  );
};

InfoPanel.propTypes = {
  /** Position image*/
  imgLeft: PropTypes.bool,
  /** Background color*/
  bgColor: PropTypes.string,
  /** Array button*/
  linkComponents: PropTypes.arrayOf(PropTypes.object),
  /** URL image*/
  imgUrl: PropTypes.string,
  /** On error loading image, use default image*/
  defaultImgUrl: PropTypes.string,
};

export default InfoPanel;
