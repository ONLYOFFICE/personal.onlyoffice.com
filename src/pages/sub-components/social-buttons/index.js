import React from "react";
import SocialButton from "../../../../components/social-button";

import StyledSocialButtons from "./styled-social-buttons";

const SocialButtons = (props) => {
  const { clickSocialButton } = props;

  return (
    <StyledSocialButtons>
      <SocialButton
        iconName="/social-icons/google.react.svg"
        onClick={clickSocialButton}
      />
      <SocialButton
        iconName="/social-icons/facebook.react.svg"
        onClick={clickSocialButton}
      />
      <SocialButton
        iconName="/social-icons/linkedin.react.svg"
        onClick={clickSocialButton}
      />
    </StyledSocialButtons>
  );
};

export default SocialButtons;
