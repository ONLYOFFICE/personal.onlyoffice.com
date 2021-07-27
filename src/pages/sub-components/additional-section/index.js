import React from "react";
import { Link } from "gatsby";
import Text from "../../../../components/text";
import Button from "../../../../components/button";

import StyledAdditionalSection from "./styled-additional-section";

const AdditionalSection = (props) => {
  const {
    textLabel,
    buttonHref,
    buttonLabel,
    marginTop,
    smallMarginTop,
  } = props;

  return (
    <StyledAdditionalSection
      key="additional"
      marginTop={marginTop}
      smallMarginTop={smallMarginTop}
    >
      <Text className="additional-text" fontWeight="600">
        {textLabel}
      </Text>
      <Link to={buttonHref}>
        <Button
          className="additional-button"
          label={buttonLabel}
          typeButton="transparent"
          width="100%"
        />
      </Link>
    </StyledAdditionalSection>
  );
};

export default AdditionalSection;
