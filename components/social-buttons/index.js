import React from "react";
import PropTypes from "prop-types";

import IconButton from "../icon-button";
import StyledSocialButton from "./styled-social-buttons";

const SocialButton = ({ iconName, ...rest }) => {
  return (
    <StyledSocialButton {...rest}>
      <IconButton
        iconName={iconName}
        className="social-button-img"
        size="max-content"
      />
    </StyledSocialButton>
  );
};

SocialButton.propTypes = {
  /** Set component id */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Set component class */
  className: PropTypes.string,
  /** Takes the path to the icon (the icon must be located in a static folder) */
  iconName: PropTypes.string.isRequired,
  /** Accepts css style */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default SocialButton;
