import React from "react";
import PropTypes from "prop-types";

import IconButton from "../icon-button";
import StyledSocialButton from "./styled-social-buttons";

const SocialButton = ({ dataUrl, dataProvidername, onClick, ...rest }) => {
  return (
    <StyledSocialButton
      onClick={onClick}
      data-url={dataUrl}
      data-providername={dataProvidername}
      className="social-button"
    >
      <IconButton className="social-button-img" size="max-content" {...rest} />
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
